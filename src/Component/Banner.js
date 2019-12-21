import React from 'react';
import  Header from './Navbar';
import style from './Banner.module.css';
import { Link } from "react-router-dom";
import {Button} from 'reactstrap';

export default function Banner() {
    return (
        <React.Fragment>
        <div className={style.banner}>
           <Header/>
           <div className={style.bannerText}>
               <h2> You Create the Memory, We Capture Them</h2>
               <h4>Build up a  wardrobe of Memories for you children, We are happy to help</h4>
               <Link to="/gallery"><Button id={style.gallery}>View Gallery</Button></Link>
           </div>
        </div>
        </React.Fragment>
    )
}
