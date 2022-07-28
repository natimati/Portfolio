import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import { Container, EmailFormInput, Form, FormContainer, FormInput, InputContainer, InputError, RodoInformation, Textarea } from './style';
import { Button } from '../../styles';
import { useForm } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
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

    return (
        <Container>
            <h1>Write to us</h1>
            <Form onSubmit={onSubmit}>
                <FormContainer>
                    <InputContainer>
                        <FormInput
                            type='text'
                            {...register("name", { required: true, minLength: 3, maxLength: 15 })}
                            placeholder='Your Name'
                            value={name}
                            onChange={e => setName(e.target.value)} /> 
                        <InputError>
                            {errors.name?.type === "required" && "Please enter your name"}
                            {errors.name?.type === "minLength" && "Use at least 3 characters"}
                            {errors.name?.type === "maxLength" && "You can use 20 characters at most"}
                        </InputError>
                    </InputContainer>
                    <InputContainer>
                        <EmailFormInput
                            type='email'
                            {...register("email", {  required: true,
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "invalid email address",
                                }})}
                            placeholder='Your email adress'
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                        <InputError>
                            {errors.email?.type === "required" && "Please enter your email"}
                        </InputError>
                        </InputContainer>
                    </FormContainer>
                <Textarea placeholder='Your message' value={message} onChange={e => setMessage(e.target.value)} />
                <Button onClick={submit}>send</Button>
                <RodoInformation>
                    Personal data contained in the above form will be processed by the authors of the website
                    https://bnportfolio.netlify.app (e-mail: beti.i.naska@gmail.com). <br />Personal data provided via the
                    contact form will be processed only for the purpose of responding to your message. <br />You have
                    the right to withdraw consent at any time and request access, rectification, deletion
                    and limitation of your data. Providing personal data is voluntary, however, without providing it,
                    we will not be able to respond to the message.
                </RodoInformation>
            </Form>
        </Container>
    )
}

export default Contact;