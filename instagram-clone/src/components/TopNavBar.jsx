import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { firebaseApp } from '../firebase';

class TopNavBar extends Component{

  handleSignOut(){
    localStorage.removeItem('username');
    firebaseApp.auth().signOut();
  }

  render(){
    return(
      <Navbar fixedTop className='navbar'>
      	<Navbar.Header>
      		<Navbar.Brand>
      			 <a className="navbar-brand" href=""><i className="fa fa-instagram fa-2x" aria-hidden="true"></i><span className="sitename">Mini Instagram</span></a>
          </Navbar.Brand>
      	</Navbar.Header>
      	<Nav>
      		<NavItem eventKey={1}>
      			<Link to='/post' className='navbar-post-link' style={{color: 'black'}}>
            <p><i className="fa fa-picture-o fa-lg" aria-hidden="true"></i> Post</p>
          </Link>
      		</NavItem>

      	</Nav>
        <Nav pullRight>
        <NavItem eventKey={2}>
          <div onClick={() => this.handleSignOut()}><i className="fa fa-sign-out fa-2x" aria-hidden="true" ></i></div>
        </NavItem>
      </Nav>
      </Navbar>

    )
  }

}

export default TopNavBar;
