import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {infoContents} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={infoContents.title} bacgroundImage={infoContents.image}/>
    <p>{infoContents.description}</p>
  </Container>
);

export default Info;