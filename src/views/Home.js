import React from 'react';
import { Container } from 'react-bootstrap';
import { CardContainer, Search } from '../components';

const Home = () => {
    return (
        <Container>
            <Search />
            <CardContainer />
        </Container>
    )
}

export default Home
