import React from "react";
import { ButtonToolbar, Button, Spinner, Jumbotron, Container } from 'react-bootstrap';
const Loader = props => (
    <Container>
        <Jumbotron className="justify-content-md-center">
            <ButtonToolbar size="lg">
                <Button variant="primary" size="lg" >
                    <Spinner
                        as="span"
                        expand="lg"
                        animation="border"
                        size="lg"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
        </Button>
            </ButtonToolbar>
        </Jumbotron>
    </Container>
)

export default Loader;


