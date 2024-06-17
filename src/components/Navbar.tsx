import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Logo from '../assets/logo.jpg';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Model from "./Model"

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={Logo}
            width="160"
            height="25"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <div className="flex-grow-1 d-none d-lg-flex justify-content-center">
          <Form className="d-flex rounded-pill w-50">
            <InputGroup className="w-100 align-items-center">
              <Form.Control
                className="rounded-pill align-items-center"
                placeholder="Search for your favorite groups in ATG"
                aria-label="Username"
              />
            </InputGroup>
          </Form>
        </div>
        <div className="d-flex justify-content-end">
          <Navbar.Text>
            Create Account: <Model />
          </Navbar.Text>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navigation;
