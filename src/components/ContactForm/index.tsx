import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import { EmailFormInput, Form, FormContainer, FormInput, InputContainer, InputError, Textarea } from './style';
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
        } else {
            // alert('Please fill in all fields')
        }
    }

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const onSubmit = handleSubmit((data) => console.log(data));

    return (
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
                <span className={emailSent ? 'visible' : undefined}>Thank you for your message, we will be in touch</span>
            </Form>
    )
}

export default Contact;