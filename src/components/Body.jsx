import { TypeAnimation } from "react-type-animation";
import { CiLinkedin } from "react-icons/ci";

const Body = () => {

    return (
        <>
        <div className="flex flex-col-reverse items-center sm:items-center sm:justify-center sm:flex-row bg-gray-100 dark:bg-gray-900 rounded-xl py-9 mx-5 mt-8">

            {/* text section */}
            <div className="w-6/12 h-3/6 text-center text-blue-600 dark:text-blue-400">    
                <h2 className="animate-pulse inline-block my-2 px-4 py-2 text-xl font-bold">Hello There!</h2>
                
                <TypeAnimation
                sequence={[
                    "I am React Developer!",
                    1000,
                    "I am Front-End Developer!",
                    1000,
                    "I am Web Developer!",
                    1000,
                ]}
                wrapper="div"
                repeat={Infinity}
                speed={40}
                className="text-2xl font-mono font-bold"
                />

                <h1 className="my-2 text-gray-600 dark:text-gray-300 text-base font-sans">
                    I'm Shah Mohammad Ansari, React Developer
                </h1> 

                {/* social media icons */}
                <div className="flex justify-center space-x-4 mt-5">
                    {/* Linkedin icon */}
                    <div className="w-6">
                        <a 
                        href="https://www.linkedin.com/in/shah-mohammad-ansari-0738571b7"
                        target="_blank"
                        rel="noopener noreferrer">
                            <img 
                            className="cursor-pointer"
                            src="./icons/linkedin.svg"
                            />
                        </a>
                    </div>
                    {/* Gmail icon */}
                    <div className="w-6">
                        <a 
                        href="mailto:shahmohammadt01@gmail.com">
                            <img 
                            className="cursor-pointer"
                            src="./icons/gmail.svg"
                            />
                        </a>
                    </div>
                    {/* Phone icon */}
                    <div className="w-6">
                        <a 
                        href="tel:+918477866128">
                            <img 
                            className="cursor-pointer"
                            src="./icons/call.png"
                            />
                        </a>
                    </div>
                    {/* Instagram icon */}
                    <div className="w-6">
                        <a
                        href="https://www.instagram.com/shah_mohd07?igsh=MWFvbTI1NDR2M3JzbA=="
                        target="_blank"
                        rel="noopener noreferrer" >
                            <img 
                            className="cursor-pointer"
                            src="./icons/instagram.svg"
                            />
                        </a>  
                    </div>
                </div>
                
            </div>

            {/* main image  */}
            <div className="w-7/12 max-w-sm p-6 mx-auto">
                    <img
                    src="shah01.png"
                    className="sm:w-9/12 rounded-lg hover:shadow-sm cursor-pointer"
                    />
            </div>


            
        </div>

        {/* social media icons */}
            <div className="">
                

            </div>


        </>
    )
}

export default Body;