import React from 'react';
import CarouselSection from "../containers/Carousel"
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Styles = styled.div`
  .home {
    padding:20px;
    background-color:#f8f9fa;
  }  
`;

const Home = () => (
  <Styles>
    <div class="home">
      <Container >
        <CarouselSection />
        <h1>Radio Raccoons is een podcast over opkomende technologieën. Elke maand praten we met een expert om de belangrijkste vragen in de Vlaamse markt te beantwoorden.</h1>
      </Container>
    </div>
  </Styles >


)
export default Home;