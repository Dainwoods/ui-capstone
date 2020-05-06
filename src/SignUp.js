import React, { Component } from "react";
import './Login.css';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap'
import https from 'https';
import Title from "./Title";
import Divider from "./Divider";
// import { Router } from 'express';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink
  } from "react-router-dom";

class SignUpPage extends Component {

	constructor(props) {
		super(props);

		// sign IN is considered OLD, since you already have an account
		// sign UP is considered , since you must create an account
		this.state = {
			username: "",
			password: "",

		};

		this.submitHandler = this.submitHandler.bind(this)

	}

	setUsername = event => { 
		this.setState({username: event.target.value});
	};

	setPassword = event => {
		this.setState({password: event.target.value});
	};

	checkCompletion = () => {
		return this.state.username.length > 0 && this.state.password.length > 0;
	};

	submitHandler(e) {
		// const {username, password} = this.state;

		axios
		.post(
			"/signUp",
			{ username: this.state.username,
			password: this.state.password },
			{ withCredentials: true}
			)
		.then(response => {
			console.log(response);
		})
		.catch(error => {
			console.log(error.response);
		});
		e.preventDefault(); 
	}

	// submitHandler = e => {
	// 	e.preventDefault();
	// 	axios.post('https://localhost:3000/login', this.state).
	// 	then(response => {console.log("successful post: ", response)})
	// 	.catch(err => {console.log("error: ", err)});
	// 	const response = fetch('api/', {
	// 		method: 'POST',
	// 		body: JSON.stringify(this.state)
	// 	});


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
		
	

	render() {
		return (
			<div className="App">
				<Title/>

				<div class="form-container">

		  			<div class="eachForm">
			  			<Form>
			  				<Form.Label>Sign Up</Form.Label>
			  				<Form.Group controlId="signUpID">
								<Form.Control type="text" placeholder="ID" onChange={this.setUsername}/>
							</Form.Group>
							<Form.Group controlId="signUpPW">
								<Form.Control type="text" placeholder="Password" onChange={this.setPassword}/>
							</Form.Group>
							<Button variant="primary" type="submit" disabled={!this.checkCompletion()} onClick={this.submitHandler}>Submit</Button>
						</Form>
					</div>
				</div>

				<p> Already a member?
					<NavLink to={"/login"}
						style={{
							textDecoration: "none",
						}}
						activeStyle={{
	    					fontWeight: "bold",
	    					color: "black",
	    					textDecoration: "none"
						}}
						class="signUp-link"> Login
					</NavLink> now
				</p>

			</div>

	    );
  }
}

export default SignUpPage;