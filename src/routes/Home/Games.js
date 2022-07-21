import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Games = () => {
    const [games, setGames] = useState([]);
    useEffect(() => {
        fetch('./games.json')
            .then(request => request.json())
            .then(response => setGames(response));
    }, []);

    return (
        <section className='overflow-auto' style={{ height: '335px' }}>
            <Row className='g-4'>
                {
                    games.map((game, index) => <Col
                        key={index}
                        xs={12}
                        md={6}
                        lg={6}
                    >
                        <Card>
                            <Card.Img variant="top" src={game.thumb} style={{
                                height: '252px',
                                width: '532px',
                                objectFit: 'cover',
                                maxWidth: '100%'
                            }} />
                            <Card.Body>
                                <Card.Title>{game.title}</Card.Title>
                                <Card.Text>
                                    Ratings: {game.ratings}💫
                                </Card.Text>
                                <Button variant="primary">Play now</Button>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </section>
    );
}

export default Games;