import React, { Component } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import bg from "../background.jpg";
import logo from "../logo.svg";

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Row className="signup full-height" style={styles.container}>
				<Col lg={8} className="App-header">
					<img src={logo} className="App-logo" />
				</Col>
				<Col lg={4}>
					<Card className="form-card rounded-0">
						<Card.Body className="App-header">
							<h3 className="title mb-5 text-muted">Sign Up</h3>
							<Form>
								<Form.Group controlId="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control type="email" placeholder="Enter email" />
									<Form.Text className="text-muted">
										We'll never share your email with anyone else.
									</Form.Text>
								</Form.Group>

								<Form.Group controlId="formBasicPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" placeholder="Password" />
								</Form.Group>

								<Form.Group controlId="formBasicPassword">
									<Form.Label>Password Again</Form.Label>
									<Form.Control
										type="password"
										placeholder="Re-enter Password"
									/>
								</Form.Group>

								<Button
									variant="primary"
									type="submit"
									className="btn-lg btn-block"
								>
									Submit
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		);
	}
}

export default SignUp;

const styles = {
	container: {
		backgroundImage: `url(${bg})`
	}
};
