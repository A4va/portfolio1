import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import emailjs from "@emailjs/browser";
import { CV } from '../assets';

const Contact = () => {
  const formRef = useRef();
  const [isClicked, useIsClicked] = useState(false)

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // 8PAdhM5SMJTJsqBU6
// template_kvt21nf
// service_igbb6dr
    emailjs.send('service_igbb6dr', 'template_kvt21nf',
    {
      from_name: form.name,
      to_name: "Abduallah",
      form_email: form.email,
      to_email: 'dev.abduallah@gmail.com',
      message: form.message,
    },
    '8PAdhM5SMJTJsqBU6'
    ).then(()=>{
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, err => {
      setLoading(false);
      console.log(err);
      alert("Something went wrong. Please try again.");
    })
    
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact</h3>
        <button className='bg-tertiary w-full mt-4 py-3 px-8 outline-none text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-indigo-950 transition-colors'>
                <a download="" href={CV} onClick={()=> useIsClicked(true)}>{isClicked? "Downloaded !": "Download CV"}</a>
        </button>

        <form red={formRef} onSubmit={handleSubmit}
              className='mt-12 flex flex-col gap-8'
        >
          <label className="flex flex-col">
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type="text" 
                   name='name' 
                   value={form.name}
                   onChange={handleChange}
                   placeholder="What's Your name?" 
                   className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                   />
          </label>
          <label className="flex flex-col">
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type="email" 
                   name='email' 
                   value={form.email}
                   onChange={handleChange}
                   placeholder="What's Your email?" 
                   className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                   />
          </label>
          <label className="flex flex-col">
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea rows='7'
                   name='message' 
                   value={form.message}
                   onChange={handleChange}
                   placeholder="What do you want to say to me?" 
                   className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                   />
          </label>

          <button type="submit" className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-indigo-950 transition-colors'>
            {loading ? 'Sending...': 'Send'}
          </button>     

        </form>
        
      </motion.div>
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "Contact")