import React from 'react';
import styles from "../styles/Home.module.scss";
import {Button, Row, Col, Form, Container} from 'react-bootstrap';
import {BsGoogle, BsLinkedin, BsFacebook} from 'react-icons/bs';

const Login = (props) => {
    return (
        <div className={styles.login}>
            <Container className="my-auto">
                <Row>
                    <Col xs={12} s={6} md={6} className="d-flex justify-content-center align-items-center">
                        LOGIN IMAGE
                    </Col>
                    <Col xs={12} s={8} md={6}>
                        <div className={styles.login_maintitle}>
                            Login
                        </div>
                        <p className={styles.login_maintitle_description}>Start searching today!</p>
                        <div className={styles.login_button}>
                            <Button className="btn btn-dark btn-lg">
                            <BsGoogle className={styles.login_icons} />
                                Sign in with Google
                            </Button>
                        </div>
                        <div className={styles.login_button}>
                            <Button className="btn btn-dark btn-lg">
                            <BsLinkedin className={styles.login_icons} />
                                Sign in with LinkedIn
                            </Button>
                        </div>
                        <div className={styles.login_button}>
                            <Button className="btn btn-dark btn-lg">
                            <BsFacebook className={styles.login_icons} />
                                Sign in with Facebook
                            </Button>
                        </div>
                        <div className={styles.login_line}>
                            or Sign in with Email
                        </div>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={styles.login_formlabel}>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={styles.login_formlabel}>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" />
                        </Form.Group>
                        <Row>
                            <Col className={styles.login_leftalign}>
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Remember me
                            </label>
                            </div>
                            </Col>
                            <Col className={styles.login_rightalign}>
                            Forget password?
                            </Col>
                        </Row>

                        <div className={styles.login_button_submit}>
                            <Button className="btn btn-dark btn-lg">
                                Login
                            </Button>
                        </div>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;