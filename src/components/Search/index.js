import React, { useState } from 'react';
import { Button, Row, Carousel, Col, Form } from 'react-bootstrap';
import { HeroCard, Loader } from '../';
import heroesService from '../../services/heroes';

import './styles.css';

const Search = ({ myTeam, setMyTeam }) => {
    const [hero, setHero] = useState('');
    const [heroList, setHeroList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('')

    const handleChange = (e) => {
        const value = e.target.value;

        setHero(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
        setHeroList([]);

        heroesService.getHeroByname(hero)
            .then(res => {
                res.results.map(result => {
                    setHeroList(heroList => [...heroList, result])
                })
                setIsLoading(false)
            })
            .catch(err => {
                setIsLoading(false)
                setError('Oops! something went wrong.')
            })
    }

    return (
        <div className="search">
            <Form className="py-2">
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
                    <Carousel>
                        {
                            heroList.map(hero => (
                                <Carousel.Item className="pb-5" key={hero.id}>
                                    <Col md={8} className="m-auto">
                                        <HeroCard
                                            heroData={hero}
                                            myTeam={myTeam}
                                            setMyTeam={setMyTeam}
                                            isSearch={true}
                                        />
                                    </Col>
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>
                </Row>
            }
            {
                error &&
                <div className="error-container text-white d-flex flex-column justify-content-center align-items-center w-100">
                    <i className="fas fa-exclamation-circle fa-3x mb-2"></i>
                    <p>{error}</p>
                </div>
            }
            {
                isLoading &&
                <div className="loader-container d-flex justify-content-center align-items-center w-100">
                    <Loader />
                </div>
            }
        </div>
    );
}

export default Search;