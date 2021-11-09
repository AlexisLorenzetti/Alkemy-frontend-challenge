import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { HeroCard } from '../';

import './styles.css';

const CardContainer = ({ myTeam, setMyTeam }) => {
    return (
        <div className="card-container p-2 mt-2">
            <h3 className="text-center text-white">My Team</h3>
            <Row>
                {
                    myTeam.map(heroData => (
                        <Col md={6} key={heroData.id}>
                            <HeroCard
                                heroData={heroData}
                                myTeam={myTeam}
                                setMyTeam={setMyTeam}
                            />
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
}

export default CardContainer;