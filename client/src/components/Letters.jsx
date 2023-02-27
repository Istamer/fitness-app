import React from "react";

const Letters = () => {
    return(
        <div className="w-full py-16 text-white px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 my-3">
                    <h1 className="md:text-3xl sm:text-3xl text-xl font-bold">Ми завжди чекаємо на ваші пропозиції, що до покращення тренеру!</h1>
                    <p className="font-light text-gray-400">Надішліть свою почту і ми зв'яжемося з вами.</p>
                </div>
               <div> <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                    <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Enter Email"/>
                    <button className="bg-[#FF7F50] w-[200px] rounded-md font-bold text-black ml-3 my-6 mx-auto py-3">Send</button>
                </div>
                <p className="font-light text-gray-400 ">Ваші особисті дані нікому не передаються.</p></div>
            </div>
        </div>
    )
}

export default Letters