import React from 'react';
import styles from "../styles/Home.module.scss";
import {Button, Row, Col, Media, Container} from 'react-bootstrap';


const Contact = (props) => {
    return (
        <div className={styles.contact}>
            <Container>
                <Row>
                    <Col xs={12} s={6} md={6}>
                        <div className={styles.contact_title}>
                            Have a question?
                        </div>
                        <div className={styles.contact_description}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit. Nunc maximus, nulla ut commodo sagittis, 
                                sapien dui mattis dui, non pulvinar lorem felis 
                                nec erat</p>
                        </div>

                        <div className={styles.contact_location}>
                            <Row>
                                <Col className={styles.contact_location_icon}>ICON</Col>
                                <Col>PO BOX 8213., Seattle WA 98311</Col>
                            </Row>
                            <Row>
                                <Col className={styles.contact_location_icon}>ICON</Col>
                                <Col>(123)123-1234</Col>
                            </Row>
                            <Row>
                                <Col className={styles.contact_location_icon}>ICON</Col>
                                <Col>info@getswft.com</Col>
                            </Row>
                        </div>
                    </Col>

                    <Col xs={12} s={6} md={6}>
                        <div className={styles.contact_sendmsg}>
                            <div className={styles.contact_sendmsg_title}>
                                Send Message
                            </div>
                            <div className="form">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Full name"/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Email"/>
                                </div>

                                <div className={styles.contact_sendmsg_input}>
                                    <div className="mb-0">
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Type your message..."></textarea>
                                    </div>
                                </div>

                                <div className={styles.contact_sendmsg_button}>
                                    <Button className="btn btn-dark btn-lg">
                                        Send
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contact;