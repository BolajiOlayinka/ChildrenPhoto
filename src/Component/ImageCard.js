import React from "react";


const cardStyle = {
  borderStyle: "none",
  backgroundColor: "#F9F9F9",
  height: "31em",
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1), 0px 1px 20px rgba(0, 0, 0, 0.05)",
  borderRadius: "0.5em"
};
const logoContain = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "white",
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1), 0px 1px 20px rgba(0, 0, 0, 0.05)",
  height: "27em",
  borderRadius: "0.5em",
  textAlign: "center"
};
const myImg = {
  width: "21.9em",
  borderRadius: "0.5em",
  height: "27em"
};
const cardTag = {
  paddingTop: "1.6em",
  paddingBottom: "0.5em",
  fontWeight: "bold",
  fontSize: "0.8em",
  height: "2em",
  textTransform: "upperCase",
  textAlign: "center"
};

export default function ImageCard(props) {
  return (
    <div>
      <div className="card mt-5 mb-3" style={cardStyle}>
        <div style={logoContain} >
      <img src={props.VerifiedImage} style={myImg} alt="child" />
         
        </div>

        <p className="cardTag" style={cardTag}>
          {props.cardTag}
        </p>
      </div>
    </div>
  );
}
