import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import { Container, EmailFormInput, FormInput, InputContainer, Textarea } from './style';
import { Button } from '../../styles';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && email && message) {
            const serviceId = process.env.REACT_APP_SERVICE_ID as string;
            const templateId = process.env.REACT_APP_TEMPLATE_ID as string;
            const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string;
            const templateParams = {
                name,
                email,
                message
            };
            emailjs.send(serviceId, templateId, templateParams, publicKey)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields')
        }
    }

    return (
        <Container>
            <InputContainer>
                <FormInput type='text' placeholder='Your Name' value={name} onChange={e => setName(e.target.value)} /> 
                <EmailFormInput type='email' placeholder='Your email adress' value={email} onChange={e => setEmail(e.target.value)} />
            </InputContainer>
            <Textarea placeholder='Your message' value={message} onChange={e => setMessage(e.target.value)} />
            <Button onClick={submit}>send</Button>
            <span className={emailSent ? 'visible' : undefined}>Thank you for your message, we will be in touch</span>
        </Container>
    )
}

export default Contact;