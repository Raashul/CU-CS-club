import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { firebaseApp } from '../firebase';

class TopNavBar extends Component{

  handleSignOut(){
    localStorage.removeItem('username');
    firebaseApp.auth().signOut();
  }

  render(){
    const username = localStorage.getItem('username');
    return(
      <Navbar fixedTop className='navbar' collapseOnSelect>
      	<Navbar.Header>
      		<Navbar.Brand>
      			 <Link className="navbar-brand"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i><span className="sitename">Mini Instagram</span></Link>
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
              <i className="fa fa-sign-out fa-2x" aria-hidden="true"
                onClick ={() => this.handleSignOut()}
                ></i>
              Logout
            </NavItem>
          </Nav>
      </Navbar.Collapse>
    </Navbar>

    )
  }

}

export default TopNavBar;
