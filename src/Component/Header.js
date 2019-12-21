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
  import styled from "styled-components";
  

 
    
export default function Header(props) {
const [isOpen, setIsOpen] = useState(false);
  
const toggle = () => setIsOpen(!isOpen);
        return (
            <div>
              <Navbar light expand="md" id={style.myHeader}>
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
                  <Link to="/"><Btn>Sign In</Btn></Link>
                  <Link to="/"><Button id={style.sign}>Sign Up</Button></Link>
                </Collapse>
              </Navbar>
             
            </div>
          );
        }

        const Btn = styled.button `
        background-color:White;
          color:#5984fd;
          margin:0em 0.7em;
          border-style:none;
          border-radius:1.2em;
         padding:0.5em;
         width:8em;
         font-size:0.8em;
         font-weight:bold;
        `
      
          
         
         