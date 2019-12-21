import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import { ImageConsumer } from "../Context";
import Header from './Header';
import {Link} from 'react-router-dom';
export default class Details extends Component {
  render() {
    return (
      <div>
       <Header/>
        <ImageConsumer>
          {value => {
            const { id, image, info, title } = value.imageDetails;
            return (
              <DetailsArea>
                
                <Container>
                  <Row>
                    <Col lg="6 mt-5" md="6" sm="12" xs="12">
                      <Img src={image} alt="details" />
                    </Col>
                    <Col lg="6 mt-5" md="6" sm="12" xs="12">
                    <DetailsTitle>{title}</DetailsTitle>
                      <InfoContainer>{info}
                      <ButtonContainer>
                      <Link to = '/gallery'><Button>Back to Gallery</Button></Link>
                      </ButtonContainer>
                      </InfoContainer>
                    </Col>
                  </Row>
                </Container>
              </DetailsArea>
            );
          }}
        </ImageConsumer>
      </div>
    );
  }
}
const Img = styled.img`
  width:100%;
`;
const InfoContainer = styled.p`
  margin-top: 2em;
  width:70%;
  margin: 1em auto;
 text-align:justify;
`;
const DetailsArea = styled.div`
  margin-top: 3em;
  margin-bottom: 3em;
`;
const DetailsTitle = styled.div`
  text-align: center;
  font-weight: bold;
  font-size:24px;
`;

const ButtonContainer= styled.div `
text-align:center;
margin:3em;
`;
const Button = styled.button`
width:10em;
border-radius:1.2em;
background-color:#5984fd;
color:white;
padding:0.5em;
border-style:none;
border-color:transparent;
`