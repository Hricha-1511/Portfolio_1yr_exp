import React, { useRef } from 'react'; 
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      to_email: form.current.user_email.value, // Fetching the email from the form input
      message: form.current.message.value, // Fetching the message from the form textarea
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE,
  import.meta.env.VITE_EMAILJS_TEMPLATE,
  templateParams,
  import.meta.env.VITE_EMAILJS_USERID

      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response.status, response.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('Email sending failed:', error);
          alert('Failed to send the message, please try again.');
        }
      );
  };

  return (
    <section id='contact' data-aos='fade-up' data-aos-delay='400'>
      <div className='py-8 lg:py-16 mx-auto max-w-screen-md'>
        <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-white'>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className='space-y-8'>
          <div>
            <label htmlFor='email' className='block mb-2 text-xl font-medium text-white'>Email</label>
            <input 
              type='email' 
              name='user_email'
              id='email' 
              className='shadow-sm bg-gray-300 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5' 
              placeholder='name@example.com' 
              required
            />
          </div>
          <div className='sm:col-span-2'>
            <label htmlFor='message' className='block mb-2 text-xl font-medium text-white'>Message</label>
            <textarea 
              rows='6' 
              name='message'
              id='message' 
              className='shadow-sm bg-gray-300 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5' 
              placeholder='Leave a comment ...' 
              required
            />
          </div>
          <button 
            type='submit'
            className='inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-lg'
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}