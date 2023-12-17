import React, { useState } from 'react';
import CodeViewer from "../helper-components/CodeViewer";
import { Container } from "react-bootstrap";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: 'pointer', marginBottom: '5px' }}
      >
        <strong>{title}</strong>
      </div>
      {isOpen && (
        <Container className="paragraph-section container-fluid">
          {content}
          <CodeViewer className="mb-5" />
      </Container>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.contentName} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;