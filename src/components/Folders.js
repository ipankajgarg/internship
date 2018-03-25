import React, { Component } from "react";
import { Link, hashHistory } from "react-router";
import Arrows from "./common/Arrows";
import data from "../../json/local.json";
class Folder extends Component {
  renderData = () => {
    return data.map(obj => {
      if (obj.type == "folder") {
        return (
          <li key={obj.id}>
            <Link to="folder" style={{ display: "block" }}>
              <div className="image">
                <img src="../../images/folder.png" />
              </div>
              <div className="description">
                <span>{obj.folderName}</span>

                <p>{obj.quantity}</p>
              </div>
            </Link>
          </li>
        );
      }
    });
  };

  render() {
    console.log(data);
    return (
      <div id="content" style={{ marginTop: "10px" }}>
        <div className="container">
          <Arrows
            styleLeft="gray"
            styleRight="black"
            left="/"
            right="/folder"
          />

          <div className="row">
            <div className="files_folder">
              <ul>{this.renderData()}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Folder;
