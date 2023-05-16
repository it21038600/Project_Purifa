import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch , faHome, faUserCircle,faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export default function Header() {
  const [showBasic, setShowBasic] = useState(true);
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img style={{marginLeft:'30px'}} src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thespruceeats.com%2Fwhat-is-mineral-water-4772011&psig=AOvVaw3S6YxSLDav3xc7qDN8Qg5f&ust=1684337730267000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOiC6pKV-v4CFQAAAAAdAAAAABAJ' width={'10%'}/>
      <h3 style={{ fontFamily: 'Rockwell', marginTop:'-5px', marginLeft:'20px' }}>Purify <br/>
      <h6 style={{ fontFamily: 'Brush Script MT', marginLeft:'10px', fontSize:'18px' }}>Life is water  </h6>
      </h3>
    <MDBNavbar expand='lg' style={{ backgroundColor: '#333',marginTop:'-30px', paddingTop:'20px' , paddingBottom:'16px',marginLeft:'220px' }}>
    <style>
    {`
    .navbar-angle::before {
      content: "";
      position: absolute;
      top: 0;
      left: -20px;
      width: 0;
      height: 0;
      border-top: 59px solid transparent;
      border-right: 20px solid #333;
    }
    `}
  </style>
  <div className="navbar-angle"></div>
  <MDBContainer fluid>
        <MDBNavbarToggler
          onClick={() => setShowBasic(!showBasic)}
          aria-controls='navbarExample01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse show={showBasic} navbar>
          <MDBNavbarNav right className='mb-2 mb-lg-0'>
            <MDBNavbarItem active>
           
              <MDBNavbarLink aria-current='page' href='#' style={{ textDecoration:'none', color: 'white', marginLeft:'60px', fontSize:'20px', fontFamily:'Trebuchet MS' }}>
             <Link to={`/person`} style={{textDecoration:'none'}}> <FontAwesomeIcon icon={faHome} /> Home</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#' style={{ color: 'white',marginLeft:'60px' , fontSize:'17px', fontFamily:'Trebuchet MS' }}>
              <FontAwesomeIcon icon={faCircleNotch} />  water sanitation
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#' style={{ color: 'white',marginLeft:'60px' , fontSize:'17px', fontFamily:'Trebuchet MS'  }}>
              <FontAwesomeIcon icon={faUserFriends} /> Survey 01
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#' style={{ color: 'white',marginLeft:'60px' , fontSize:'17px', fontFamily:'Trebuchet MS'  }}>
              <FontAwesomeIcon icon={faUserCircle} /> Surver 02
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
  );
}