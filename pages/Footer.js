import React from 'react';
import styles from "../styles/Home.module.scss";
import { Container, Row, Col} from 'react-bootstrap'; 

const Footer = (props) => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_overlap}>
                <Container>
                    <Row>
                        <Col xs={12} s={6} md={6}>
                            <div className={styles.footer_overlap_title}>
                                More About Company
                            </div>
                            <div className={styles.footer_overlap_description}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </div>
                        </Col>
                        <Col xs={12} s={3} md={3} >
                            <div className={styles.footer_overlap_title}>
                                Keep Connected
                            </div>
                            <div className={styles.footer_overlap_description}>
                                Follow us and see what we&apos;re up to:
                                <ul>
                                    <li>ICON MEDIA</li>
                                    <li>ICON MEDIA</li>
                                    <li>ICON MEDIA</li>
                                    <li>ICON MEDIA</li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} s={3} md={3} >
                            <div className={styles.footer_overlap_title}>
                                Latest Updates
                            </div>
                            <div className={styles.footer_overlap_description}>
                                This is an incomplete product at that moment see our 
                                latest updates and what we&apos;re working on
                                <ul>
                                    <li>MOBILE UPDATE</li>
                                    <li>ICON MEDIA</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Footer;