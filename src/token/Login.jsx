import React, { useState } from 'react';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = () => {
        // Perform login logic here, e.g., API call
        console.log('Email:', email);
        console.log('Password:', password   );
        // Reset fields after login attempt
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