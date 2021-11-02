import Head from "next/head";
import { useState, useRef } from 'react';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    return (
    <>
      <Head>
        <title>Title Genius | Login</title>
        <meta name="keywords" content="title-genius" />
      </Head>
      <div className="dummy">
          <form>
              <div>
                  <label>{isLogin ? 'Login' : 'Create Account'}</label>
                  <br/>
                  <label htmlFor='email'>Your Email</label>
                  <input type='email' id='email' required />
              </div>
              <div>
                  <label htmlFor='password'>Your Password</label>
                  <input type='password' id='password' required />
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
