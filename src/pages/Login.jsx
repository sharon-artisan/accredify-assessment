import { LoginForm } from "../features/authentication/index.jsx";
import React, { useEffect } from 'react';

function Login() {
  useEffect(() => {
    document.title = "Login | Accredify";
  }, []);
  
    return (
      <>
        <div className="login-page">
			<div className="home-container h-[50px]">
				<div className="home-user-container">
					<span className="home-title">Login</span>
				</div>			
			</div>
			  <LoginForm />
		</div>
      </>
    );
  }
  
  export default Login;