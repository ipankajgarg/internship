import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <div className="logo">
                <div className="row">
                  <div className="col-xs-6">
                    <div className="image">
                      <image src="../../images/elon-musk.jpg" />
                    </div>
                  </div>
                  <div
                    className="col-xs-6"
                    style={{ paddingLeft: "0px", marginTop: "10px" }}
                  >
                    <div className="description">
                      <span>Elon Musk</span>

                      <p>role of the user</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-4 col-sm-offset-2"
              style={{ position: "relative" }}
            >
              <div className="input-box">
                <input placeholder="search" />
                <img src="../../images/search.png" />
              </div>
            </div>
            <div
              className="col-sm-1 col-sm-offset-3"
              style={{ marginTop: "10px" }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "bold"
                }}
              >
                Show all v
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
