import React, { Component } from "react";
import { connect } from "react-redux";
import { addedUser } from "../actions";
class Header extends Component {
  state = { show: false };
  componentWillMount() {
    this.props.addedUser();
  }
  renderSection = () => {
    if (this.state.show)
      return (
        <div className="show_hide">
          <span style={{ fontWeight: "bold", fontSize: "13px" }}>Add User</span>
          <form>
            <label style={{ marginTop: "15px", fontSize: "12px" }}>
              Add user
            </label>
            <input />
          </form>
        </div>
      );
  };

  renderList = () => {
    const users = this.props.loggedUser;
    return users.map(user => {
      return (
        <li>
          <img src={user.imageURL} />
        </li>
      );
    });
  };
  render() {
    console.log("logged", this.props.loggedUser);
    return (
      <div id="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-6" style={{ textAlign: "right" }}>
              <div>
                <span>Collaboration</span>
              </div>
            </div>
            <div className="col-xs-6" style={{ textAlign: "right" }}>
              <div>
                <ul>
                  {this.renderList()}
                  <li style={{ position: "relative" }}>
                    <img
                      onClick={() => {
                        if (this.state.show) {
                          this.setState({ show: false });
                        } else this.setState({ show: true });
                      }}
                      src="../../images/plus.png"
                    />

                    {this.renderSection()}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    loggedUser: state.Logged.loggedUser
  };
}
export default connect(mapStateToProps, { addedUser })(Header);
