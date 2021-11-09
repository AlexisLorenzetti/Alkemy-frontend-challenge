import React, { useState } from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import { HeroCard } from '../';
import heroesService from '../../services/heroes';

import './styles.css';

const Search = () => {
    const [hero, setHero] = useState('');
    const [heroList, setHeroList] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;

        setHero(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setHeroList([])

        heroesService.getHeroByname(hero)
            .then(res => {
                res.results.map(result => {
                    setHeroList(heroList => [...heroList, {
                        id: result.id,
                        name: result.name,
                        image: result.image.url
                    }])
                })
            })
    }

    return (
        <>
            <Form className="search">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col md={6}>
                        <Form.Control className="rounded-pill border-white bg-transparent border-3 text-white" onChange={(e) => handleChange(e)} value={hero} type="text" placeholder="Search your hero" />
                    </Col>
                    <Col md='auto'>
                        <Button className="bg-white border-0 rounded-pill" onClick={(e) => handleSubmit(e)} variant="primary" type="submit">
                            <span className="text-transparent fw-bold">Search!</span>
                        </Button>
                    </Col>
                </Row>
            </Form>
            {
                heroList.length > 0 &&
                <Row className="p-2">
                    {
                        heroList.map(hero => (
                            <Col md={3} key={hero.id}>
                                <HeroCard
                                    name={hero.name}
                                    image={hero.image}
                                />
                            </Col>
                        ))
                    }
                </Row>
            }
        </>
    );
}

export default Search;