import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function ProductCard() {
  const cardStyle = {
    border: 'none', 
    height: '100%',
  };

  const CategoryTechnologyCard=()=>{
    return(
      <Container>
      <h3 className="text-center" style={{ paddingTop: '20px' }}>
      DISPLAY TECHNOLOGY
      </h3>
      <Row className="gx-3 gy-3" style={{ marginTop: '10px' }}>
        <Col xs={4} md={4} lg={4} className="py-3 py-md-0">
        <Link to="/filter" state={{ technology: 'LED' }} style={{textDecoration:"none"}}>
          <Card className="text-center" style={cardStyle}>
            <Card.Img variant="top" src='../image/led.jpg' alt='LED' className="img-fluid" />
            <Card.Body>
              <Card.Title>LED</Card.Title>
            </Card.Body>
          </Card>
          </Link>
        </Col>
        <Col xs={4} md={4} lg={4} className="py-3 py-md-0">
        <Link to="/filter" state={{ technology: 'OLED' }} style={{textDecoration:"none"}}>
          <Card className="text-center" style={cardStyle}>
            <Card.Img variant="top" src='../image/oled.jpg' alt='OLED' className="img-fluid" />
            <Card.Body>
              <Card.Title>OLED</Card.Title>
            </Card.Body>
          </Card>
          </Link>
        </Col>
        <Col xs={4} md={4} lg={4} className="py-3 py-md-0">
        <Link to="/filter" state={{ technology: 'QLED' }} style={{textDecoration:"none"}}>
          <Card className="text-center" style={cardStyle}>
            <Card.Img variant="top" src='../image/qled.jpg' alt='QLED' className="img-fluid" />
            <Card.Body>
              <Card.Title>QLED</Card.Title>
            </Card.Body>
          </Card>
          </Link>
        </Col>
      </Row>
    </Container>
    );
  }

  const CategoryResolutionCard=()=>{
    return(
      <Container>
      <h3 className="text-center" style={{ paddingTop: '20px' }}>
      TV RESOLUTION
      </h3>
      <Row className="gx-3 gy-3" style={{ marginTop: '10px' }}>
        <Col xs={4} md={4} lg={4} className="py-3 py-md-0">
        <Link to="/filter" state={{ resolution: 'FHD' }} style={{textDecoration:"none"}} >
          <Card className="text-center" style={cardStyle}>
            <Card.Img variant="top" src='../image/fhd.jpg' alt='FHD' className="img-fluid" />
            <Card.Body>
              <Card.Title>FHD</Card.Title>
            </Card.Body>
          </Card>
          </Link>
        </Col>
        <Col xs={4} md={4} lg={4} className="py-3 py-md-0">
        <Link to="/filter" state={{ resolution: '4K' }} style={{textDecoration:"none"}}>
          <Card className="text-center" style={cardStyle} >
            <Card.Img variant="top" src='../image/4k.jpg' alt='4K' className="img-fluid" />
            <Card.Body>
              <Card.Title>4K</Card.Title>
            </Card.Body>
          </Card>
          </Link>
        </Col>
        <Col xs={4} md={4} lg={4} className="py-3 py-md-0">
        <Link to="/filter" state={{ resolution: '8K' }} style={{textDecoration:"none"}}>
          <Card className="text-center" style={cardStyle}>
            <Card.Img variant="top" src='../image/8k.jpg' alt='8K' className="img-fluid" />
            <Card.Body>
              <Card.Title>8K</Card.Title>
            </Card.Body>
          </Card>
          </Link>
        </Col>
      </Row>
    </Container>
    );
  }
  return (
    <>
    <CategoryTechnologyCard/>
    <CategoryResolutionCard/>
    </>
  );
}

export default ProductCard;