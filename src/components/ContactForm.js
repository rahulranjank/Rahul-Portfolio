import React, { useState } from 'react';
import styled from 'styled-components';
import emailJs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

toast.configure();
export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [disabled1, setDisabled1] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      emailJs.sendForm(
        'service_m7wd6k1',
        'template_pq6jx59',
        e.target,
        'user_5pRGmhtdZXNQqZibpn1mW'
      );
      toast.success(
        `Message sent successfully.Rahul will acknowledge your message soon.Please refresh the page if you want to rend the message`
      );
      setDisabled1(true);
      setName('');
      setEmail('');
      setMessage('');
    }
  };
  return (
    <>
      <FormStyle onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              isRequired
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your Email
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isRequired
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              isRequired
            />
          </label>
        </div>
        <button type="submit" disabled={disabled1}>
          Send
        </button>
      </FormStyle>
    </>
  );
}
