import React from "react";
import { Link } from "react-router-dom";
import Newsteller from "../Newsteller/Newsteller";

const Footer = () => {
  return (
    <>
      <Newsteller></Newsteller>
      <footer style={{ backgroundColor: "#23242a" }}>
        <div className="containerP">
          <div className="text-white text-center text-lg-start">
            <div className="container p-4">
              <div className="row mt-4">
                <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                  <h5 className="text-uppercase mb-4">About company</h5>

                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>

                  <p>
                    Blanditiis praesentium voluptatum deleniti atque corrupti
                    quos dolores et quas molestias.
                  </p>

                  <div className="mt-4">
                    <Link
                      to="https://www.facebook.com/Aarya.Tanjim2804/"
                      target="_blank"
                      className="bg-danger text-white p-2 me-1 rounded-circle"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>

                    <Link
                      to="#"
                      target="_blank"
                      className="bg-danger text-white p-2 me-1 rounded-circle"
                    >
                      <i className="fab fa-dribbble"></i>
                    </Link>

                    <Link
                      to="#"
                      target="_blank"
                      className="bg-danger text-white p-2 me-1 rounded-circle"
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>

                    <Link
                      to="#"
                      target="_blank"
                      className="bg-danger text-white p-2 me-1 rounded-circle"
                    >
                      <i className="fab fa-google-plus-g"></i>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase mb-4 pb-1">Search something</h5>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="text"
                      id="formControlLg"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" style={{ marginLeft: "0px" }}>
                      Search
                    </label>
                    <div className="form-notch">
                      <div
                        className="form-notch-leading"
                        style={{ width: "9px" }}
                      ></div>
                      <div
                        className="form-notch-middle"
                        style={{ width: "48.8px" }}
                      ></div>
                      <div className="form-notch-trailing"></div>
                    </div>
                  </div>

                  <ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
                    <li className="mb-3">
                      <span className="fa-li">
                        <i className="fas fa-home"></i>
                      </span>
                      <span className="ms-2">New York, NY 10012, US</span>
                    </li>
                    <li className="mb-3">
                      <span className="fa-li">
                        <i className="fas fa-envelope"></i>
                      </span>
                      <span className="ms-2">info@example.com</span>
                    </li>
                    <li className="mb-3">
                      <span className="fa-li">
                        <i className="fas fa-phone"></i>
                      </span>
                      <span className="ms-2">+ 01 234 567 88</span>
                    </li>
                    <li className="mb-3">
                      <span className="fa-li">
                        <i className="fas fa-print"></i>
                      </span>
                      <span className="ms-2">+ 01 234 567 89</span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase mb-4">Opening hours</h5>

                  <table className="table text-center text-white">
                    <tbody className="font-weight-normal">
                      <tr>
                        <td>Mon - Thu:</td>
                        <td>8am - 9pm</td>
                      </tr>
                      <tr>
                        <td>Fri - Sat:</td>
                        <td>8am - 1am</td>
                      </tr>
                      <tr>
                        <td>Sunday:</td>
                        <td>9am - 10pm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <p className="text-white">
            © 2021 Copyright:{" "}
            <Link
              className="text-white"
              target="_blank"
              to="https://www.facebook.com/Aarya.Tanjim2804/"
            >
              Tanjim Ahmed
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
