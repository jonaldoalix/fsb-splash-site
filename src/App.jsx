import "./App.css";
import LoginForm from "./LoginForm";
import { DemoBanner } from "./DemoBanner";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <Container fluid className="p-0 m-0 themeColor">
      <DemoBanner />
      <LoginForm />
    </Container>
  );
}
