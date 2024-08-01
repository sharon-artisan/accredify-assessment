import { Outlet } from "react-router-dom";
const LoginLayout = ({ children }) => {
    return (
      <div className="login-layout">
         <Outlet />
      </div>
    );
  };
  
  export default LoginLayout;  