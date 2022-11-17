import { json, Link, useNavigate } from "react-router-dom";
import ROUTES from "../config/ROUTES";
import ToDo from "../img/ToDo.png"
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext"
import { AuthContext } from "../context/AuthContext";

function GetStarted() {
    const { name, img, unfinishedTasks, doneAndDelTasks } = useContext(AppContext)
    const { isAuthenticated } = useContext(AuthContext)
    // const navigate = useNavigate();
    useEffect(() => {
        window.localStorage.setItem("USER_NAME", JSON.stringify(name))
        window.localStorage.setItem("USER_IMG", JSON.stringify(img))
        window.localStorage.setItem("TASKS", JSON.stringify(unfinishedTasks));
        window.localStorage.setItem("DONE_AND_DELETED_TASKS", JSON.stringify(doneAndDelTasks));
        window.localStorage.setItem("IS_AUTHENTICATED", JSON.stringify(false));
        // console.log("started");
    }, [])
    return (
        <section className="bg-black text-center h-screen px-8">
            <button className="bg-red-800" onClick={() => {
                console.log(isAuthenticated);
            }}>click</button>
            <img alt="ToDo" src={ToDo} className="pt-10 mx-auto w-[90.36px] pt-16" />
            <h1 className='text-white text-3xl sm:text-4xl md1000:text-[54px] font-semibold mt-11 font-main'>Keep Track Of Daily Tasks In Life</h1>
            <Link to={ROUTES.SIGNIN}>
                <button className='bg-main-green font-light text-[28px] md1000:text-[48px] mt-24 sm:mt-40 px-10 py-4 rounded'>Get Started</button>
            </Link>
        </section >
    );
}

export default GetStarted;
