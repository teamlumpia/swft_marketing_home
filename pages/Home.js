import React from 'react';
import styles from "../styles/Home.module.scss";
import {Button, Row, Col, Image, Container} from 'react-bootstrap';
import logo from '../assets/shakehands.png';

const Home = (props) => {
    return (
        <div className={styles.home}>
            <Container className="my-auto">
                <Row>
                    <Col xs={12} s={6} md={6} className="d-flex justify-content-center align-items-center">
                        <Image src="https://i.ibb.co/zb6JssT/logo.png" className={styles.home_logo}/>
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

// <a href="https://ibb.co/VDwmVVc"><img src="https://i.ibb.co/zb6JssT/logo.png" alt="logo" border="0"></a>
// <a href="https://ibb.co/TY7mMwp"><img src="https://i.ibb.co/QpTrvJz/mobile-invision.png" alt="mobile-invision" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>mobile image hosting</a><br />