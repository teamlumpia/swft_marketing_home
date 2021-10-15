import React from 'react';
import styles from "../styles/Home.module.scss";
import {Button, Row, Col, Image, Container} from 'react-bootstrap';

const Download = (props) => {
    return (
        <div className={styles.download}>
          <Container>
                <Row>
                    <Col xs={12} s={8} md={8} className="d-flex justify-content-center align-items-center">
                        <Container className="my-auto">
                            <Row className={styles.download_title}>
                               Download our app
                            </Row>
                            <Row className={styles.download_description}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, 
                                nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat
                            </Row>
                            <Row>
                                <Col className={styles.download_button_left}>BTN 1</Col>
                                <Col className={styles.download_button_right}>BTN 1</Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col xs={12} s={4} md={4} className="d-flex justify-content-center align-items-center">
                        <Image src="https://i.ibb.co/QpTrvJz/mobile-invision.png" className={styles.download_photo} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Download;