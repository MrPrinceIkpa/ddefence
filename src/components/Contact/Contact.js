import styles from './Contact.module.css';
import Button from '../Button/Button';
import { isEmpty, validateEmail, validateNumber } from '../../../utils/form';
import { useRef, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

export default function Contact () {
    var contactData = {};
    var form = useRef();
    var submitBtnWrapper = useRef();
    var errLog = [];
    var [loading, setLoading] = useState(false);

    useEffect(function(){
        document.addEventListener('click', handleGlobalClick);
        
        return () => {
          document.removeEventListener('click', handleGlobalClick);
        };
    }, [])

    const handleGlobalClick = function (e) {
        if (submitBtnWrapper.current.contains(e.target)) {
            return
        }
        if (errLog) {
            errLog.map(function (err, index) {
                err[1].style.outline = "none";
            });
        }
    }

    const sendData = async function (data, api, method) {
        try {
            const res = await fetch(api, {
            method: method.toUpperCase(),
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Something went wrong");
            }

            const resultData = await res.json();
            return resultData
            //toast.success("We've Sent you an email!");


        } catch (err) {
            //toast.error(err.message);
            console.log(err)
            return 0
        }
    }

    const handleForm = async function (e) {
        e.preventDefault();
        errLog = [];

        if(loading) {
            return;
        }

        //validate name;
        if (isEmpty(form.current.name.value.trim())) {
            errLog.push([
                'Name field is empty',
                form.current.name
            ])
        } else if(form.current.name.value.trim().length < 3) {
            errLog.push([
                "Name can't be less than 3 characters",
                form.current.name
            ])
        }
        //validate email;
        if (!validateEmail(form.current.email.value).verdict) {
            errLog.push([
                validateEmail(form.current.email.value).error_message,
                form.current.email
            ])
        }
        //validate number;
        if (!validateNumber(form.current.phone.value).verdict) {
            errLog.push([
                validateNumber(form.current.phone.value).error_message,
                form.current.phone
            ])
        }
        //validate service
        if (isEmpty(form.current.service.value)) {
            errLog.push([
               "Select a service",
               form.current.service
            ])
        }
        //validate message
        if(isEmpty(form.current.message.value)) {
            errLog.push([
                "Message cannot be empty",
                form.current.message
            ])
        } else if(form.current.message.value.trim().length < 20) {
            errLog.push([
                "Message should be at least 20 characters",
                form.current.message
            ])
        }
        if (errLog.length >= 1) {
            errLog.map(function (err, index) {
                console.log(err[0])
                toast.error(err[0])//toast the error message
                err[1].style.outline = "1px solid red";
            });
            contactData = false;
        }
        else {
            contactData = {
                name : form.current.name.value.trim(),
                phone : validateNumber(form.current.phone.value).refined_number,
                email : validateEmail(form.current.email.value).refined_email,
                service : form.current.service.value.trim(),
                message : form.current.message.value.trim()
            }
        }

        if(!contactData) {
            return
        }
        //start loading
        setLoading(true)

        toast.success("...Sending your message");

        sendData(contactData, "/api/handleForm", "POST").then(function (result) {
            //stop loading
            setLoading(false)
            if (result) {
                toast.success("We'll Contact you Immediately");
                clearForm();
            }
            else {
                toast.error("An error occured")
            }
        }, ()=> toast.error("An error occured"));
    }

    const clearForm = function () {
         form.current.name.value = "";
         form.current.phone.value = "";
         form.current.email.value = "";
         form.current.service.value = "";
         form.current.message.value = "";
    }

    return (
        <div className={styles.contact_con}>
            <div className={styles.cont_head}>
                <h2>Contact</h2>
            </div>
            <div className={styles.cont_body}>
                <form ref={form}>
                    <fieldset disabled={loading?true:false} className={styles.fieldset}>
                        <div className={styles.form_name}>
                            <input name="name" placeholder='name' />
                        </div>
                        <div className={styles.form_email}>
                            <input name="email" placeholder='email' />
                        </div>
                        <div className={styles.form_phone}>
                            <input name="phone" type="number" placeholder='phone' />
                        </div>
                        <div className={styles.form_service}>
                            <select name="service">
                                <option value="">Service Needed</option>
                                <option value="Private Security">Private Security</option>
                                <option value="Private Investigation">Private Investigation</option>
                                <option value="Electronic Surveilance">Electronic Surveilance</option>
                            </select>
                        </div>
                        <div className={styles.form_message}>
                            <textarea name="message" placeholder='message'>
                            </textarea>
                        </div>
                        <div ref={submitBtnWrapper} className={styles.form_submit}>
                            <Button 
                                custom_style={{opacity: loading? "0.3":"1", cursor: loading? "not-allowed":"pointer"}} 
                                on_click={handleForm} 
                                value='submit'
                                />
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}