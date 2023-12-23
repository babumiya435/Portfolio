import React, { useState } from 'react';
import CodeViewer from "../helper-components/CodeViewer";
import { Container } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const AccordionItem = ({ title, content, contentRelatedCode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='margin-bottom-30'>
      <div className='margin-bottom-30'
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: 'pointer', marginBottom: '5px' }}
      >
        <h2>
          <div className="title-section">
            {!isOpen ? (<FaPlus />) : (<FaMinus />)
            }
            <strong>{title}</strong>
            {isOpen && (<FaEdit />)
            }
          </div>
        </h2>
      </div>
      {isOpen && (
        <Container className="margin-bottom-30 paragraph-section container-fluid">
          {content}
          <CodeViewer className="mb-5" contentRelatedCode={contentRelatedCode} />
        </Container>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.contentName} content={item.content} contentRelatedCode={item.contentRelatedCode} />
      ))}
    </div>
  );
};

export default Accordion;