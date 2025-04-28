import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const moveUrl = useNavigate();

    const loginHandler = async () => {
        // Perform login logic here, e.g., API call
        console.log('Email:', email);
        console.log('Password:', password   );
        // Reset fields after login attempt

        const response = await axios.post('http://localhost:8088/api/v1/auth/login', {
            email: email,
            password: password
        })
        .then((response) => {
            console.log('Login successful:', response.data);
            // console.log(response.data);
            // console.log(response.status);
            // console.log(response.statusText);
            console.log(response.headers);
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            // localStorage.setItem('user', JSON.stringify(response.data.user));
            // console.log(response.config);
            // console.log(response.request);
            // console.log(response.data.accessToken);
            // console.log(response.data.refreshToken);
            // console.log(response.data.user);
            // console.log(response.data.user.email);
            // console.log(response.data.user.password);
            // console.log(response.data.user.name);
            // console.log(response.data.user.phone);
            // console.log(response.data.user.role);
            // console.log(response.data.user.createdAt);
            // console.log(response.data.user.updatedAt);
            // console.log(response.data.user.__v);
            // console.log(response.data.user._id);
            // console.log(response.data.user.token);
            // console.log(response.data.user.token.accessToken);
            // console.log(response.data.user.token.refreshToken);
            // console.log(response.data.user.token.expiresIn);
            // console.log(response.data.user.token.createdAt);
            // console.log(response.data.user.token.updatedAt);

            //moveUrl('/'); // Redirect to the home page or any other page after successful login
            return response;
        })
        .catch((error) => {
            console.error('Login failed:', error);
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
            <h1>토큰 로그인</h1>
            {/* <form onSubmit={(e) => {
                e.preventDefault();
                console.log('Email:', email);
                console.log('Password:', password);
            }}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Login</button>
            </form>             */}
            <input type="text"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email"
                
            />
            <input type="password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password"

            />
            <button 
                onClick={loginHandler}
            >Login</button>
        </div>
    );
};

export default Login;