import { Container } from 'react-bootstrap';
import bag from "../assets/background.jpg";

function Hero() {
  return (
    <Container fluid className="p-0">
      <div
        className="position-relative"
        style={{
          backgroundImage: `url(${bag})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '25vh',
          height: '50vh',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }}
      >
        <div
          className="position-absolute font-weight-bold text-sm-left"
          style={{
            left: '7%', 
            bottom: '35%', 
            color: '#fff', 
            padding: '10px', 
            fontSize: '1.5rem', 
          }}
        >
          <h1 className="text-sm-left ">Computer Engineering </h1>
          <div className="position-absolute text-sm-left">
          142,765 Computer Engineers follow this
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
