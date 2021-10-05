import React from 'react';
import styles from "../styles/Home.module.scss";
import {Button, Row, Col, Media, Container} from 'react-bootstrap';

const Home = (props) => {
    return (
        <div className={styles.home}>
            <Container className="my-auto">
                <Row>
                    <Col xs={12} s={6} md={6} className="d-flex justify-content-center align-items-center">
                        LOGO
                    </Col>
                    <Col xs={12} s={8} md={6}>
                        <div className={styles.home_title}>
                            Make Recruiting and Job hunting easy with one swipe
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;