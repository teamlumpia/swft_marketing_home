import React from 'react';
import styles from "../styles/Home.module.scss";
import {Button, Row, Col, Media, Container} from 'react-bootstrap';

const Results = (props) => {
    return (
        <div className={styles.results}>
            <div className={styles.results_title}>
                RESULTS
            </div>

            <div className={styles.results_description}>
                <div className={styles.results_description_container}>
                    <div className={styles.results_description_testimonial}>
                        <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc maximus, nulla ut commodo sagittis, sapien dui mattis 
                        dui, non pulvinar lorem felis nec erat" 
                        </p>
                    </div>
                    <div className={styles.results_description_testimonial_author}>
                        - John P. Software Developer
                    </div>
                </div>

                <div className={styles.results_description_container}>
                    <div className={styles.results_description_testimonial}>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc maximus, nulla ut commodo sagittis, sapien dui mattis 
                        dui, non pulvinar lorem felis nec erat.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                        maximus, nulla ut commodo sagittis, sapien dui mattis dui, non
                        pulvinar lorem felis nec erat"</p>
                    </div>
                    <div className={styles.results_description_testimonial_author}>
                        - Angela A. RECRUITER
                    </div>
                </div>
            </div>

            <div className={styles.results_button}>
                <Button className="btn btn-dark btn-lg">
                    How it works
                </Button>
            </div>
        </div>
    );
}

export default Results;