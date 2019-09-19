import React from 'react';
import { CardColumns, Card, Button } from "react-bootstrap";
import podcastLogo from "../images/listen.png"
import styled from 'styled-components';

const Styles = styled.div`
*{
    margin:0 auto;
    padding:10px;
}
.card-columns{
    display:flex;
    flex-wrap:wrap;
    background-color:#f8f9fa;
    //padding:20px;
    }
`

class Podcasts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            podcasts: []
        };
    }

    render() {
        return (
            <Styles>
                <CardColumns>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={podcastLogo} />
                        <Card.Body>
                            <Card.Title>Podcast 1</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <a href="https://www.youtube.com/embed/nJ4CUJTFK2E" alt=""><Button variant="primary">Go to Podcast</Button></a>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={podcastLogo} />
                        <Card.Body>
                            <Card.Title>Podcast 2</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                            <Button variant="primary">Go to Podcast</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={podcastLogo} />
                        <Card.Body>
                            <Card.Title>Podcast 3</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                            <Button variant="primary">Go to Podcast</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={podcastLogo} />
                        <Card.Body>
                            <Card.Title>Podcast 4</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                            <Button variant="primary">Go to Podcast</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={podcastLogo} />
                        <Card.Body>
                            <Card.Title>Podcast 5</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                            <Button variant="primary">Go to Podcast</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={podcastLogo} />
                        <Card.Body>
                            <Card.Title>Podcast 6</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                            <Button variant="primary">Go to Podcast</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={podcastLogo} />
                        <Card.Body>
                            <Card.Title>Podcast 7</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                            <Button variant="primary">Go to Podcast</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={podcastLogo} />
                        <Card.Body>
                            <Card.Title>Podcast 8</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                            <Button variant="primary">Go to Podcast</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={podcastLogo} />
                        <Card.Body>
                            <Card.Title>Podcast 9</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                            <Button variant="primary">Go to Podcast</Button>
                        </Card.Body>
                    </Card>
                </CardColumns>
            </Styles >
        )
    };
}
export default Podcasts;