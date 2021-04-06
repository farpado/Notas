import React, { Fragment } from 'react';
import Header from "../../../components/header";
import { Column, Section, Title, Container, Card } from "rbx";
import LogoImage from '../../../assets/images/logo.png';
import "../../../styles/auth.scss";
import LoginForm from "../../../components/auth/login_form";

function Login() {
    return (
        <Fragment>
            <Header />
            <Section size="undefined" className="auth">
                <Container>
                    <Column.Group centered>
                        <Column size={5}>
                            <Card>
                                <Card.Content>
                                    <Section>
                                        <Column.Group centered>
                                            <Column size={5}>
                                                <img src={LogoImage} />
                                            </Column>
                                        </Column.Group>

                                        <Column.Group>
                                            <Column size={12}>
                                            <LoginForm/>
                                                <Title size={6} className="has-text-grey has-text-centered">
                                                    Suas notas na nuvem
                                                 </Title>
                                            </Column>
                                        </Column.Group>
                                    </Section>
                                   
                                </Card.Content>
                            </Card>
                        </Column>
                    </Column.Group>
                </Container>
            </Section>
        </Fragment>
    )
}

export default Login;