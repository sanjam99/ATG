import { Container, InputGroup, FormControl, Image, ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import thumb from "../assets/thumb.jpg";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";
import locator from "../assets/locator.png";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Container className="d-none d-lg-flex flex-column mt-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <Image src={locator} alt="locator" width="13" height="18" className='mx-2'/> 
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Enter Your Location"
                className="input-text"
              />
            </InputGroup>
          </div>
          <Button variant="outline-secondary" className="btn">
            ✎
          </Button>
        </div>
        <hr className="my-1" />
        <div className="d-flex align-items-center gap-2 mb-4">
          ⓘ
          <p className="location-info">
            Your location will help us serve better and extend a
            personalised experience.
          </p>
        </div>
        <div className="d-flex align-items-center gap-2 text-capitalize mb-3">
          <Image src={thumb} alt="thumbs up" />
          <span className="text-recommended">Recommended Groups</span>
        </div>
        <ListGroup className="d-flex flex-column gap-4">
          {[
            { img: s1, text: "Leisure" },
            { img: s2, text: "Activism" },
            { img: s3, text: "MBA" },
            { img: s4, text: "Philosophy" }
          ].map((item, index) => (
            <ListGroup.Item key={index} className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <Image className="rounded-circle" alt="Profile" src={item.img} width="36" height="36" />
                <div className="text-wrapper">{item.text}</div>
              </div>
              <a className="btn follow rounded-5" href="/">
                Follow
              </a>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Button variant="outline-primary" className="mt-5 outline-primary">
          see more...
        </Button>
      </Container>
    </div>
  );
}

export default SideBar;
