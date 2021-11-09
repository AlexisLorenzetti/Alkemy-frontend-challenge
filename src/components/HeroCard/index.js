import React from 'react';
import { Button, Card } from 'react-bootstrap';

import './styles.css'

const HeroCard = ({ name, image }) => {
    return (
        <Card
            className="hero-card m-1 border-0 p-0 text-center"
            style={{ backgroundImage: `url(${image})` }}
        >
            <img src={image} alt={name} />
            <Card.Body className="hero-card__body border-top">
                <p className="text-white">{name}</p>
                <Button className="mt-2 bg-white border-0 rounded-pill" variant="primary">
                    <span className="text-transparent fw-bold">Add to my team</span>
                </Button>
            </Card.Body>
        </Card>
    );
}

export default HeroCard;