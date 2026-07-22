import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from './assets/fsbBannerNBG.png';

export function NavHeader() {
  return (
    <Container fluid className="p-0 m-0">
      <Navbar bg="dark" sticky="top" expand="lg">
        <Container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Navbar.Brand href="/">
            <img
              alt="Full Stack Boston Banner"
              src={logo}
              width="300"
              height="100"
              className="d-inline-block align-center" />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav style={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
              <Nav.Link style={{ color: 'whitesmoke' }} href="/#top">Home</Nav.Link>
              <Nav.Link style={{ color: 'whitesmoke' }} href="/#about">About Us</Nav.Link>
              <Nav.Link style={{ color: 'whitesmoke' }} href="/#services">Services</Nav.Link>
              <Nav.Link style={{ color: 'whitesmoke' }} href="/#tech">Tech</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}
