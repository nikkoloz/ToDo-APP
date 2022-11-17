import { createContext, useEffect, useState } from "react";


const AppContext = createContext();

function AppContextProvider({ children }) {
    const [name, setName] = useState('');
    const [img, setImg] = useState([]);
    const [unfinishedTasks, setUnfinishedTasks] = useState(["TEST TODO APP"])
    const [doneAndDelTasks, setDoneAndDelTasks] = useState({
        done: 0,
        deleted: 0
    })
    // const userNameForRefreshing = window.localStorage.getItem("USER_NAME")
    // const userIMGForRefreshing = window.localStorage.getItem("USER_IMG")
    // console.log(userNameForRefreshing);
    // console.log(userIMGForRefreshing);
    // useEffect(() => {
    //     // setName(userNameForRefreshing)
    //     // setImg(userIMGForRefreshing)
    // }, [])
    return (
        <AppContext.Provider value={{ name, setName, img, setImg, unfinishedTasks, setUnfinishedTasks, doneAndDelTasks, setDoneAndDelTasks }}>
            {children}
        </AppContext.Provider>
    )

}

export { AppContext, AppContextProvider }