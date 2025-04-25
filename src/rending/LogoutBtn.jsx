import React from "react";

function LogoutBtn(props) {
    const logoutHandler = (setIsLoggedIn) => {
        setIsLoggedIn(false); // [login, setIsLoggedIn]
        console.log("debug >>>> logoutHandler");
    }
    return(
        <button onClick={() => (logoutHandler(props.isLogin))} >
            로그아웃
        </button>
    );
}

export default LogoutBtn ; 