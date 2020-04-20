import React, { Component } from "react";
import './Login.css';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap'
import https from 'https';
import Title from "./Title";
import Divider from "./Divider";
// import { Router } from 'express';

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
	submitHandler = e => {
		e.preventDefault();
		axios.post('https://localhost:3000/login', this.state).
		then(response => {console.log("successful post: ", response)})
		.catch(err => {console.log("error: ", err)});
		const response = fetch('api/', {
			method: 'POST',
			body: JSON.stringify(this.state)
		});
		// const router = Router();
		// const instance = axios.create({
		// 	httpsAgent: new https.Agent({  
		// 	  rejectUnauthorized: false
		// 	})
		//   });
		// router.post('https://localhost:3000/login', this.state)
		// then((response) => {console.log("successful post: ", response)})
		// .catch( (err) => {console.log("error: ", err)});
		  
		// let xhr = new XMLHttpRequest();
		// xhr.open('POST', 'https://localhost:3000/login');
		// xhr.send(JSON.stringify({ example: 'data' }))
		
	}

	render() {
		return (
			<div className="App">
				<Title/>

				<div class="form-container">
					<div class="eachForm">
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

		  			<div class="eachForm">
			  			<Form>
			  				<Form.Label>Sign Up</Form.Label>
			  				<Form.Group controlId="signUpID">
								<Form.Control type="text" placeholder="ID" onChange={this.setUsernameNEW}/>
							</Form.Group>
							<Form.Group controlId="signUpPW">
								<Form.Control type="text" placeholder="Password" onChange={this.setPasswordNEW}/>
							</Form.Group>
							<Button variant="primary" type="submit" disabled={!this.checkCompletionNEW()} onClick={this.submitHandler}>Submit</Button>
						</Form>
					</div>
				</div>

			</div>

	    );
  }
}

export default LoginPage;