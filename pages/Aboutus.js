import React from 'react';
import styles from "../styles/Home.module.scss";
import {Button, Row, Col, Media, Container} from 'react-bootstrap';
import Results from './Results';

const Aboutus = (props) => {
    return (
        <div className={styles.about}>
            <div className={styles.about_title}>
                What we do
            </div>
            <div className={styles.about_description}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nunc maximus, nulla ut commodo sagittis, sapien dui mattis 
                    dui, non pulvinar lorem felis nec erat
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                 reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                 nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                 sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

        <div className={styles.about_container}>
            <Row className="row g-0">
                <Col xs={12} s={6} md={6} className={styles.about_container_col}>
                    <Container className="py-4 px-4">
                    <div className={styles.about_container_title}>
                        Our Mission
                    </div>
                    <div className={styles.about_container_description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc maximus, nulla ut commodo sagittis, sapien dui mattis
                        dui, non pulvinar lorem felis nec erat
                    </div>
                    </Container>
                </Col>
                <Col xs={12} s={6} md={6} className={styles.about_container_col}>
                <Container className="py-4 px-4">
                    <div className={styles.about_container_title}>
                        OUR ESSENCE
                    </div>
                    <div className={styles.about_container_description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc maximus, nulla ut commodo sagittis, sapien dui mattis
                        dui, non pulvinar lorem felis nec erat
                    </div>
                    </Container>
                </Col>
                <Col xs={12} s={6} md={6} className={styles.about_container_col}>
                    <Container className="py-4 px-4">
                    <div className={styles.about_container_title}>
                        OUR PROMISE
                    </div>
                    <div className={styles.about_container_description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc maximus, nulla ut commodo sagittis, sapien dui mattis
                        dui, non pulvinar lorem felis nec erat
                    </div>
                    </Container>
                </Col>
                <Col xs={12} s={6} md={6} className={styles.about_container_col}>
                    <Container className="py-4 px-4">
                    <div className={styles.about_container_title}>
                        OUR VIBE
                    </div>
                    <div className={styles.about_container_description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc maximus, nulla ut commodo sagittis, sapien dui mattis
                        dui, non pulvinar lorem felis nec erat
                    </div>
                    </Container>
                </Col>
            </Row>
            </div>

            <Container>
                <div className={styles.about_ourwork_title}>
                    Our Work
                </div>
                <div className={styles.about_ourwork_description}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc 
                    maximus, nulla ut commodo sagittis, sapien dui mattis dui, non
                    pulvinar lorem felis nec erat
                    </p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </Container>

            <Container>
                <div className={styles.about_ourwork_title2}>
                    Meet Team SWFT
                </div>
                <Container>
                    <Row>
                        <Col xs={12} s={6} md={6} className={styles.about_ourwork_col}>
                            <Container>
                                <div className={styles.about_ourwork_col_photo}>
                                    PHOTO
                                </div>
                                <div className={styles.about_ourwork_col_name}>
                                    NAME
                                </div>
                                <div className={styles.about_ourwork_col_title}>
                                    TITLE
                                </div>
                                <div className={styles.about_ourwork_col_icons}>
                                    SOCIAL MEDIA ICONS
                                </div>
                            </Container>
                        </Col>
                        <Col xs={12} s={6} md={6} className={styles.about_ourwork_col}>
                            <Container>
                                <div className={styles.about_ourwork_col_photo}>
                                    PHOTO
                                </div>
                                <div className={styles.about_ourwork_col_name}>
                                    NAME
                                </div>
                                <div className={styles.about_ourwork_col_title}>
                                    TITLE
                                </div>
                                <div className={styles.about_ourwork_col_icons}>
                                    SOCIAL MEDIA ICONS
                                </div>
                            </Container>
                        </Col>
                        <Col xs={12} s={6} md={6} className={styles.about_ourwork_col}>
                            <Container>
                                <div className={styles.about_ourwork_col_photo}>
                                    PHOTO
                                </div>
                                <div className={styles.about_ourwork_col_name}>
                                    NAME
                                </div>
                                <div className={styles.about_ourwork_col_title}>
                                    TITLE
                                </div>
                                <div className={styles.about_ourwork_col_icons}>
                                    SOCIAL MEDIA ICONS
                                </div>
                            </Container>
                        </Col>
                        <Col xs={12} s={6} md={6} className={styles.about_ourwork_col}>
                            <Container>
                                <div className={styles.about_ourwork_col_photo}>
                                    PHOTO
                                </div>
                                <div className={styles.about_ourwork_col_name}>
                                    NAME
                                </div>
                                <div className={styles.about_ourwork_col_title}>
                                    TITLE
                                </div>
                                <div className={styles.about_ourwork_col_icons}>
                                    SOCIAL MEDIA ICONS
                                </div>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container>
                <div className={styles.about_ourwork_col_description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, 
                nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem 
                felis nec erat
                </div>

                <div className={styles.about_ourwork_col_button}>
                    <Button className="btn btn-dark btn-lg">
                        CONTACT US
                    </Button>
                </div>

                <div className={styles.about_ourwork_col_line}></div>
            </Container>

            <Results/>
        </div>
    );
}

export default Aboutus;