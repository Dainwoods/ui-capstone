import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
	Redirect,
	withRouter
  } from "react-router-dom";
import axios from 'axios';

class LogoutButton extends Component {

	constructor(props) {
		super(props);

		this.props = props;
	}

	killSession = () => {

		axios.post('/logout', this.state).
			then((res) => {
				console.log('success postss: ', res.data);
				// successful login
				if (res.data.success) {
					
				// couldn't log in
				} else {
					//error handling
				}

			}).catch((error) => console.log(error));



	}

	render() {

		return (
			<Button variant="link" onClick={this.killSession}>Logout</Button>
	    );
  }
}

export default LogoutButton;
// export default withRouter(LogoutButton);