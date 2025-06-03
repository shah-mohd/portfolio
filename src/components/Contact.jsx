import { useState } from "react";
import Header from "./Header";

const Contact = ()=> {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(message);

    const sendEmail = (e) => {
        e.preventDefault();

        // new object that contains dynamic template params
        // const templateParams = {

        // }
    }


    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className="bg-gray-100 px-4 py-5 mx-5 my-8 rounded-xl">
                <form onSubmit={sendEmail}>
                    <div className="bg-white max-w-md mx-auto my-2 p-10 rounded-xl space-y-4 shadow-lg hover:shadow-2xl">

                        {/* <div> */}
                        <input 
                        type="text" 
                        placeholder="Your Name"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                         />
                        {/* </div> */}

                        {/* <div> */}
                        <input 
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                       
                        {/* </div> */}

                        {/* <div> */}
                        <input 
                        type="phone" 
                        placeholder="Phone"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        />
                        {/* </div> */}

                        {/* <div> */}
                        <textarea
                        type="text"
                        placeholder="Message"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        />
                        {/* </div> */}

                        {/* <div> */}
                        <button 
                        className="w-full bg-gray-100 font-bold text-blue-600 py-2 rounded hover:bg-gray-200 transition">
                            Submit
                        </button>
                        {/* </div> */}

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;