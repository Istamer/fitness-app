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
        dispatch(deleteUser());
        localStorage.removeItem("TOKEN");
        navigator(appRoutes.login.path);
        console.log("Logout")
    }

    const handleNav = () =>{
        setNav(!nav)
    }

    return(
        <div className="flex justify-between items-center h-15 max-w-[1480px] mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold text-[#FF7F50]"><Link to={appRoutes.home.path} replace>FitnessTrainer</Link></h1>
            <ul className="hidden md:flex">
                <li className="p-4 cursor-pointer"><Link to={appRoutes.about.path} replace>About</Link></li>
                <li className="p-4 cursor-pointer"><Link to={appRoutes.gym.path} replace>YourGym</Link></li>
                <li className="p-4 cursor-pointer rounded-md bg-[#FF7F50] focus:bg-[#FF7F50] hover:bg-[#FFA07A]"><Link to={appRoutes.login.path} replace>Login</Link></li>
                <li className="p-4 cursor-pointer rounded-md bg-[#FF7F50] focus:bg-[#FF7F50] hover:bg-[#FFA07A]" onClick={onLogoutClick}>Logout</li>
                <li className="p-4 cursor-pointer flex gap-2 text-[#FF7F50]"><Link to={appRoutes.profile.path} replace>{user?<div className="flex"><FaUser/><div>{user.name}</div></div>:null}</Link></li>
                {
                    user&&user.role==="ADMIN"?<Link to={appRoutes.admin.addEx.path} className="p-4 cursor-pointer w-[95px] rounded-md bg-[#f02742] focus:bg-[#e91e6c] hover:bg-[#ab1010]">Admin</Link>:null
                }
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}
            </div>
            <div className={nav ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-800 bg-[#000300] ease-in-out duration-500" : 'fixed left-[-100%]'}>
                <h1 className="w-full text-3xl font-bold text-[#FF7F50] m-4">FitnessTrainer</h1>
                <ul className="pt-15 uppercase">
                    <li className="p-4 cursor-pointer border-b border-gray-500 flex gap-2"><Link to={appRoutes.profile.path} replace>{user?<><FaUser/>{user.name}</>:"user"}</Link></li>
                    <li className="p-4 cursor-pointer border-b border-gray-500"><Link to={appRoutes.about.path} replace>About</Link></li>
                    <li className="p-4 cursor-pointer border-b border-gray-500"><Link to={appRoutes.gym.path} replace>Your Gym</Link></li>
                    <li className="p-4 cursor-pointer w-[80px] rounded-md bg-[#FF7F50] focus:bg-[#FF7F50] hover:bg-[#FFA07A]"><Link to={appRoutes.login.path} replace>Login</Link></li>
                    <li className="p-4 cursor-pointer w-[95px] rounded-md bg-[#FF7F50] focus:bg-[#FF7F50] hover:bg-[#FFA07A]" onClick={onLogoutClick}>Logout</li>
                    
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar