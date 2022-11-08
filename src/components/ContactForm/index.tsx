import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Container,
  Form,
  FormInput,
  InputError,
  RodoInformation,
  Message,
  SendButton,
  ReCAPTCHAContainer,
  NameInputContainer,
  EmailInputContainer,
  MessageInputContainer,
  Label,
} from "./style";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const serviceId = process.env.REACT_APP_SERVICE_ID as string;
const templateId = process.env.REACT_APP_TEMPLATE_ID as string;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string;

function Contact() {
  const [emailSent, setEmailSent] = useState(false);
  const [isNotRobot, setIsNotRobot] = useState(false);
  const captchaRef = useRef<ReCAPTCHA | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => {
    const { name, email, message } = data;
    console.log(data);
    if (isNotRobot && name && email && message) {
      const templateParams = {
        name,
        email,
        message,
      };
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          setEmailSent(true);
          setValue("name", "");
          setValue("email", "");
          setValue("message", "");
          if (captchaRef.current) {
            captchaRef.current.reset();
          }
        })
        .catch((error) => console.log(error));
    }
  });
  const handleRecaptchaChange = () => {
    setIsNotRobot(true);
  };

  return (
    <Container>
      {emailSent ? (
        <h1>
          Thank you for your message, we write you back as soon as possible!
        </h1>
      ) : (
        <>
            <h1>Want to connect? Let's talk!
            </h1>
          <Form onSubmit={onSubmit}>
            <NameInputContainer>
              <Label htmlFor="name">Name</Label>
              <FormInput
                id="name"
                type="text"
                {...register("name", {
                  required: true,
                  minLength: 3,
                  maxLength: 50,
                })}
                placeholder="Your name"
              />
              <InputError>
                {errors.name?.type === "required" && "Please enter your name"}
                {errors.name?.type === "minLength" &&
                  "Use at least 3 characters"}
                {errors.name?.type === "maxLength" &&
                  "You can use 50 characters at most"}
              </InputError>
            </NameInputContainer>
            <EmailInputContainer>
              <Label htmlFor="email">E-mail</Label>
              <FormInput
                id="email"
                type="email"
                {...register("email", {
                  required: true,
                  minLength: 6,
                  maxLength: 320,
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "invalid email address",
                  },
                })}
                placeholder="Your email adress"
              />
              <InputError>
                {errors.email?.type === "required" && "Please enter your email"}
                {errors.email?.type === "minLength" &&
                  "Use at least 6 characters"}
                {errors.email?.type === "maxLength" &&
                  "You can use 320 characters at most"}
              </InputError>
            </EmailInputContainer>
            <MessageInputContainer>
              <Label htmlFor="message">Message</Label>
              <Message
                id="message"
                {...register("message", {
                  required: true,
                  minLength: 10,
                  maxLength: 2000,
                })}
                placeholder="Your message"
              />
              <InputError>
                {errors.message?.type === "required" &&
                  "Please enter your message"}
                {errors.message?.type === "minLength" &&
                  "Use at least 10 characters"}
                {errors.message?.type === "maxLength" &&
                  "You can use 2000 characters at most"}
              </InputError>
            </MessageInputContainer>
            <ReCAPTCHAContainer>
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_SITE_KEY as string}
                ref={(ref) => (captchaRef.current = ref)}
                onChange={handleRecaptchaChange}
              />
            </ReCAPTCHAContainer>
            <SendButton type="submit">send</SendButton>
          </Form>
          <RodoInformation>
            Personal data contained in the above form will be processed by the
            authors of the website https://bnportfolio.netlify.app (e-mail:
            beti.i.naska@gmail.com). <br />
            Personal data provided via the contact form will be processed only
            for the purpose of responding to your message. <br />
            You have the right to withdraw consent at any time and request
            access, rectification, deletion and limitation of your data.
            Providing personal data is voluntary, however, without providing it,
            we will not be able to respond to the message.
          </RodoInformation>
        </>
      )}
    </Container>
  );
};

export default Contact;