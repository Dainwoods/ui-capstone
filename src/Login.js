import React, { Component } from "react";
import './Login.css';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap'
import https from 'https';
import Title from "./Title";
import Divider from "./Divider";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
	Redirect
  } from "react-router-dom";

class LoginPage extends Component {

	constructor(props) {
		super(props);

		// sign IN is considered OLD, since you already have an account
		// sign UP is considered NEW, since you must create an account
		this.state = {
			usernameOLD: "",
			passwordOLD: "",
			successfulLogin: false
		};

	}

	setUsernameOLD = event => {
		this.setState({usernameOLD: event.target.value});
	};

	setPasswordOLD = event => {
		this.setState({passwordOLD: event.target.value});
	};

	checkCompletionOLD = () => {
		return this.state.usernameOLD.length > 0 && this.state.passwordOLD.length > 0;
	};

	submitLogin = e => {
		e.preventDefault();
		
		axios.post('/login', this.state).
			then((res) => {
				this.setState({ successfulLogin: true });
				console.log('success postss: ', res.data);
				
			}).catch((error) => console.log(error));
		
	}
	

	render() {

		if (this.state.successfulLogin){
			return <Redirect to='/'/>;
		}

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
							<Button variant="primary" type="submit" disabled={!this.checkCompletionOLD()} onClick={this.submitLogin}>Submit</Button>
			  			</Form>
		  			</div>
				</div>

				<p> Not a member?
					<NavLink to={"/signUp"}
						style={{
							textDecoration: "none",
						}}
						activeStyle={{
	    					fontWeight: "bold",
	    					color: "black",
	    					textDecoration: "none"
						}}
						class="signUp-link"> Sign Up
					</NavLink> now
				</p>

			</div>

	    );
  }
}

export default LoginPage;