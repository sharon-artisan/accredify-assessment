import { Outlet } from "react-router-dom";
const LoginLayout = ({ children }) => {
    return (
      <div role="login-layout" className="login-layout">
         <Outlet />
      </div>
    );
  };
  
  export default LoginLayout;  