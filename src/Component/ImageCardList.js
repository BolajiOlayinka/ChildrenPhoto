import React from "react";
import { Container, Row, Col } from "reactstrap";
import ImageCard from "./ImageCard";
import style from './ImageCard.module.css';
import log1 from "../images/img1.png";
import log2 from "../images/img2.png";
import log4 from "../images/img4.png";




export default function ImageCardList() {
  return (
    <div>
      
      <div className={style.gallery}>
        <h2>Our Gallery</h2>
       
        <Container>
          <Row>
            <Col lg="4" md="6" sm="6" xs="12">
              <ImageCard
                 VerifiedImage={log1}
                 cardTag="Children Chidren"
              />
            </Col>
            <Col lg="4" md="6" sm="6" xs="12">
            <ImageCard
                
                 VerifiedImage={log2}
                 cardTag="Children Chidren"
              />
            </Col>
            <Col lg="4" md="6" sm="6" xs="12">
           
                <ImageCard
                 VerifiedImage={log4}
                 cardTag="Children Chidren"
              />
            </Col>
           
          </Row>
        </Container>


      </div>
      
      
      
    </div>
  );
}
