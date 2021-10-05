import React from 'react';
import styles from "../styles/Home.module.scss";
import {Button, Row, Col, Media, Container} from 'react-bootstrap';

const Pricing = (props) => {
    return (
        <div className={styles.pricing}>
            <div className={styles.pricing_title}>
                Scale with your business
            </div>
            <div className={styles.pricing_description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui,
            non pulvinar lorem felis nec erat
            </div>
            <Container>
                <Row>
                    <Col xs={12} s={4} md={4} className="d-flex justify-content-center align-items-center">BASIC</Col>
                    <Col xs={12} s={4} md={4} className="d-flex justify-content-center align-items-center">PREMIUM</Col>
                    <Col xs={12} s={4} md={4} className="d-flex justify-content-center align-items-center">COMPANY</Col>
                </Row>
            </Container>
        </div>
    );
}

export default Pricing;