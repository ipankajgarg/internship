import React, { Component } from "react";
import { connect } from "react-redux";
import { addedUser, allUser } from "../actions";
import UsersList from "./UsersList";
class Header extends Component {
  state = { show: false, userList: false };
  componentWillMount() {
    this.props.addedUser();
  }
  onFocus = () => {
    this.props.allUser();
  };
  renderUserList = () => {
    if (this.state.userList) {
      return <UsersList userList={this.props.loggedUser} />;
    }
  };
  onFocus = () => {
    if (this.state.userList) {
      this.setState({ userList: false });
    } else {
      this.setState({ userList: true });
    }
  };
  renderSection = () => {
    if (this.state.show)
      return (
        <div className="show_hide">
          <span style={{ fontWeight: "bold", fontSize: "13px" }}>Add User</span>
          <form style={{ position: "relative" }}>
            <label style={{ marginTop: "15px", fontSize: "12px" }}>
              Add user
            </label>
            <input onFocus={() => this.onFocus()} />
            {this.renderUserList()}
          </form>
        </div>
      );
  };

  renderList = () => {
    const users = this.props.loggedUser;
    return users.map(user => {
      if (user.selected == "true") {
        return (
          <li>
            <img src={user.imageURL} />
          </li>
        );
      }
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
                <ul className="icons">
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
export default connect(mapStateToProps, { addedUser, allUser })(Header);
