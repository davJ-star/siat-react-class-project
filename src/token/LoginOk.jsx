// import axios from 'axios';
import axios from '../api/axios'; // Adjust the import path as necessary
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginOk = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const moveUrl = useNavigate();

    const loginOkHandler = async () => {

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
        const response = await axios.post('api/v1/hello', {
            name: "siat"
        })
        .then((response) => {
            console.log('Login successful:', response.data);
            

            // moveUrl('/success'); // Redirect to the home page or any other page after successful login
            return response;
        })
        .catch((error) => {
            // console.error('Login failed:', error);
            return error.response;
        }
        );



        // if (response.data) {
        //     console.log('Login successful!');
        //     // Handle successful login (e.g., redirect, show success message, etc.)
        // } else {
        //     console.log('Login failed!');
        //     // Handle failed login (e.g., show error message)
        // }
    }
    return (
        <div>
            <h1>Hi~! 토큰 검증을 통한 사용자 요청 처리</h1>
            <button onClick={loginOkHandler}>클릭</button>
        </div>
    );
};

export default LoginOk;