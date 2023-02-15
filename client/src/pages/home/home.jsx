import React from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../store/userSlice";
import "./home.css"

const Home = () => {

    const dispatch = useDispatch();
    const user = useSelector(state=> state.appUser.user);

    const onLogoutClick = useCallback(() => {
        dispatch(deleteUser());
    }, [])

    return (
        <div className="home">
            <h1>Hello {user.name.toUpperCase()} it's homepage</h1>
            <div className="button" onClick={onLogoutClick}>Logout</div>
        </div>
    )
}

export default Home