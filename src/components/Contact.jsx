import { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/checkValidDate";
import emailjs from '@emailjs/browser';

const YOUR_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const YOUR_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const YOUR_SERVICE_ID =  import.meta.env.VITE_EMAILJS_SERVICE_ID;



const Contact = ()=> {

    const [errorMessage, setErrorMessage] = useState(null);
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    const msg = checkValidData(form.current.user_email.value, form.current.user_name.value);
    setErrorMessage(msg);
    if(msg) return;

    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
        publicKey: YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Your message has been sent. Thank You!");
            form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className="bg-gray-100 px-4 py-5 mx-5 my-8 rounded-xl">
                <form onSubmit={sendEmail} ref={form} className="">
                    <div className="bg-white max-w-md mx-auto my-2 p-10 rounded-xl space-y-4 shadow-lg hover:shadow-2xl">

                        <input 
                        type="text" 
                        placeholder="Your Name"
                        className="w-full p-2 border border-gray-300 rounded"
                        name="user_name"                        
                         />

                        <input 
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border border-gray-300 rounded"
                        name="user_email"
                        />

                        <textarea
                        type="text"
                        placeholder="Message"
                        className="w-full p-2 border border-gray-300 rounded"
                        name="message"
                        />

                        <input 
                        type="submit" 
                        value="Send"  
                        className="w-full bg-gray-100 font-bold text-blue-600 py-2 rounded hover:bg-gray-200 transition cursor-pointer"/>
                        
                        <p className="text-red-500 text-sm">{errorMessage}</p>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;