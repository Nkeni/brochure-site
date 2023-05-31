import "./Products.scss";
import { Container, Row, Card, CardGroup, Button } from "react-bootstrap";

function Products() {
  return (
    <Container className="products-container">
      <Row className="products-row">
        <p>This is what we sell</p>
        <h2>Our Products</h2>

        <CardGroup>
          <Card>
            <Card.Img variant="top" className="living-room" />
            <Card.Body>
              <Card.Title>Living Room</Card.Title>
              <Card.Text>
                <Button className="shop-btn">See products</Button>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" className="bed-room" />
            <Card.Body>
              <Card.Title>Bed Room</Card.Title>
              <Card.Text>
                <Button className="shop-btn">See products</Button>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" className="bath-room" />
            <Card.Body>
              <Card.Title>Bath Room</Card.Title>
              <Card.Text>
                <Button className="shop-btn">See products</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Row>
    </Container>
  );
}

export default Products;
