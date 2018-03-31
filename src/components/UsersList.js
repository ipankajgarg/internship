import React, { Component } from "react";

class UsersList extends Component {
  renderList = () => {
    return this.props.userList.map(user => {
      if (user.selected == "false") {
        return (
          <li>
            <img src={user.imageURL} />
            <span>{user.name}</span>
          </li>
        );
      }
    });
  };
  render() {
    console.log("list", this.props.userList);
    return (
      <div className="userlist" style={{ position: "absolute" }}>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}
export default UsersList;
