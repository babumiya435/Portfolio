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
        style={{ cursor: 'pointer', marginBottom: '5px' }}
      >
        <h2>
          <div className="title-section">
            <section onClick={() => setIsOpen(!isOpen)}>
              {!isOpen ? (<FaPlus />) : (<FaMinus />)
              }
            </section>
            <strong>{title}</strong>
            {isOpen && (<FaEdit />)
            }
          </div>
        </h2>
      </div>
      {isOpen && (
        <Container className="margin-bottom-30 paragraph-section container-fluid">
          <div className="notebook">
            <div className="notebook-cover"></div>

            <div className="notebook-page">
              <h1>{title}</h1>
              <p className="content-section">{content}</p>
              <div>
                {contentRelatedCode && <CodeViewer className="mb-5 code-section" contentRelatedCode={contentRelatedCode} />}
              </div>
            </div>
          </div>
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