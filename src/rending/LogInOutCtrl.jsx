import React, { useState } from "react";
import LoginBtn from "./LoginBtn";
import LogoutBtn from "./LogoutBtn";
import Greeting from "./Greeting";

function LogInOutCtrl(props) {

    const [isLoggedIn , setIsLoggedIn] = useState(false); 

    // const loginHandler = () => {
    //     setIsLoggedIn(true);
    //     console.log("debug >>>> loginHandler");
    // }
    // const logoutHandler = () => {
    //     setIsLoggedIn(false);
    //     console.log("debug >>>> logoutHandler");
    // }
    // let button ; 
    // if(isLoggedIn) {
    //     button = <LogoutBtn handler={logoutHandler}/>
    // } else {
    //     button = <LoginBtn handler={loginHandler}/>
    // }
    return(
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            {/* {isLoggedIn ? <LogoutBtn handler={logoutHandler}/> 
                        : <LoginBtn handler={loginHandler}/> } */}
            {isLoggedIn ? <LogoutBtn isLogin={setIsLoggedIn}/> 
                        : <LoginBtn isLogin={setIsLoggedIn} /> }                  
        </div>
    );
}

export default LogInOutCtrl ; 
