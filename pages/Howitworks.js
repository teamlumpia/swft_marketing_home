import React from 'react';
import styles from "../styles/Home.module.scss";
import {Button, Row, Col, Media, Container} from 'react-bootstrap';

const Howitworks = (props) => {
    return (
        <div className={styles.howitworks}>
            <div className={styles.howitworks_title}>How it works</div>
            <div className={styles.howitworks_title_2}>
                WE FOCUS ON DELIVERING A FAST AND EASY RECRUITING AND 
                JOB SEARCHING EXPERIENCE TO DELIVER THE BEST CUSTOMER SERVICE
            </div>
            <Container className={styles.howitworks_container}>
                <Col className={styles.howitworks_container_col}>
                        After login, see your list of jobs
                </Col>
                <Col className={styles.howitworks_container_col}>
                    See the number of candidates or companies that you&apos;ve added

                </Col>
                <Col className={styles.howitworks_container_col}>
                        Click on the list of candidates or jobs
                </Col>
                <Col className={styles.howitworks_container_col}>
                    <div>
                        Swipe <b>RIGHT</b> if interested, and <b>LEFT</b> if not interested
                    </div>
                </Col>
            
                <Col className={styles.howitworks_container_col}>
                    PHOTO 1
                </Col>
                <Col className={styles.howitworks_container_col}>
                    PHOTO 2
                </Col>
                <Col className={styles.howitworks_container_col}>
                    PHOTO 3
                </Col>
                <Col className={styles.howitworks_container_col}>
                    PHOTO 4
                </Col>
            </Container>

            <div className="d-flex justify-content-center align-items-center">
                <div className={styles.howitworks_videoplaceholder}>
                    VIDEO EXANPLE
                </div>
            </div>

            <div className={styles.howitworks_videoplaceholder_description}>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, 
                    nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem 
                    felis nec erat </p>

                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, 
                    nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem 
                    felis nec erat  </p>
            </div>
        </div>
    );
}

export default Howitworks;