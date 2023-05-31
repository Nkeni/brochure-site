import { Button, Container, Row } from "react-bootstrap";
import "./Banner.scss";

function Banner() {
  return (
    <Container className="banner-container">
      <Row className="banner-row">
        <div className="banner-content">
          <h1>Interior decors</h1>
          <h6>Free delivery on orders from $50</h6>
          <Button className="shop-btn">Shop</Button>
        </div>
      </Row>
    </Container>
  );
}

export default Banner;
