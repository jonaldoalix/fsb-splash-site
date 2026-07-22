import { Container, Image, Form, Button, Card } from "react-bootstrap";
import fullStackLogo from './assets/fsbLogoNBG.png';
import { NavHeader } from './NavHeader';
import { useState } from 'react';

export default function LoginForm () {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");

	let handleSubmit = async (e) => {
		e.preventDefault();
		let string = `Username: ${username} and Password: ${password}`;
		console.log(string);
		setMessage(string);
	};

	return (
		<Container fluid className="d-flex h-100 align-items-center flex-column m-0 p-0">
			<NavHeader />
			<Card className="bg-light mt-5 px-3 py-4 align-self-center justify-self-center themeShadow" style={{ width: '375px' }}>
				<Form onSubmit={handleSubmit}>
					<Image src={fullStackLogo} alt="Full Stack Boston Logo" width="75" height="60" className="mx-auto d-block mb-4" />
					<Form.Label as="h1" className="h3 mb-5 fw-formal text-center">Please Sign In</Form.Label>
					<Form.Label as="h5" className="h5 my-2 text-muted text-center">{message}</Form.Label>
					<Form.Group className="mb-3">
						<Form.Label className="px-1 fw-bold">Enter Your Email</Form.Label>
						<Form.Control type="email" placeholder="Enter your Email" value={username} onChange={(e) => setUsername(e.target.value)}/>
						<Form.Text className="text-muted">We&apos;ll never share your email with anyone else.</Form.Text>
					</Form.Group>
					<Form.Group className="mb-4">
						<Form.Label className="px-1 fw-bold">Enter your Password</Form.Label>
						<Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
					</Form.Group>
					<Form.Group className="mb-5">
						<Form.Check type="checkbox" label="Remember Me" />
					</Form.Group>
					<Button className="w-100 mb-2 btn btn-lg btn-primary" style={{ backgroundColor: '#e76567', borderColor: 'white' }} type="submit">Sign in</Button>
				</Form>
			</Card>
		</Container>
	)
}