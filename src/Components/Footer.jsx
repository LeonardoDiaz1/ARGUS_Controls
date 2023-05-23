import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

export default class CompFooter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
              <span className="mb-3 mb-md-0 text-body-secondary">Derechos Reservados &copy; Leonardo Díaz - 2023</span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3">
                <a className="text-body-secondary" href="#">
                  {" "}
                  <FaFacebook style={{ color: "black" }} />{" "}
                </a>
              </li>
              <li className="ms-3">
                <a className="text-body-secondary" href="https://github.com/LeonardoDiaz1" target="_bank">
                  {" "}
                  <FaGithub style={{ color: "black" }} />{" "}
                </a>
              </li>
              <li className="ms-3">
                <a className="text-body-secondary" href="#">
                  {" "}
                  <FaInstagram style={{ color: "black" }} />{" "}
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}
