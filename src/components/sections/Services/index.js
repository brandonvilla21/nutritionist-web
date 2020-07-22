import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const divStyles = {
  padding: '4rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

function Services() {
  return (
    <>
      <Row style={{ maxWidth: '100%', marginRight: 0, marginLeft: 0 }}>
        <Col lg={3} md={6} sm={12} style={{ backgroundColor: '#ffb71b' }}>
          <div style={divStyles}>
            <img
              src='https://healthyvita.mx/wp-content/uploads/2020/01/ICONOStabla.png'
              alt='consulta-icon'
            />
            <h2 style={{ color: 'white', fontWeight: 'bold' }}>Consulta</h2>
          </div>
        </Col>
        <Col lg={3} md={6} sm={12} style={{ backgroundColor: '#00bbb4' }}>
          <div style={divStyles}>
            <img
              src='https://healthyvita.mx/wp-content/uploads/2020/01/ICONOSpesa.png'
              alt='consulta-icon'
            />
            <h2 style={{ color: 'white', fontWeight: 'bold' }}>Fit-a-thón</h2>
          </div>
        </Col>
        <Col lg={3} md={6} sm={12} style={{ backgroundColor: '#76bc21' }}>
          <div style={divStyles}>
            <img
              src='https://healthyvita.mx/wp-content/uploads/2020/01/ICONOfoco.png'
              alt='consulta-icon'
            />
            <h2 style={{ color: 'white', fontWeight: 'bold' }}>Blog</h2>
          </div>
        </Col>
        <Col lg={3} md={6} sm={12} style={{ backgroundColor: '#ffb71b' }}>
          <div style={divStyles}>
            <img
              src='https://healthyvita.mx/wp-content/uploads/2020/01/ICONOcarrito.png'
              alt='consulta-icon'
            />
            <h2 style={{ color: 'white', fontWeight: 'bold' }}>Tienda</h2>
          </div>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col style={{ marginTop: '3rem', marginBottom: '3rem'}}>
            <h1
              style={{
                fontSize: '48px',
                lineHeight: '70px',
                fontWeight: 'bold',
                fontStyle: 'normal',
                color: '#00bbb4',
                textAlign: 'center',
              }}
            >
              Nuestros Servicios
            </h1>

            Pos todavia no hay gg...
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Services;
