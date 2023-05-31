import "./ContactUs.scss";
import { Container, Row, Button } from "react-bootstrap";

function ContactUs() {
  return (
    <Container className="contact-container">
      <Row className="contact-row">
        <h2>Contact us</h2>
        <div className="contact-detail">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            voluptatibus harum nostrum! Aliquam nobis nulla beatae odio, amet
            voluptatum dolore!
          </p>
          <Button className="shop-btn">Let's talk</Button>
        </div>
      </Row>
    </Container>
  );
}

export default ContactUs;
