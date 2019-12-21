import React, { Component } from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import capture from "../images/capture.png";
import albulm from "../images/abulm.png";
import { Container, Row, Col } from "reactstrap";
import style from "./Body.module.css";
import CardList from "./ImageCardList";
import CenterButton from "./centerButton";
import login from "../images/login.png";

export default class Body extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={style.body}>
          <Banner />
          <div className={style.area}>
            <Container>
              <Row>
                <Col lg="6 mt-5" md="6" sm="12" xs="12">
                  <div className={style.capture}>
                    <img src={capture} alt="capture" className={style.capt} />
                  </div>
                </Col>
                <Col lg="6" md="6" sm="12" xs="12">
                  <div className={style.captRight}>
                    <div>
                      <h2 className={style.caption}>
                        {" "}
                        Capture the Best Moment in Your Children's Life
                      </h2>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ab nisi, unde pariatur adipisci nobis reiciendis odit
                      nesciunt iure, itaque laboriosam doloribus fugit obcaecati
                      soluta sed
                    </p>
                    <p>
                      dolores officiis maxime fugit consequuntur magni amet!
                      Facere dolore voluptatibus reiciendis praesentium incidunt
                      totam culpa placeat eligendi minima commodi accusamus
                      nobis deleniti fugit vitae eos, ut molestias
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className={style.area}>
            <Container>
              <Row>
                <Col lg="6" md="6" sm="12" xs="12">
                  <div className={style.captRight}>
                    <div>
                      <h2 className={style.caption}>
                        {" "}
                        Capture the Best Moment in Your Children's Life
                      </h2>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ab nisi, unde pariatur adipisci nobis reiciendis odit
                      nesciunt iure, itaque laboriosam doloribus fugit obcaecati
                      soluta sed perferendis culpa, quasi fuga sapiente placeat
                      inventore natus blanditiis aut ullam repellat? Soluta,
                      eaque eveniet id commodi totam error nobis suscipit illum
                      cum perferendis
                    </p>
                    <p>
                      dolores officiis maxime fugit consequuntur magni amet!
                      Facere dolore voluptatibus reiciendis praesentium incidunt
                      totam culpa placeat eligendi minima commodi accusamus
                      nobis deleniti fugit vitae eos, ut molestias
                    </p>
                  </div>
                </Col>
                <Col lg="6" md="6" sm="12" xs="12">
                  <div className={style.albulm}>
                    <img src={albulm} alt="albulm" className={style.capt} />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <CardList />
          <Link to="/gallery">
            <CenterButton buttonText={"View More"} />
          </Link>
          <div>
            <img src={login} alt="login" className={style.signup} />
          </div>
          <CenterButton buttonText={"Sign Up"} />
        </div>
      </React.Fragment>
    );
  }
}
