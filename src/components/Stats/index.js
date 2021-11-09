import React from 'react';
import { Container, Badge, Row, Col } from 'react-bootstrap';

import './styles.css';

const Stats = ({ myTeam }) => {
    const isFull = myTeam.length === 6;
    const teamStats = {
        combat: 0,
        durability: 0,
        intelligence: 0,
        power: 0,
        speed: 0,
        strength: 0
    }

    const averageStats = {
        height: 0,
        weight: 0,
    }

    myTeam.map(hero => {
        teamStats.combat += parseInt(hero.powerstats.combat);
        teamStats.durability += parseInt(hero.powerstats.durability);
        teamStats.intelligence += parseInt(hero.powerstats.intelligence);
        teamStats.power += parseInt(hero.powerstats.power);
        teamStats.speed += parseInt(hero.powerstats.speed);
        teamStats.strength += parseInt(hero.powerstats.strength);

        averageStats.height += parseInt(hero.appearance.height[1]) / myTeam.length;
        averageStats.weight += parseInt(hero.appearance.weight[1]) / myTeam.length;
    })

    const teamType = Object.keys(teamStats).reduce((a, b) => teamStats[a] > teamStats[b] ? a : b);

    return (
        <Container className="stats p-2">
            <h3 className="text-white text-center">{isFull && <span className="text-capitalize">{teamType}</span>} Team - Stats</h3>
            <Row>
                <Col md={6} className="d-flex flex-column align-items-center mb-3">
                    <Badge pill bg="secondary" className="w-50">
                        {`Combat: ${teamStats.combat}`}
                    </Badge>
                </Col>
                <Col md={6} className="d-flex flex-column align-items-center mb-3">
                    <Badge pill bg="success" className="w-50">
                        {`Durability: ${teamStats.durability}`}
                    </Badge>
                </Col>
                <Col md={6} className="d-flex flex-column align-items-center mb-3">
                    <Badge pill bg="info" className="w-50">
                        {`Intelligence: ${teamStats.intelligence}`}
                    </Badge>
                </Col>
                <Col md={6} className="d-flex flex-column align-items-center mb-3">
                    <Badge pill bg="dark" className="w-50">
                        {`Power: ${teamStats.power}`}
                    </Badge>
                </Col>
                <Col md={6} className="d-flex flex-column align-items-center mb-3">
                    <Badge pill bg="warning" className="w-50">
                        {`Speed: ${teamStats.speed}`}
                    </Badge>
                </Col>
                <Col md={6} className="d-flex flex-column align-items-center mb-3">
                    <Badge pill bg="danger" className="w-50">
                        {`Strength: ${teamStats.strength}`}
                    </Badge>
                </Col>
            </Row>
            <div className="d-flex flex-row justify-content-around">
                <p className="text-center text-white">Average weight: {averageStats.weight.toFixed(2)} kg</p>
                <p className="text-center text-white">Average height: {averageStats.height.toFixed(2)} cm</p>
            </div>
        </Container>
    );
}

export default Stats;