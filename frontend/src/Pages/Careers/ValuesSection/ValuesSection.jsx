import React from 'react';
import { Container, Card } from 'react-bootstrap';

const ValuesSection = () => (
  <Container className="py-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
    <Card className="text-white bg-dark mb-4">
      <div
        className="bg-image"
        style={{
          backgroundImage: "url('/join1.jpg')",
          height: '400px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center h-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <h1 className="display-4">OUR VALUES</h1>
        </div>
      </div>
    </Card>

    <div className="mb-4">
      <p className="fs-5" style={{ lineHeight: 1.8 }}>
        As a young and ambitious company, we believe that{" "}
        <strong>diversity and collaboration create strength</strong>.  
        Our team comes from different backgrounds, experiences, and perspectives — and we see this
        as our greatest advantage.  
      </p>
      <p className="fs-5" style={{ lineHeight: 1.8 }}>
        We are driven by the belief that <strong>EVERYONE MATTERS</strong>.  
        Every idea, every contribution, and every person plays a key role in shaping our journey.  
        This belief inspires us to work openly, respect each other, and put the needs of our clients,
        partners, and team members at the heart of everything we do.
      </p>
      <p className="fs-5" style={{ lineHeight: 1.8 }}>
        As we grow, our commitment remains clear — to build a company culture where
        <strong> people feel valued, heard, and empowered</strong> to create something meaningful together.
      </p>
    </div>
  </Container>
);

export default ValuesSection;
