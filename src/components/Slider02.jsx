import { useState } from "react";
import Header from "./Header";

const Slider02 = (props)=> {

    const projectName = props.projectName;
    const sliders = props.sliders;

    console.log(projectName);
    console.log(sliders);

    // const sliders = [{url:"./foodAppImages/ss01.png"},{url:"./foodAppImages/ss02.png"},{url:"./foodAppImages/ss03.png"},{url:"./foodAppImages/ss04.png"}];



    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
         const isLastSlide = currentIndex === sliders.length - 1;
         const newIndex = isLastSlide ? 0 : currentIndex + 1;
         setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };  

    return(
        <>
            {/* <Header/> */}
            {/* <div className="max-w-[1400] h-[780px] w-full m-auto py-16 px-4 relative group"> */}
            <div className="max-w-xl h-80 w-full m-auto py-5 px-4 relative group">

                <div style={{backgroundImage: `url(${sliders[currentIndex].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
                
                {/* Left Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <h1 onClick={prevSlide}>⬅️</h1>
                </div>

                {/* Right Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <h1 onClick={nextSlide}>➡️</h1>
                </div>

                {/* dotted show */}
                <div className="flex top-4 justify-center py-2 gap-2">
                    {sliders.map((slide, slideIndex) => (
                        <div key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                            <span className="text-2xl cursor-pointer">•</span>
                        </div>
                    ))}
 
                </div>


                {/* decriptions */}
                <div className="mb-20 pb-36">
                    <h1 className="text-2xl font-bold">{projectName}</h1>
                    <p className="text-lg">Technology Used : React, React Router, Redux, Tailwind CSS</p>
                    <p className="text-base">It's a Swiggy clone web app in this web app using a Swiggy API for showing the
                    restaurant and restaurant menu.</p>
                </div>

            </div>
        </>
    )
}

export default Slider02;