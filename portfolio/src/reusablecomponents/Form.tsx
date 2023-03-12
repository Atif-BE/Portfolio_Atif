import emailjs from "@emailjs/browser";
import { TEMPLATE_ID, SERVICE_ID, USER_ID } from "../config/config.js"
import { Btn } from "../styles/Btn.js";
import { FormWrapper } from "../styles/Form.js";

const Form = () => {
    const sendMail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID,TEMPLATE_ID, e.target, USER_ID)
            .then(

            )

            e.target.reset();
    }

    return(
        <FormWrapper onSubmit={sendMail}>
            <label style={{}}>NAME</label>
            <input style={{borderRadius:"5px", height:"1.5rem", border:"none"}} type='text' placeholder='Your Name' name='name' required></input>
            <label>E-MAIL</label>
            <input style={{ borderRadius: "5px", height: "1.5rem", border: "none" }} type='email' placeholder='Your Email' name='email' required></input>
            <label>MESSAGE</label>
            <textarea style={{ borderRadius: "5px", border: "none" }} placeholder='Coding a Message...' name='message' rows={5} required></textarea>
            <Btn type='submit'>Send Message</Btn>
        </FormWrapper>
    )
}

export default Form;