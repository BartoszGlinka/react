import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqContents} from '../../data/dataStore';

const Faq = () => (
  <Container>
    <Hero titleText={faqContents.title} bacgroundImage={faqContents.image}/>
    <p>{faqContents.description}</p>
  </Container>
);

export default Faq;