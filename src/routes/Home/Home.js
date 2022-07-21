import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Banner from './Banner';
import Games from './Games';

const Home = () => {
    return (
        <section className='container'>
            <Row className='my-4 gy-lg-0 gy-3'>
                <Col lg={6}>
                    <Banner />
                </Col>
                <Col>
                    <Games />
                </Col>
            </Row>
        </section>
    );
}

export default Home;