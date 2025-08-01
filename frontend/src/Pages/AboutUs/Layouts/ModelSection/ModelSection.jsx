import React, { useState } from "react";
import "./ModelSection.css";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

const ModelSection = () => {
  return (
    <section className="model-section">
  <h2>
    <span className="highlight">OUR</span> MODEL
  </h2>
  <p className="model-description">
    As a young and ambitious company, our model is built on the seamless 
    <strong> blend of expertise, adaptability, and cultural understanding</strong>. 
    We believe in fresh ideas, smart use of technology, and the power of diverse perspectives to create meaningful solutions. 
    This is our way of shaping <strong>Multicultural Ingenuity™</strong> from the very start.
  </p>

  <div className="accordion">
    <AccordionItem title="Growing Expertise">
      <p>
        Even as a fresh company, we bring together skilled individuals with 
        diverse backgrounds, eager to apply creativity and industry knowledge 
        to deliver results that matter.
      </p>
    </AccordionItem>
    <AccordionItem title="Technology Without Limits">
      <p>
        We are not tied to a single platform or technology. We pick the tools 
        and methods that best suit your needs, allowing flexibility and 
        innovation without limitations.
      </p>
    </AccordionItem>
    <AccordionItem title="Driven by Collaboration">
      <p>
        We believe collaboration fuels innovation. By working closely with 
        clients, we create solutions that truly align with their vision and 
        goals.
      </p>
    </AccordionItem>
  </div>
</section>

  );
};

export default ModelSection;
