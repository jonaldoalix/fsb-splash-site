import './App.css';
import LoginForm from './LoginForm';
import { Container } from 'react-bootstrap';

export default function App () {
  return (
    <Container fluid className="p-0 m-0 themeColor">
      <LoginForm />
    </Container>
  );
}
