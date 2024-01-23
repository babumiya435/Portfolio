import React, { useState } from 'react';
import CodeViewer from "../helper-components/CodeViewer";
import { Container } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const AccordionItem = ({ title, content, contentRelatedCode, contentSections }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='margin-bottom-30'>
      <div className='margin-bottom-30'
        style={{ cursor: 'pointer', marginBottom: '5px' }}
      >
        <h2>
          <div className="title-section">
            <section onClick={() => setIsOpen(!isOpen)}>
              {!isOpen ? (<FaPlus className='svg-align-plus' />) : (<FaMinus className='svg-align-minus' />)
              }
              <strong>{title}</strong>
            </section>
            {/* {isOpen && (<FaEdit />)
            } */}
          </div>
        </h2>
      </div>
      {isOpen && (
        <Container className="margin-bottom-30 paragraph-section container-fluid">
          <div className="notebook">
            <div className="notebook-cover"></div>

            <div className="notebook-page">
              {/* <h1>{title}</h1> */}
              {contentSections.map((item, index) => (
                <div key={index} className='details-border-bottom'>
                  <div className="content-section"
                    dangerouslySetInnerHTML={{ __html: item.sectionName }}
                  ></div>
                  <div className="content-section-data">
                    {item.sectionContent.map((item, index) => (
                      <div key={'paraTitle' + index}>
                        {item.paraTitle && <p className='paraTitle'>
                          {item.paraTitle} :
                        </p>}
                          {item?.paraContent?.length > 0 && <div className='paraContent'>
                            {item?.paraContent?.map((para, i) => (
                              <p key={'para' + i}>
                                {para}
                              </p>
                            ))}
                          </div>}
                      </div>
                    ))}
                  </div>
                  <div>
                    {item.sectionCode && <CodeViewer className="mb-5 code-section" contentRelatedCode={item.sectionCode} />}
                  </div>
                </div>
              ))}
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
        <AccordionItem key={index} title={item.contentName} content={item.content} contentRelatedCode={item.contentRelatedCode} contentSections={item.contentSections} />
      ))}
    </div>
  );
};

export default Accordion;