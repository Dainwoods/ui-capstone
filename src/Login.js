import React, { Component } from "react";
import './Login.css';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap'
import https from 'https';
import Title from "./Title";
import Divider from "./Divider";
import {withRouter} from 'react-router-dom'

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
			username: "",
			password: "",
			logginStatus: "None",

		};
		this.props = props;
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

	submitLogin = e => {
		e.preventDefault();
		axios.post('/login', this.state).
			then((res) => {
				console.log('success postss: ', res.data);
				console.log('success posts 2: ', res.data.success);
				console.log('success 3: ', res);
				// successful login
				if (res.data.success) {
					this.state.isLoggedIn = true;
					console.log('we trying  ', this.props);
					this.setState({logingStatus: "Success"})
					this.props.history.push( '/');
					
				// couldn't log in
				} else {
					//error handling
					this.setState({logingStatus: "Failed"})

				}

			}).catch((error) => console.log(error));
		
	}
	

	render() {

		let logingStatus = this.state.logingStatus === "Failed";

		return (
			<div className="App">
				<Title/>

				<div class="form-container">
					<div class="eachForm">
						<Form>
							<Form.Label>Sign In</Form.Label>
							<Form.Group controlId="signInID">
								<Form.Control type="text" placeholder="ID" onChange={this.setUsername}/>
							</Form.Group>
							<Form.Group controlId="signInPW">
								<Form.Control type="password" placeholder="Password" onChange={this.setPassword}/>
							</Form.Group>
							<Button variant="primary" type="submit" disabled={!this.checkCompletion()} onClick={this.submitLogin}>Submit</Button>
			  			</Form>
		  			</div>
				</div>
			
				{logingStatus ? <p> We couldn't find an account with that username and password. Please try again. 
				</p> : ''}
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

export default withRouter(LoginPage);