import React from "react";

function LoginBtn(props) {
    return(
        <button onClick={props.handler}>
            로그인
        </button>
    );
}

export default LoginBtn ; 
