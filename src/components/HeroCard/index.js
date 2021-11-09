import React, { useState } from 'react';
import { Badge, Button, Card, Row, Col, Image } from 'react-bootstrap';
import { HeroDetail } from '..';

import './styles.css'

const HeroCard = ({ heroData, myTeam, setMyTeam, isSearch }) => {
    const [show, setShow] = useState(false);

    const { id, name, image, powerstats, appearance, work, biography } = heroData;
    const { url } = image;
    const { combat, durability, intelligence, power, speed, strength } = powerstats;

    const limit = myTeam.map(hero => hero.biography.alignment).reduce((acc, value) => ({
        ...acc,
        [value]: (acc[value] || 0) + 1
    }), {});


    const addToMyTeam = () => {
        if (myTeam.length < 6 && !myTeam.some(hero => hero.id === id)) {
            setMyTeam(myTeam => [...myTeam, heroData]);
        }
    }

    const removeHero = () => {
        setMyTeam(myTeam.filter(hero => hero.id !== id))
    }

    return (
        <>
            <Card
                className="hero-card m-1 border-0 rounded-pill text-center p-3 flex-row"
            >
                <div className="hero-card__image-container my-auto">
                    <Image fluid src={url} alt={name} />
                </div>
                <Card.Body className="d-flex align-items-center justify-content-around hero-card__body p-0">
                    <div className={`d-flex flex-column justify-content-center ${!isSearch && 'w-50'}`}>
                        <p className="text-white fw-bold m-0">{name}</p>

                        {
                            !isSearch && (
                                <Row>
                                    <Col md={6}>
                                        <Badge pill bg="secondary" className="w-100">
                                            {`COM: ${combat}`}
                                        </Badge>
                                    </Col>
                                    <Col md={6}>
                                        <Badge pill bg="success" className="w-100">
                                            {`DUR: ${durability}`}
                                        </Badge>
                                    </Col>
                                    <Col md={6}>
                                        <Badge pill bg="info" className="w-100">
                                            {`INT: ${intelligence}`}
                                        </Badge>
                                    </Col>
                                    <Col md={6}>
                                        <Badge pill bg="dark" className="w-100">
                                            {`PWR: ${power}`}
                                        </Badge>
                                    </Col>
                                    <Col md={6}>
                                        <Badge pill bg="warning" className="w-100">
                                            {`SPD: ${speed}`}
                                        </Badge>
                                    </Col>
                                    <Col md={6}>
                                        <Badge pill bg="danger" className="w-100">
                                            {`STR: ${strength}`}
                                        </Badge>
                                    </Col>
                                </Row>
                            )
                        }
                    </div>

                    {
                        isSearch ?
                            <Button
                                className="mt-2 bg-white border-0 rounded-pill"
                                variant="primary"
                                onClick={() => addToMyTeam()}
                            >
                                <span className="text-transparent fw-bold">Add to my team</span>
                            </Button> : (
                                <div className="d-flex flex-column">
                                    <Button
                                        className="mt-2 bg-white border-0 rounded-pill"
                                        variant="primary"
                                        onClick={() => removeHero()}
                                    >
                                        <span className="text-transparent fw-bold">Remove</span>
                                    </Button>
                                    <Button
                                        className="mt-2 bg-white border-0 rounded-pill"
                                        variant="primary"
                                        onClick={() => setShow(true)}
                                    >
                                        <span className="text-transparent fw-bold">View Detail</span>
                                    </Button>
                                </div>
                            )
                    }

                </Card.Body>
            </Card>

            <HeroDetail show={show} setShow={setShow} name={name} appearance={appearance} work={work} biography={biography} />
        </>
    );
}

export default HeroCard;