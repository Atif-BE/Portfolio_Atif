import emailjs from "@emailjs/browser";
import { TEMPLATE_ID, SERVICE_ID, USER_ID } from "../config/config.js"

const Form = () => {
    const sendMail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID,TEMPLATE_ID, e.target, USER_ID)
            .then(

            )

            e.target.reset();
    }

    return(
        <form>
            <label>Name</label>
            <input type='text' placeholder='Your Name' name='name' required></input>
            <label>E-mail</label>
            <input type='email' placeholder='Your Email' name='email' required></input>
            <label>Message</label>
            <textarea placeholder='Coding a Message...' name='message' rows={5} required></textarea>
            <button type='submit'>Send Message</button>
        </form>
    )
}

export default Form;