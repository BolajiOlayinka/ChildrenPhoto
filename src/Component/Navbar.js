import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  
} from 'reactstrap';
import style from './Navbar.module.css';
import {Link} from 'react-router-dom';
import Logo from '../images/Logo.png';


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md" id={style.myNavbar}>
        <NavbarBrand> <Link to="/"> <img src={Logo} alt="logo"/></Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
            <Link id={style.navLink} to="/">Home</Link>
            </NavItem>
            <NavItem>
            <Link id={style.navLink} to="/">Gallery</Link>
            </NavItem>
            <NavItem>
            <Link id={style.navLink} to="/">About Us</Link>
            </NavItem>
            
            
            
          </Nav>
          <Link to="/"><Button id={style.log}>Sign In</Button></Link>
          <Link to="/"><Button id={style.sign}>Sign Up</Button></Link>
        </Collapse>
      </Navbar>
     
    </div>
  );
}

export default Header;