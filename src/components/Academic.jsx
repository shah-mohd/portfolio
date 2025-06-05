import Header from "./Header";

const Academic = () => {
    return (
        <div>
            <div>
                <Header/>
            </div>
            
            <div className="flex flex-col items-center gap-4 bg-gray-100 mx-5 mt-8 py-9">
                {/* Msc IT */}
                <div className="bg-white border-2 border-gray-200 space-y-1 text-gray-600 w-3/4 sm:w-1/2 p-4 shadow-md rounded-xl">
                <h3 className="text-xl sm:text-2xl font-bold">MSc in Information Technology</h3>
                <p className="text-base sm:text-xl">Babasaheb Bhimrao Ambedkar University, Lucknow</p>
                <p className="text-sm">2024 – 2026</p>
                <p className="text-sm sm:text-base">Relevant Courses: DSA, DBMS, ML, Web Dev</p>
                </div>

                {/* BCA */}
                <div className="bg-white border-2 border-gray-200 space-y-1 text-gray-600 w-3/4 sm:w-1/2 p-4 shadow-md rounded-xl">
                <h3 className="text-xl sm:text-2xl font-bold">Bachelor of Computer Applications</h3>
                <p className="text-base sm:text-xl">INMANTEC Institutions, Ghaziabad</p>
                <p className="text-sm">2020 – 2023</p>
                <p className="text-sm sm:text-base">Relevant Courses:  C/CPP Programming, DBMS, OOP, OS</p>
                </div>

            </div>
            
        </div>
    )
}

export default Academic;