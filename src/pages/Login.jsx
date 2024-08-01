import AuthenticationFeature from "../features/authentication/index.jsx";
import React, { useEffect } from 'react';

function Login() {
  useEffect(() => {
    document.title = "Login | Accredify";
  }, []);
  
    return (
      <>
        <AuthenticationFeature />
      </>
    );
  }
  
  export default Login;