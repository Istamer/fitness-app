import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Gym = () => {

    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center w-full bg-white py-16 px-4">
                <h1 className="md:text-3xl sm:text-3xl text-xl font-bold pb-9">Обери свій комфортний темп, та починай тренування!</h1>
                <button className="bg-black w-[400px] rounded-md font-bold text-white ml-3 my-6 py-7 focus:bg-[#FF6347] hover:bg-[#FF7F50]">Легкий</button>
                <button className="bg-black w-[400px] rounded-md font-bold text-white ml-3 my-6 py-7 focus:bg-[#FF6347] hover:bg-[#FF7F50]">Середній</button>
                <button className="bg-black w-[400px] rounded-md font-bold text-white ml-3 my-6 py-7 focus:bg-[#FF6347] hover:bg-[#FF7F50]">Продвинутий</button>
            </div>
            <Footer />
        </div>
    )
}

export default Gym