import toast from 'react-hot-toast';

const validateEmail = function (email) {
    var verdict = false, error_message, refined_email;
    var reg_exp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    email = email.toString().trim().toLowerCase();    
    if (email === "") {
	error_message = "email field is empty";
    }
    else if (!reg_exp.test(email)) {
	error_message = "invalid email format"
    }
    else {
	verdict = true;
	refined_email = email;
    }
    return ({
	refined_email, verdict, error_message
    });
}

const handleEmail = function (e, email, toDo, notToDo) {
    var emailResponse, errorLog = [];
    e.preventDefault();

    emailResponse = validateEmail(email);

    if (!emailResponse.verdict) {
        errorLog.push(emailResponse.error_message);
        toast.error(`Error:  ${errorLog}`);
        notToDo? notToDo(): null;
    }
    else {
	    toDo(emailResponse.refined_email);
    }
}
const validateNumber = function(value) {
    var regex = /^[0-9]+$/;
    value = value.toString().trim();
    if(isEmpty(value)) {
        return {
            verdict: false,
            error_message: "number is empty"
        }
    }
    if (!regex.test(value)) {
        return {
            verdict: false,
            error_message: "number field has another character"
        }
    }
    return {
        verdict: true,
        refined_number: value,
        error_message: false
    }
    
}
const isEmpty = function (value) {
    value = value.toString().trim();
    return (value === "");
}

export {validateEmail, handleEmail, isEmpty, validateNumber};