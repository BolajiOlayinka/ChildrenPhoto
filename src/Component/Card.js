import React, { Component } from "react";
import { Link } from "react-router-dom";
import download from "../images/download.png";
import { ImageConsumer } from "../Context";
import styled from "styled-components";
import PropTypes from "prop-types";

export default class Card extends Component {
  render() {
    const { id, thumbnail, title } = this.props.image;
    return (
      <ImageConsumer>
        {value => (
          <React.Fragment>
            <CardContainer className="card mt-5 mb-3">
              <LogoContainer onClick={() => value.handleDetail(id)}>
                {this.props.key}
                <Link to="./details">
                  <ImageContent src={thumbnail} alt="child" />
                </Link>
                <Button>
                  {" "}
                  <Img src={download} alt="download" />
                </Button>
              </LogoContainer>

              <CardTag>{title}</CardTag>
            </CardContainer>
          </React.Fragment>
        )}
      </ImageConsumer>
    );
  }
}

Card.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  }).isRequired
};

const Button = styled.button`
  padding: 0.2em;
  position: absolute;
  right: 0;
  bottom: 0;
  margin-bottom: 4.2em;
  margin-right: 0.2em;
  border-radius: 0.5em;
  border-style: none;
  border-color: transparent;
  transition: all 1s linear;
  transform: translate(100%, 100%);
  &:hover {
    background-color: white;
  }
`;
const CardContainer = styled.div`
  border-style: none;
  background-color: #f9f9f9;
  height: 31em;
  boxshadow: 0px 2px 8px rgba(0, 0, 0, 0.1), 0px 1px 20px rgba(0, 0, 0, 0.05);
  border-radius: 0.5em;
  overflow: hidden;
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1), 0px 1px 20px rgba(0, 0, 0, 0.05);
  height: 27em;
  border-radius: 0.5em;
  text-align: center;
  &:hover {
    transform: scale(1.1);
    overflow: hidden;
    transition: all 1s linear;
    button {
      transform: translate(-10%, -10%);
    }
  }
`;

const ImageContent = styled.img`
  width: 21.9em;
  border-radius: 0.5em;
  height: 27em;
`;

const Img = styled.img`
  width: 2em;
`;
const CardTag = styled.p`
  padding-top: 1.6em;
  padding-bottom: 0.5em;
  font-weight: bold;
  font-size: 0.8em;
  height: 2em;
  text-transform: upperCase;
  text-align: center;
`;

// export default function Card(props) {
//   return (
//     <div>
//       <CardContainer className="card mt-5 mb-3">
//         <LogoContainer onClick={() => console.log("clicked")}>
//           <Link to="./details">
//             <ImageContent src={props.CardImage} alt="child" />
//           </Link>
//           <Button>
//             {" "}
//             <Img src={download} alt="download" />
//           </Button>
//         </LogoContainer>

//         <CardTag>{props.cardTag}</CardTag>
//       </CardContainer>
//     </div>
//   );
// }
