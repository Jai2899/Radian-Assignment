import Head from "next/head";
import { useState } from 'react';
import Router from 'next/router'

export var isLogOut = false;
const Login = () => {
    const [isLogout , setIsLogout] = useState(false);
    const [isShowSignup, setIsShowSignup] = useState(false);
    const [isShowLogin, setIsShowLogin] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [isLoginMessage, setIsLoginMessage] = useState(false);
    const [errorMessageSignup, setErrorMessageSignup] = useState("");
    const [errorMessageLogin, setErrorMessageLogin] = useState("");
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
                const result = await fetch('http://localhost:3000/api/login', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(body),
                });
            if(result.status === 200) {
                setIsSignup(false);
                setIsLogin(true);
                setIsShowLogin(true);
                setIsShowSignup(false);
                setIsLoginMessage(true);
                setIsLogout(true);
                isLogOut = true;
                // console.log(result.status)
                // console.log(isLogOut);
                await Router.push('/getaquote');
            }
            if(result.status === 500) {
                setErrorMessageLogin("Invalid Credentials!");
                setIsLoginMessage(false);
                setIsShowLogin(true);
                setIsSignup(false);
            }
        } else {
                const result = await fetch('http://localhost:3000/api/signup', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(body),
                });
            if(result.status === 500 ) {
                setErrorMessageSignup("User already Exists.");
                setIsShowSignup(true);
                setIsSignup(false);
                setIsShowLogin(false);
            }

            if (result.status === 200) {
                setIsSignup(true);
                setIsLogin(true);
                setIsShowLogin(false);
                setIsShowSignup(true);

                await Router.push('/login');
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
                        <h2 style={{
                            display: isShowSignup?"block":"none"
                        }}>
                            {isSignup ? "Your account is created!" : errorMessageSignup}
                        </h2>
                        <h2 style={{
                            display: isShowLogin?"block":"none"
                        }}>
                            {isLoginMessage ? "Login Successfully!" : errorMessageLogin}
                        </h2>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
