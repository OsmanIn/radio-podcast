import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Form, Col, InputGroup, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Logo from '../images/logo-raccoons.png';
import styled from 'styled-components';

library.add(faSearch)

const Styles = styled.div`
    .nav-item {
      font-size:20px;
      margin-right:100px;
      .active {
          text-decoration: underline;
        a{
          color:#0610bd;
        }
      }
      // :last-child{
      //   margin-right:0;
      // }
      .nav-link{
        font-weight:bold;
        color:#000fff;
          a{
            &:hover {
            color:#0610bd;
          }
        }
      }
    }
      .form-group{
        margin-bottom:0 !important;
      }
    }
`

const NavigationBar = () => (
  <Styles>
    <header>
      <Navbar bg="light" expand="md" >
        <Navbar.Brand href="/home"><img src={Logo} width='100' height='100' alt='loo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" >
            <Nav.Item >
              <Nav.Link href="/home"><Link to="/home">Home</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item >
              <Nav.Link eventKey={1}><Link to="/podcasts">Podcasts</Link>
              </Nav.Link>
            </Nav.Item>
            {/* //logoyu ortay alma fikri icin// */}
            {/* <Nav.Item >
            <Nav.Link href="/home"><img src={Logo} width='90' height='90' alt='loo' />
            </Nav.Link>
          </Nav.Item> */}
            <Nav.Item >
              <Nav.Link eventKey={2}><Link to="/contact">Contact</Link></Nav.Link>
            </Nav.Item>
          </Nav>
          <Form.Row>
            <Form.Group as={Col}>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon="search" />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Search here.."
                />
              </InputGroup>
            </Form.Group>
          </Form.Row>
        </Navbar.Collapse>
      </Navbar >
    </header >
  </Styles >
)
export default NavigationBar;