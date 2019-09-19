import React from "react";
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from "styled-components";
import podcastImg from '../images/1.jpg';
import podcast from '../images/3.jpg';

const Styles = styled.div`
.jumbo {
    
    // background :url(${podcastImg})no-repeat;
     background-size:cover;    
     background:linear-gradient(45deg,#cc2b5e,#753a88);
    height:100px;
    position:relative;
    z-index:-2;
    padding:0;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);  

}
.overlay{
    //background :url(${podcast})no-repeat;
    //background-color: #000;
    background-size:100% 100%;
    height:100%;
    opacity:0.9;
    position:absolute;
    top:0;
    right:0;
    //bottom:0;
    //left:0;
    z-index:-1;
    img{
        height:100px;
    }
}
`;
const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className={'jumbo'}>
            <div className='overlay'>
                <Container>
                    <img src={podcast} alt='loo' />
                </Container>
            </div>
        </Jumbo>
    </Styles >
)
export default Jumbotron;
