import React, { Component } from "react";
import { Link, hashHistory } from "react-router";
import Arrows from "./common/Arrows";

class InsideFolder extends Component {
  render() {
    return (
      <div id="inside-folder" style={{ marginTop: "10px" }}>
        <div className="container">
          <Arrows
            styleLeft="black"
            styleRight="black"
            left="/"
            right="/read/file"
          />

          <div className="row">
            <div className="files">
              <ul>
                <li>
                  <Link to="read/file" style={{ display: "block" }}>
                    <div className="file-image">
                      <img src="../../images/file.png" />
                    </div>
                    <div className="file-description">
                      <span>filename.doc</span>
                      <p>read it</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InsideFolder;
