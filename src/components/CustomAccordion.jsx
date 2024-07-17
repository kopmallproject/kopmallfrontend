
import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionTitle, AccordionContent } from '@daisyui/react';

const MyAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <Accordion>
      {items.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionTitle onClick={() => handleClick(index)}>
            {item.title}
          </AccordionTitle>
          <AccordionContent show={activeIndex === index}>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default MyAccordion;