import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import appRoutes from "../appRoutes";
import {Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../store/userSlice";
import {FaUser} from "react-icons/fa"

const Navbar = () =>{
    const [nav, setNav]=useState(false)
    const user = useSelector(state => state.appUser.user);
    const navigator = useNavigate();
    const dispatch = useDispatch();

    const onLogoutClick = () => {
        dispatch(deleteUser);
        localStorage.removeItem("TOKEN");
        navigator(appRoutes.login.path);
        console.log("Logout")
    }

    const handleNav = () =>{
        setNav(!nav)
    }

    return(
        <div className="flex justify-between items-center h-15 max-w-[1480px] mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold text-[#FF7F50]">FitnessTrainer</h1>
            <ul className="hidden md:flex">
                <li className="p-4"><Link to={appRoutes.about.path} replace>About</Link></li>
                <li className="p-4"><Link to={appRoutes.home.path} replace>Home</Link></li>
                <li className="p-4">YourGym</li>
                <li className="p-4 cursor-pointer" onClick={onLogoutClick}>Logout</li>
                <li className="p-4 cursor-pointer flex gap-2">{user?<><FaUser/>{user.name}</>:"Ne USER"}</li>
           
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={nav ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-800 bg-[#000300] ease-in-out duration-500" : 'fixed left-[-100%]'}>
                <h1 className="w-full text-3xl font-bold text-[#FF7F50] m-4">FitnessTrainer</h1>
                <ul className="pt-15 uppercase">
                    <li className="p-4 border-b border-gray-500"><Link to={appRoutes.about.path} replace>About</Link></li>
                    <li className="p-4 border-b border-gray-500"><Link to={appRoutes.home.path} replace>Home</Link></li>
                    <li className="p-4 border-b border-gray-500">Your Gym</li>
                    <li className="p-4 cursor-pointer" onClick={onLogoutClick}>Logout</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar