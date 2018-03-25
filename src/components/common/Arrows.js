import React, { Component } from "react";
import { Link, hashHistory } from "react-router";
class Arrows extends Component {
  renderArrow() {
    if (this.props.styleLeft == "gray") {
      return (
        <div className="icons" style={{ marginLeft: "60px" }}>
          <Link style={{ cursor: "default" }}>
            <i
              className="fa fa-arrow-left"
              style={{ color: this.props.styleLeft }}
            />
          </Link>
          <Link to={this.props.right} style={{ cursor: "pointer" }}>
            <i
              className="fa fa-arrow-right"
              style={{ color: this.props.styleRight }}
            />
          </Link>
        </div>
      );
    } else if (this.props.styleRight == "gray") {
      return (
        <div className="icons" style={{ marginLeft: "60px" }}>
          <Link to={this.props.left} style={{ cursor: "pointer" }}>
            <i
              className="fa fa-arrow-left"
              style={{ color: this.props.styleLeft }}
            />
          </Link>
          <Link style={{ cursor: "default" }}>
            <i
              className="fa fa-arrow-right"
              style={{ color: this.props.styleRight }}
            />
          </Link>
        </div>
      );
    }
    return (
      <div className="icons" style={{ marginLeft: "60px" }}>
        <Link to={this.props.left} style={{ cursor: "pointer" }}>
          <i
            className="fa fa-arrow-left"
            style={{ color: this.props.styleLeft }}
          />
        </Link>
        <Link to={this.props.right} style={{ cursor: "pointer" }}>
          <i
            className="fa fa-arrow-right"
            style={{ color: this.props.styleRight }}
          />
        </Link>
      </div>
    );
  }

  render() {
    return <div>{this.renderArrow()}</div>;
  }
}
export default Arrows;
