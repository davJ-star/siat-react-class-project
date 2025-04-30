// import axios from 'axios';
import axios from '../api/axios'; // Adjust the import path as necessary
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginOk = (props) => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const moveUrl = useNavigate();

    const btnHandler = async () => {

        // const response = await axios.post('http://localhost:8088/api/v1/hello', {
        //     name: "siat"
        // })
        // .then((response) => {
        //     console.log('Login successful:', response.data);
            

        //     // moveUrl('/success'); // Redirect to the home page or any other page after successful login
        //     return response;
        // })
        // .catch((error) => {
        //     // console.error('Login failed:', error);
        //     return error.response;
        // }
        // );
        console.log("debug >> btnHandler()");
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        console.log('accessToken:', `Bearer ${accessToken}`);
        console.log('refreshToken:', refreshToken);

        // 인터셉터 사용하지 않을때 
        // const response = await axios.get('http://localhost:8088/api/v1/hello', {
        //     headers:{
        //         Authorization: `Bearer ${accessToken}`,
        //     }
        // });

        // 인터셉터 사용
        const response = await axios.get('http://localhost:8088/api/v1/hello');
    
        console.log('response:', response.data);
        // .then((response) => {
        //     console.log('Login successful:', response.data);
            

        //     // moveUrl('/success'); // Redirect to the home page or any other page after successful login
        //     return response;
        // })
        // .catch((error) => {
        //     // console.error('Login failed:', error);
        //     return error.response;
        // }
        // );



        // if (response.data) {
        //     console.log('Login successful!');
        //     // Handle successful login (e.g., redirect, show success message, etc.)
        // } else {
        //     console.log('Login failed!');
        //     // Handle failed login (e.g., show error message)
        // }
    }

    // 로그아웃 핸들러
    const logoutHandler = async () => {
        console.log("debug >> logoutHandler()");
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        console.log('accessToken:', `Bearer ${accessToken}`);
        console.log('refreshToken:', refreshToken);

        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.clear();
        console.log('Logout successful!');
        moveUrl('/'); // Redirect to the login page or any other page after successful logout

        // const response = await axios.post('http://localhost:8088/api/v1/logout', {
        //     headers:{
        //         Authorization: `Bearer ${accessToken}`,
        //     }
        // });
        // console.log('response:', response.data);
        // // 로그아웃 성공 시 localStorage에서 토큰 제거
        // if (response.status === 200) {
        //     console.log('Logout successful!');
        //     // Handle successful logout (e.g., redirect, show success message, etc.)
        //     localStorage.removeItem('accessToken');
        //     localStorage.removeItem('refreshToken');
        //     localStorage.clear();

        //     moveUrl('/'); // Redirect to the login page or any other page after successful logout
        // }
        
        
    }

    return (
        <div>
            <h1>Hi~! 토큰 검증을 통한 사용자 요청 처리</h1>
            <button onClick={btnHandler}>통신요청</button>
            <button onClick={logoutHandler}>로그아웃</button>
        </div>
    );
};

export default LoginOk;