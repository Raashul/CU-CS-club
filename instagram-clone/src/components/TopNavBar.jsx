import React, { Component } from 'react';
import { Link } from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { firebaseApp } from '../firebase';

class TopNavBar extends Component{

  handleSignOut(){
    localStorage.removeItem('username');
    localStorage.removeItem('displayPicture');
    localStorage.removeItem('image');
    firebaseApp.auth().signOut();
  }

  render(){
    const username = localStorage.getItem('username');
    return(
      <Navbar fixedTop className='navbar' collapseOnSelect>
      	<Navbar.Header>
      		<Navbar.Brand>
      			 <i className="fa fa-instagram fa-2x" aria-hidden="true"></i><span className="sitename">Mini Instagram</span>
          </Navbar.Brand>
          <Navbar.Toggle />
      	</Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <Navbar.Text>
        			<Link to='/post' className='navbar-post-link' style={{color: 'black'}}>
                <i className="fa fa-picture-o fa-lg" aria-hidden="true"></i>
                Post
              </Link>
        		</Navbar.Text>
        	</Nav>
          <Nav pullRight>
            <NavItem>
              <div onClick ={() => this.handleSignOut()}>
                <i className="fa fa-sign-out fa-2x" aria-hidden="true"></i>
              Logout
            </div>
            </NavItem>
          </Nav>
      </Navbar.Collapse>
    </Navbar>

    )
  }

}

export default TopNavBar;
