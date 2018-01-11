import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


class TopNavBar extends Component{

  render(){
    return(
      <Navbar fixedTop className='navbar'>
      	<Navbar.Header>
      		<Navbar.Brand>
      			 <a class="navbar-brand" href=""><i class="fa fa-instagram fa-2x" aria-hidden="true"></i><span class="sitename"> Meetgram</span></a>

          </Navbar.Brand>
      	</Navbar.Header>
      	<Nav>
      		<NavItem eventKey={1} href="#">
      			<Link to='/post' className='navbar-post-link' style={{color: 'black'}}><i class="fa fa-picture-o fa-lg" aria-hidden="true"></i></Link>
      		</NavItem>
      	</Nav>
        <Nav pullRight>
        <NavItem eventKey={1} href="#">
          <i class="fa fa-sign-out fa-lg" aria-hidden="true"></i>
        </NavItem>
      </Nav>
      </Navbar>

    )
  }

}

export default TopNavBar;
