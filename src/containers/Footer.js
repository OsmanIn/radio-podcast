import React from 'react';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';


library.add(faEnvelopeSquare, faTwitter, faFacebook, faInstagram, faYoutube, faLinkedin)

const Styles = styled.div`
*{
    margin:0 auto;
}
    a{
    text-align:center;
    margin:10px;
    color:#000;
    font-size:40px;
    }
`

const Footer = () => (
    <Styles>
        <Modal.Footer>
            <div className='social' >
                <a href='https://radio.raccoons.be/mailto:hello@raccoons.be'>
                    <FontAwesomeIcon icon={faEnvelopeSquare} />
                </a>
                <a href='https://twitter.com/RaccoonsGroup'>
                    <FontAwesomeIcon icon={faTwitter} color='#00aced' />
                </a>
                <a href='https://www.facebook.com/RaccoonsGroup'>
                    <FontAwesomeIcon icon={faFacebook} color='#3f729b' />
                </a>
                <a className='instagram' href='https://www.instagram.com/raccoons.be/'>
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href='https://www.youtube.com/playlist?list=PLZ3qr507TY87q-oKhkj3xILMdqYIqHQu0'>
                    <FontAwesomeIcon icon={faYoutube} color='#bb0000' />
                </a>
                <a href='https://www.linkedin.com/company/raccoonsgroup'>
                    <FontAwesomeIcon icon={faLinkedin} color='#007bb6' />
                </a>
            </div >
        </Modal.Footer>
    </Styles >
)

export default Footer;


