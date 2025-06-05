import Header from "./Header";

const About = ()=> {

    const url = "./shah02.png";

    return(
        <div className="">
            <Header/>
            <div className="flex flex-col items-center sm:flex-row bg-gray-100 dark:bg-gray-900 rounded-xl px-4 py-5 mx-5 my-8">
                <div className="sm:w-5/12 sm:px-24">

                    
                    <img
                    src={url}
                    className="sm:h-[400px]"
                    />
                    
                </div>
                <div className="sm:w-7/12">
                <div className="h-full text-gray-600 dark:text-gray-300">
                    <h1 className="text-lg sm:text-2xl font-bold font-mono"><span className="text-blue-600 dark:text-blue-400">-</span> About Me</h1>
                    <h2 className="text-xl sm:text-3xl font-bold m-4">Who is <span className="text-blue-600 dark:text-blue-400">Shah Mohammad Ansari</span></h2>
                    <p>"Hello, I'm SHAH MOHAMMAD ANSARI, currently pursuing MSc. Information Technology at BABASAHEB BHIMRAO AMBEDKAR UNIVERSITY LUCKNOW (U.P.). I'm deeply interested in Web Development, and I enjoy exploring topics like React, Redux, TailwindCSS.
                        I'm always looking to expand my knowledge and take part in meaningful discussions and projects."
                    </p>

                    <button className="bg-gray-300 border-2 border-gray-600 mx-4 mt-4 p-2 rounded-full  text-gray-900 hover:text-gray-50 dark:text-blue-400 font-semibold hover:bg-gray-400 transition-all duration-500 ease-in-out">

                        <a 
                        href="./shah-resume.pdf"
                        download
                        > Download CV
                        </a>
                    </button>

                {/* social media icons */}
                <div className="flex space-x-4 mt-5 mx-6">
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
                </div>
            
            </div>
        </div>
    )
}

export default About;