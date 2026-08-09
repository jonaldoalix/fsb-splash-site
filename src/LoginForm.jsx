import { Container, Image, Form, Button, Card, Alert } from "react-bootstrap";
import fullStackLogo from "./assets/fsbLogoNBG.png";
import { NavHeader } from "./NavHeader";

/**
 * Demo-only login shell. Auth is intentionally stubbed — no credentials
 * are collected or logged.
 */
export default function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container
      fluid
      className="d-flex h-100 align-items-center flex-column m-0 p-0"
    >
      <NavHeader />
      <Card
        className="bg-light mt-5 px-3 py-4 align-self-center justify-self-center themeShadow"
        style={{ width: "375px" }}
      >
        <Form onSubmit={handleSubmit} aria-disabled="true">
          <Image
            src={fullStackLogo}
            alt="Full Stack Boston Logo"
            width="75"
            height="60"
            className="mx-auto d-block mb-4"
          />
          <Form.Label as="h1" className="h3 mb-3 fw-formal text-center">
            Please Sign In
          </Form.Label>
          <Alert variant="warning" className="mb-4 text-center">
            Demo only — sign-in is disabled. This is a historical UI mock, not
            production authentication.
          </Alert>
          <Form.Group className="mb-3">
            <Form.Label className="px-1 fw-bold">Enter Your Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your Email"
              disabled
              readOnly
              value=""
              autoComplete="off"
            />
            <Form.Text className="text-muted">
              Fields are disabled on this museum demo.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="px-1 fw-bold">Enter your Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              disabled
              readOnly
              value=""
              autoComplete="off"
            />
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Check type="checkbox" label="Remember Me" disabled />
          </Form.Group>
          <Button
            className="w-100 mb-2 btn btn-lg btn-primary"
            style={{ backgroundColor: "#e76567", borderColor: "white" }}
            type="submit"
            disabled
          >
            Sign in (disabled)
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
