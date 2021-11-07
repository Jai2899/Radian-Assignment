import Head from "next/head";
import { useState } from 'react';
import Router from 'next/router'


const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler = async (event) => {
        event.preventDefault();

        const body = {email, password};
        if(isLogin) {
        } else {
            try {
                const result = await fetch('http://localhost:3000/api/signup', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(body),
                });
                await Router.push('/');
            } catch (error) {
                console.error(error)
            }
        }
        }
    return (
        <>
            <Head>
                <title>Title Genius | Login</title>
                <meta name="keywords" content="title-genius" />
            </Head>
            <div className="dummy">
                <form onSubmit={submitHandler}>
                    <div>
                        <label>{isLogin ? 'Login' : 'Create Account'}</label>
                        <br />
                        <label htmlFor='email'>Your Email</label>
                        <input type='email' id='email' autoFocus onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor='password'>Your Password</label>
                        <input type='password' id='password' onChange={e => setPassword(e.target.value)} required />
                    </div>
                    <div>
                        <button>{isLogin ? 'Login' : 'Create Account'}</button>
                        <button
                            type='button'
                            onClick={switchAuthModeHandler}
                        >
                            {isLogin ? 'Create new account' : 'Login with existing account'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
