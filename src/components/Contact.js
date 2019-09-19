import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import styled from 'styled-components';

const Styles = styled.div`
.contact{    
    padding:20px;
    background-color: #f8f9fa
    display:flex;
    //flex-wrap:wrap;
    .address{
            margin-left:auto;
            padding:20px;
            h1{
                font-size:
                // font-weight:bold;
           }
            p{
                font-weight:bold;
                font-size:19px;
            }
    
}`

class Contact extends React.Component {
    render() {
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{ lat: 50.864630, lng: 4.669270 }}
                defaultZoom={13}
            >
                {props.isMarkerShown && <Marker position={{ lat: 50.864630, lng: 4.669270 }} />}
            </GoogleMap>
        ));
        return (
            <Styles>
                <div className='contact'>
                    <GoogleMapExample isMarkerShown
                        containerElement={<div style={{ height: `400px`, width: '400px' }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                    <div className='address'>
                        <h1>CONTACT INFO</h1>
                        <p>Address : Gaston Geenslaan 11 B4, 3000 Leuven - Belgium </p>
                        <p>Phone : +32 498 44 50 61</p>
                    </div>
                </div>
            </Styles>
        );
    }
};
export default Contact;

