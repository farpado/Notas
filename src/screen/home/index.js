import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PresentationImage from '../../assets/images/presentation.png';
import Header from '../../components/header';
import { Column, Section, Title, Container, File, Button, Image } from 'rbx';
import '../../styles/home.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

function Home() {

    return (
        <Fragment>
            <Header />

            <Section size="medium" className="home">
                <Container>
                    <Column.Group>
                        <Column size={5}>

                            <Title size={2} spaced className="has-text-white">
                                Create notes easily and access when you wants on the cloud
                            </Title>
                            <Title size={5} spaced className="has-text-white" subtitle>
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.<br /><br />
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.
                            </Title>
                            <Link to="/register" className="button is-outlined is-white is-large">
                                <strong>Register for free Now</strong>
                            </Link>

                        </Column>
                        <Column size={6} offset={1}>

                            <img src={PresentationImage} />

                        </Column>
                    </Column.Group>
                </Container>
            </Section>

        {/*     <File id="form" enctype="multipart/form-data">
                <File.Label>
                    <File.Input type="file" name="avatar" />
                    <File.CTA>
                        <File.Icon>
                            <FontAwesomeIcon icon={faUpload} />
                        </File.Icon>
                        <File.Label as="span">Choose a File</File.Label>
                    </File.CTA>
                </File.Label>
                <Button type="submit" name="upload">Upload</Button>
                <Image id="avatar" />
            </File> */}
            
        </Fragment>
    );
}

export default Home;