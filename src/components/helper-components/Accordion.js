import React, { useState } from 'react';

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
      {isOpen && <p>{content}</p>}
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;