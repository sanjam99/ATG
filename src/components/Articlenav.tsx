import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

type Props = {}

function Articlenav({}: Props) {
  return (
    <Nav variant="pills" defaultActiveKey="/home" className="d-flex justify-content-between align-items-center">
      <div className="d-flex">
        <Nav.Item>
          <Nav.Link href="link-1">All Posts(32)</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="link-2">Article</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="link-3">Event</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="link-4">Education</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="link-5">Job</Nav.Link>
        </Nav.Item>
      </div>
      <div className="d-flex" style={{ paddingRight: '5px' }}>
        <Button variant="outline-secondary" className="ms-2">Write a Post</Button>
        <Button variant="primary" className="ms-2">Join Group</Button>
      </div>
    </Nav>
  );
}

export default Articlenav;
