import React from "react";

function LoginBtn(props) {
    const loginHandler = (setIsLoggedIn) => {
        setIsLoggedIn(true);
        console.log("debug >>>> logoutHandler");
    }

    return(
        <button onClick={() => (loginHandler(props.isLogin))}>
            로그인
        </button>
    );
}

export default LoginBtn ; 
