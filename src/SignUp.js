  
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
	NavLink,
	Redirect
  } from "react-router-dom";

class SignUpPage extends Component {

	constructor(props) {
		super(props);
		props = this.props;
		// sign IN is considered OLD, since you already have an account
		// sign UP is considered NEW, since you must create an account
		this.state = {
			usernameNEW: "",
			passwordNEW: "",
			successfulLogin: false

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
		//add a user validation - msut have unique user values
		axios.post('/signUp', this.state).then(res => {
			console.log("successful signup post: ", res.data);
			if (res.data.success) {
				this.props.history.push( '/');
			} else {
				//error handling
			}
		}).catch(err => {console.log("error: ", err)});
		
		
	}

	render() {

		if (this.state.successfulLogin){
			return <Redirect to='/login'/>;
		}

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
								<Form.Control type="password" placeholder="Password" onChange={this.setPasswordNEW}/>
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