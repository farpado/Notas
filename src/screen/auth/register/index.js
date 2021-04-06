import React, { Fragment } from 'react';
import Header from '../../../components/header';
import { Section, Container, Column, Card, Title } from 'rbx';
import LogoImage from '../../../assets/images/logo.png';
import '../../../styles/auth.scss';
import RegisterForm from '../../../components/auth/register_form';



function Register() {

    return (
        <Fragment>
            <Header />
            <Section size="undefined" className="auth">
                <Container>
                    <Column.Group centered>
                        <Column size={4}>
                            <Card>
                                <Card.Content>

                                    <Section>
                                        <Column.Group centered>
                                            <Column size={4}>
                                                <img className="img" src={LogoImage}  />
                                            </Column>
                                        </Column.Group>

                                        <RegisterForm/>
                                        
                                        <Column.Group>
                                            <Column size={12}>
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

export default Register;