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
		// sign UP is considered NEW, since you must create an account
		this.state = {
			usernameNEW: "",
			passwordNEW: "",

		};

	}

	setUsernameNEW = event => {
		this.setState({usernameNEW: event.target.value});
	};

	setPasswordNEW = event => {
		this.setState({passwordNEW: event.target.value});
	};

	checkCompletionNEW = () => {
		return this.state.usernameNEW.length > 0 && this.state.passwordNEW.length > 0;
	};

	submitHandler = e => {
		e.preventDefault();
		axios.post('/signUp', this.state).then(response => {
			console.log("successful signup post: ", response.data)
		}).catch(err => {console.log("error: ", err)});
		
		
	}

	render() {
		return (
			<div className="App">
				<Title/>

				<div class="form-container">

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