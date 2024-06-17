import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ATG from '../assets/atg.jpg'

function Model() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        It's free
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body>
          <div className="container mt-3">
            <div className="text-center mb-4">
              <p className="lead">
                Let's learn, share & inspire each other with our passion for computer engineering. Sign up now ✌️
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-5">
                <div className="card p-4 shadow">
                  <h2 className="text-center mb-4">Sign In</h2>
                  <form>
                    <div className="form-group mb-3">
                      <label htmlFor="email">Email</label>
                      <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="password">Password</label>
                      <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mb-3">Sign In</button>
                    <div className="text-center mb-3">or</div>
                    <button type="button" className="btn btn-outline-primary btn-block mb-2">
                      Sign in with Facebook
                    </button>
                    <button type="button" className="btn btn-outline-danger btn-block">
                      Sign in with Google
                    </button>
                  </form>
                  <div className="text-center mt-4">
                    <p>
                      Don't have an account yet? <a href="#">Create new for free!</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-none d-md-block">
                <img src={ATG} alt="Sign In Illustration" className="img-fluid" />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Model;
