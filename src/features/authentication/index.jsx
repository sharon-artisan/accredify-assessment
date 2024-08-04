/*
	All features for authentication (login/signup/forgot password/ etc) in one place to be exported
*/
import LoginForm from "./components/LoginForm.jsx";
import "./styles/LoginForm.scss";
function AuthenticationFeature() {
	return (
		<>
			<LoginForm />
		</>
	);
}

export { AuthenticationFeature, LoginForm };