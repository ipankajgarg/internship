import React, { Component } from "react";
import { connect } from "react-redux";
import { addedUser, allUser, box, usersList } from "../actions";
import UsersList from "./UsersList";
class Header extends Component {
  state = { show: false, userList: false };
  componentWillMount() {
    this.props.addedUser();
    // var letters = "ABCDE".split("");
    // var color = "#";
    // for (var i = 0; i < 3; i++) {
    //   color += letters[Math.floor(Math.random() * letters.length)];
    // }
    // console.log("color", color);
  }
  onFocus = () => {
    this.props.allUser();
  };
  // renderUserList = () => {
  //   if (this.state.userList) {
  //     return (
  //       <UsersList arr={this.state.arr} userList={this.props.loggedUser} />
  //     );
  //   }
  // };
  // onFocus = () => {
  //   if (this.state.userList) {
  //     this.setState({ userList: false });
  //   } else {
  //     this.setState({ userList: true });
  //   }
  // };
  renderSection = () => {
    if (this.props.showBox)
      return <UsersList userList={this.props.loggedUser} />;
  };

  renderList = () => {
    const users = this.props.loggedUser;
    return users.map(user => {
      if (user.added == "true") {
        return (
          <li>
            <img
              style={{ border: "1px solid", borderColor: user.color }}
              src={user.imageURL}
            />
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
                        this.props.box();
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
// if (this.state.show) {
//   this.setState({ show: false });
// } else this.setState({ show: true });
// }
function mapStateToProps(state) {
  return {
    loggedUser: state.Logged.loggedUser,
    showBox: state.showHide.box,
    showList: state.showHide.userslist
  };
}
export default connect(mapStateToProps, { addedUser, allUser, box, usersList })(
  Header
);
