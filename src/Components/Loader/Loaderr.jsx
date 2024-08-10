import React from "react";
import "./Loader.css";
import { Container } from "react-bootstrap";
export default function Loaderr() {
  return (
    <div>
      <Container>
        <div id="ctn-preloader" className="ctn-preloader">
          <div className="animation-preloader">
            <div className="loader"></div>
            <div className="txt-loading">
              <span data-text-preloader="C" className="letters-loading">
                C
              </span>
              <span data-text-preloader="A" className="letters-loading">
                A
              </span>
              <span data-text-preloader="F" className="letters-loading">
                F
              </span>
              <span data-text-preloader="E" className="letters-loading">
                E
              </span>
              <span data-text-preloader="N" className="letters-loading">
                N
              </span>
              <span data-text-preloader="A" className="letters-loading">
                A
              </span>
            </div>
          </div>
          <div className="loader">
            <div className="row">
              <div className="col-3 loader-section section-left">
                <div className="bg"></div>
              </div>
              <div className="col-3 loader-section section-left">
                <div className="bg"></div>
              </div>
              <div className="col-3 loader-section section-right">
                <div className="bg"></div>
              </div>
              <div className="col-3 loader-section section-right">
                <div className="bg"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
