import React, { Component } from "react";
import './Login.css'
import { Form, Button } from 'react-bootstrap'

class LoginPage extends Component {

	constructor(props) {
		super(props);

		// sign IN is considered OLD, since you already have an account
		// sign UP is considered NEW, since you must create an account
		this.state = {
			usernameOLD: "",
			passwordOLD: "",
			usernameNEW: "",
			passwordNEW: "",

		};

	}

	setUsernameOLD = event => {
		this.setState({usernameOLD: event.target.value});
	};

	setPasswordOLD = event => {
		this.setState({passwordOLD: event.target.value});
	};

	setUsernameNEW = event => {
		this.setState({usernameNEW: event.target.value});
	};

	setPasswordNEW = event => {
		this.setState({passwordNEW: event.target.value});
	};

	checkCompletionOLD = () => {
		return this.state.usernameOLD.length > 0 && this.state.passwordOLD.length > 0;
	};

	checkCompletionNEW = () => {
		return this.state.usernameNEW.length > 0 && this.state.passwordNEW.length > 0;
	};

	render() {
		return (
			<div>

				<div class="form-container">
					<div>
						<Form>
							<Form.Label>Sign In</Form.Label>
							<Form.Group controlId="signInID">
								<Form.Control type="text" placeholder="ID" onChange={this.setUsernameOLD}/>
							</Form.Group>
							<Form.Group controlId="signInPW">
								<Form.Control type="text" placeholder="Password" onChange={this.setPasswordOLD}/>
							</Form.Group>
							<Button variant="primary" type="submit" disabled={!this.checkCompletionOLD()}>Submit</Button>
			  			</Form>
		  			</div>

		  			<div>
			  			<Form>
			  				<Form.Label>Sign Up</Form.Label>
			  				<Form.Group controlId="signUpID">
								<Form.Control type="text" placeholder="ID" onChange={this.setUsernameNEW}/>
							</Form.Group>
							<Form.Group controlId="signUpPW">
								<Form.Control type="text" placeholder="Password" onChange={this.setPasswordNEW}/>
							</Form.Group>
							<Button variant="primary" type="submit" disabled={!this.checkCompletionNEW()}>Submit</Button>
						</Form>
					</div>
				</div>

			</div>

	    );
  }
}

export default LoginPage;