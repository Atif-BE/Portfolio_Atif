import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { TEMPLATE_ID, SERVICE_ID, USER_ID } from "../config/config.js"
import { Btn } from "../styles/Btn.js";

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
`

const Form = () => {
    const sendMail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID,TEMPLATE_ID, e.target, USER_ID)
            .then(

            )

            e.target.reset();
    }

    return(
        <FormWrapper>
            <label>Name</label>
            <input type='text' placeholder='Your Name' name='name' required></input>
            <label>E-mail</label>
            <input type='email' placeholder='Your Email' name='email' required></input>
            <label>Message</label>
            <textarea placeholder='Coding a Message...' name='message' rows={5} required></textarea>
            <Btn type='submit'>Send Message</Btn>
        </FormWrapper>
    )
}

export default Form;