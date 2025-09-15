'use client'

import styles from './Footer.module.css';
import Button from '@/components/Button/Button'
import { handleEmail } from '../../../utils/form';
import { toast } from 'react-hot-toast';
import { useRef, useState } from 'react';

export default function Footer() {
    var email = useRef();
    var [loading, setLoading] = useState(false);

    const sendData = async function (data) {
        var api="/api/subscribe";
        var method="POST";

        setLoading(true);

        try {
            const res = await fetch(api, {
            method: method.toUpperCase(),
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
            });

            if (!res.ok) {
                const errorData = await res.json();
                toast.error(errorData.error)
                throw new Error(errorData.error || "Something went wrong");
            }

            toast.success("Thanks for subscribing");
            setLoading(false);
            email.current.value="";
        }
        catch (err) {
            setLoading(false);
            //console.log(err)
        }
    }
    const handleSubscription = function(e) {
        e.preventDefault();
        if (loading) {
            return
        }
        handleEmail(e, email.current.value, (d)=>sendData({email:d}), null)
    }
    return (
        <footer className={styles.con}>
            <div className={styles.foot_sec_1}>
                <h1>DiscerningDefence</h1>
                <div>
                    <form>
                        <fieldset>
                            <div>
                                <h4>Subscribe to Our newsletter</h4>
                            </div>
                            <div className={styles.subscribe_wrapper}>
                                <input ref={email} placeholder='email' />
                                <Button 
                                    custom_style={loading?{
                                        opacity: "0.3",
                                        cursor: "not-allowed"
                                    }:{}} 
                                    on_click={(e)=>handleSubscription(e)} 
                                    value='send'
                                />
                            </div>
                        </fieldset>
                    </form>
                </div>
                <h5>&copy; 2025</h5>
            </div>
            <div className={styles.foot_sec_2}>
            </div>
        </footer>
    )
}