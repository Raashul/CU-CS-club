import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class TopNavBar extends Component{

  render(){
    const username = localStorage.getItem('username');
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
          <NavItem eventKey={2}>
            <h4>Hello {username}!</h4>
           </NavItem>
      	</Nav>
        <Nav pullRight>
        <NavItem eventKey={2}>
          <Link to ='/signout'> <i className="fa fa-sign-out fa-lg" aria-hidden="true" ></i> </Link>
        </NavItem>
      </Nav>
      </Navbar>

    )
  }

}

export default TopNavBar;
