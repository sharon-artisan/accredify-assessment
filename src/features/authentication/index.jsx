import LoginForm from "./components/LoginForm.jsx";
import "./styles/LoginForm.scss";
export default function AuthenticationFeature() {
	return (
		<>
		<div class="login-page">
			<div className="home-container">
				<div className="home-user-container">
					<span className="home-username">Login</span>
				</div>			
			</div>
			<LoginForm />
		</div>
		</>
	);
}