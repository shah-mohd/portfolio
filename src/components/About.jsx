import Header from "./Header";

const About = ()=> {
    return(
        <div className="">
            <Header/>
            <div className="flex bg-green-700">
                <div className="border 2 border-red-700 w-6/12">
                    {/* image */}
                    <p>image section</p>
                </div>
                <div className="border 2 border-blue-700 w-6/12">
                <div className="p-10 text-white">
                    <h1 className="text-2xl font-bold font-mono"><span className="text-yellow-500">-</span> About Me</h1>
                    <h2 className="text-3xl font-bold font-normal m-4">Who is <span className="text-yellow-500">Shah Mohammad Ansari</span></h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Explicabo eum delectus iure tenetur et exercitationem optio accusamus in repellendus.
                    </p>
                    <button className="border-2 border-black p-2 m-2 rounded-full">Download CV</button>
                </div>
                </div>
            
            </div>
        </div>
    )
}

export default About;