import React from 'react';
import style from './Footer.module.css';
import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
export default function Footer() {
    return (
        <React.Fragment>
        <div className={style.footerArea}>
        <Container>
        <Row>
       
        <Col lg="3" md="6" sm="12" xs="12">
          <div id={style.title}>
            <Link to="/">SOLUTIONS</Link>
          </div>
          <div id={style.body}>
            <p>
              <Link to="/">Front End Developers</Link>
            </p>
            <p>
            <Link to="/">Web Developers</Link>
            </p>
            <p>
            <Link to="/">Ios Developers</Link>
            </p>
            <p>
            <Link to="/">Ui/Ux Designers</Link>
            </p>
            <b>
            <Link to="/">Landing Page by </Link>
            </b>
          </div>
        </Col>
        <Col lg="3" md="6" sm="12" xs="12">
        <div id={style.title}>
            <Link to="/">COMMUNITY</Link>
          </div>
          <div id={style.body}>
            <p>
              <Link to="/">Events</Link>
            </p>
            <p>
            <Link to="/">Blog</Link>
            </p>
            <p>
            <Link to="/">Forum</Link>
            </p>
            <p>
            <Link to="/">Podcast</Link>
            </p>
            <b>
            <Link to="/">Bolaji Olayinka</Link>
            </b>
          </div>
        </Col>
        <Col lg="3" md="6" sm="12" xs="12">
        <div id={style.title}>
            <Link to="/">ABOUT US</Link>
          </div>
          <div id={style.body}>
            <p>
              <Link to="/">Partnership</Link>
            </p>
            <p>
            <Link to="/">Finance Expert</Link>
            </p>
            <p>
            <Link to="/">Product Managers</Link>
            </p>
            <p>
            <Link to="/">Partnerships</Link>
            </p>
            <b>
            <Link to="/">Copyright 2019</Link>
            </b>
          </div>
        </Col>
        <Col lg="3" md="6" sm="12" xs="12">
        <div id={style.title}>
        
            <Link to="/">CONTACT US </Link>
          </div>
          <div id={style.body}>
            <p>
              <Link to="/">Contact Us</Link>
            </p>
            <p>
            <Link to="/">Careers</Link>
            </p>
            <p>
            <Link to="/">Call Center</Link>
            </p>
            <p>
            <Link to="/">FAQs</Link>
            </p>
            <b>
             <Link to ="bolajiolayinka980@gmail.com"> bolajiolayinka980@gmail.com</Link>
            </b>
         
           
          </div>
          
        </Col>
       
      </Row>
      <Row>
      <div id={style.icon}>
               
               <Link to ='/'> <img src={twitter} alt="twitter" /></Link>
                <Link to ='/'><img src={facebook} alt="facebook" /></Link>
                <Link to ='/'><img src={instagram} alt="instagram" /></Link>
             
          </div>

      </Row>
      </Container>
      
        </div>
        </React.Fragment>
    )
}
