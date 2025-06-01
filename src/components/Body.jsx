import { TypeAnimation } from "react-type-animation";

const Body = () => {

    // const urlImage = 'https://drive.google.com/drive/folders/1vPAfcv4Di-NKTEkWIJQ__bRVX-zs1fd8';
    // const urlImage = 'https://drive.google.com/uc?id=1vPAfcv4Di-NKTEkWIJQ__bRVX-zs1fd8';



    return (
        <div className="flex items-center">
            <div className="w-6/12 h-3/6 text-center">
                {/* text_section */}
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

                <h1 className="my-2 text-base font-sans">I'm Shah Mohammad,
                    React Developer
                </h1>
                    
            </div>

            <div className="w-6/12 h-3/6">
                <div className="max-w-sm p-6 mx-auto">
                    {/* img */}
                    <img
                    src="shah.png"
                    className="w-9/12"
                    />

                </div>
            </div>
        </div>
    )
}

export default Body;