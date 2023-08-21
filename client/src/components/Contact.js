import './css-files/contact.css';
import telegram from '../public/telegram-1.png';
import { useState,useRef } from 'react';
const Contact = () => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        subject:"",
        message:"",
    })

const handleChange = (event) => {
    const { name, value} = event.target;

    setFormData(prevFormData =>(
        {
            ...prevFormData,
            [name]:value,
        }
    ))
};


const inputRefs = {
    input1:useRef(null),
    input2:useRef(null),
    input3:useRef(null),
};

const textAreaRef = useRef(null);

const handleFormSubmit = async (event) => {

        event.preventDefault();

       


        try{

        const response = await fetch(`http://localhost:5050/message`,{
            method:"POST",
            headers:{
                "content-Type":"application/json",
                "accept":"application/json",
            },
            body:JSON.stringify(formData),
        })
        if( !response.ok) {
            alert("Message not submitted");
           return console.error("Form Submission Failed");
        }else{

            console.log("form successfully submitted");
            const data = await response.json();
            console.log(data);
            setFormData(formData);
            alert("Message successfuly submitted");
        }

    }
    catch(err){
        console.error(err.message);
    }
    //clearing the inputs

   Object.values(inputRefs).forEach(input=> {
   
    if( input.current ){
        input.current.value ="";
    };
   });

   //clearing the text area

   if( textAreaRef.current ) {
    textAreaRef.current.value = "";
   };

};



    return ( 
        <div className="contact">
            <h1>Contact Me</h1>
            <div className="contact-container">
                <div className="contacts">
                <div className="location">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                        <span>Abuja, Nigeria. </span>
                </div>
                <div className="phone">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                        <span>(+234) 7053541229</span>
                </div>
                    <div className="mail">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                        <span>Email:<a href='mailto:nwiboazubuike@gmail.com'>nwiboazubuike@gmail.com</a></span>
                    </div>
                </div>
                <div className="message-me">
                    <p>Let's get in touch send me a message</p>
                    <div className="form-container">
                        <form onSubmit={handleFormSubmit}>
                        <input 
                        ref={inputRefs.input1}
                        type="text"
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Name'
                        required 
                        className="name"
                         />
                        <input 
                        ref={inputRefs.input2}
                        type="email" 
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Email'
                        required
                        className="email"
                         />
                        <input 
                        ref={inputRefs.input3}
                        type="text" 
                        name='subject'
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder='Subject'
                        required
                        className="subject" />
                        <textarea
                         maxLength={200} 
                         ref={textAreaRef}
                         name='message'
                         value={formData.message}
                         onChange={handleChange}
                         placeholder='Message'
                         required
                         className="message"
                         />
                         <button>
                            <img src={telegram} alt="sendImage" />
                             SEND MESSAGE
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;