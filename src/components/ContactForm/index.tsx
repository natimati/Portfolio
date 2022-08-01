import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import { Container, EmailFormInput, Form, FormInput, InputError, RodoInformation, Message, EmailInputError, MessageInputError, SendButton } from './style';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';

type FormValues = {
    name: string;
    email: string;
    message: string;
};

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
        } 
    }

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const onSubmit = handleSubmit((data) => console.log(data));

    const onChange = (value: any) => {
        console.log('Captcha value:', value)
    }

    return (
        <Container>
            <h1>Want to connect? Let's talk!</h1>
            <Form onSubmit={onSubmit}>
                <FormInput
                    type='text'
                    {...register("name", { required: true, minLength: 3, maxLength: 15 })}
                    placeholder='Your name'
                    value={name}
                    onChange={e => setName(e.target.value)} /> 
                <InputError>
                    {errors.name?.type === "required" && "Please enter your name"}
                    {errors.name?.type === "minLength" && "Use at least 3 characters"}
                    {errors.name?.type === "maxLength" && "You can use 20 characters at most"}
                </InputError>
                <EmailFormInput
                    type='email'
                    {...register("email", {  required: true, minLength: 3, maxLength: 320,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address",
                    }})}
                    placeholder='Your email adress'
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
                <EmailInputError>
                    {errors.email?.type === "required" && "Please enter your email"}
                    {errors.email?.type === "minLength" && "Use at least 3 characters"}
                    {errors.email?.type === "maxLength" && "You can use 320 characters at most"}
                </EmailInputError>
                <Message
                    {...register("message", {  required: true, minLength: 10, maxLength: 320 })}
                    placeholder='Your message'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <MessageInputError>
                    {errors.message?.type === "required" && "Please enter your message"}
                    {errors.message?.type === "minLength" && "Use at least 10 characters"}
                    {errors.message?.type === "maxLength" && "You can use 2000 characters at most"}
                </MessageInputError>
                <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY as string} onChange={onChange} />
                <SendButton onClick={submit}>send</SendButton>
            </Form>
            <RodoInformation>
                    Personal data contained in the above form will be processed by the authors of the website
                    https://bnportfolio.netlify.app (e-mail: beti.i.naska@gmail.com). <br />Personal data provided via the
                    contact form will be processed only for the purpose of responding to your message. <br />You have
                    the right to withdraw consent at any time and request access, rectification, deletion
                    and limitation of your data. Providing personal data is voluntary, however, without providing it,
                    we will not be able to respond to the message.
            </RodoInformation>
        </Container>
    )
}

export default Contact;