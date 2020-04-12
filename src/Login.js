import React, { Component } from "react";
import './Login.css'
import { Form, Button } from 'react-bootstrap'

class LoginPage extends Component {
	render() {
		return (
			<div>

				<div class="form-container">
					<div>
						<Form>
							<Form.Label>Sign In</Form.Label>
							<Form.Control type="text" placeholder="ID" />
							<Form.Control type="text" placeholder="Password" />
							<Button variant="primary" type="submit">Submit</Button>
			  			</Form>
		  			</div>

		  			<div>
			  			<Form>
			  				<Form.Label>Sign Up</Form.Label>
							<Form.Control type="text" placeholder="ID" />
							<Form.Control type="text" placeholder="Password" />
							<Button variant="primary" type="submit">Submit</Button>
						</Form>
					</div>
				</div>

			</div>




    );
  }
}

export default LoginPage;