import React from "react";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function LoginForm() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/home");
	};

	return (
		<div>
			<div className="login-form-container">
				<div className="login-form-fields">
					<div className="login-form-field">
						Email
						<InputText
							className="input-field"
							placeholder="Email"
						/>
					</div>
					<div className="login-form-field">
						Password
						<InputText
							className="input-field"
							placeholder="Password"
						/>
					</div>
				</div>
				<div className="login-form-actions" onClick={handleClick}>
					<Button className="text-h6" label="Submit" />
				</div>
			</div>
		</div>
	);
}
