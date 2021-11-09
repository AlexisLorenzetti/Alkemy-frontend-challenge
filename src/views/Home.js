import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CardContainer, Search, Stats } from '../components';

const Home = () => {
    const [myTeam, setMyTeam] = useState([]);
    
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Search myTeam={myTeam} setMyTeam={setMyTeam} />
                </Col>
                <Col md={6}>
                    <Stats myTeam={myTeam} />
                </Col>
                <Col md={12}>
                    <CardContainer myTeam={myTeam} setMyTeam={setMyTeam} />
                </Col>
            </Row>
        </Container>
    )
}

export default Home
