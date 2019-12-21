import React, { Component } from "react";
import { Container, Col } from "reactstrap";
import { ImageConsumer } from "../Context";
import Header from './Header';
import Card from "./Card";
import styled from "styled-components";
import line from '../images/line.png';


export default class CardList extends Component {
  
  render() {
    return (
        <React.Fragment>
        <Header/>
      <Heading> Gallery </Heading>
      <Img src={line} alt="line"/>
      <Container>
        <div className="row">
          <ImageConsumer>
            {value => {
              return value.images.map((image) => {
                return (
                  <Col lg="4 mt-5" md="4" sm="6" xs="12">
                    <Card
                      // key={this.state.images.id}
                      // thumbnail={image.thumbnail}
                      // title={image.title}
                      key={image.id}
                      image={image}
                    />
                  </Col>
                );
              });
            }}
          </ImageConsumer>
        </div>
      </Container>
      </React.Fragment>
    );
  }
}

const Heading = styled.div `
text-align:center;
font-size:2em;
margin-top:2em;
font-weight:bold;
font-style:italics;
color:#5984fd;
`
const Img =styled.div `
text-align:center;
margin:auto;`