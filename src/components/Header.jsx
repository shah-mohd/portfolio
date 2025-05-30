const Header = () => {
    return (
        <div className="flex justify-around bg-green-700 m-5 p-2 rounded-full">
            <div className="">
                <h3 className="text-white font-bold text-3xl cursor-pointer">Shah.</h3>
            </div>

            <div className="w-3/12 px-6 py-2">
                <ul className="flex justify-between text-white text-xl font-normal">
                    <li className="cursor-pointer hover:-translate-y-1 hover:underline transition duration-500 ease-in-out hover:text-yellow-500">Home</li>
                    <li className="cursor-pointer hover:-translate-y-1 hover:underline transition duration-500 ease-in-out hover:text-yellow-500">About</li>
                    <li className="cursor-pointer hover:-translate-y-1 hover:underline transition duration-500 ease-in-out hover:text-yellow-500">Projects</li>
                </ul>
            </div>

            <div className="bg-white px-6 py-2 rounded-full cursor-pointer hover:bg-yellow-200 transition-all duration-500 ease-in-out">
                <h3 className="text-green-700 font-medium text-xl">Contact Me</h3>
            </div>
        </div>
    )
}

export default Header;