import React from "react";

function LogoutBtn(props) {
    return(
        <button onClick={props.handler}>
            로그아웃
        </button>
    );
}

export default LogoutBtn ; 