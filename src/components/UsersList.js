import React, { Component } from "react";
import { connect } from "react-redux";
import { postList, usersList, box } from "../actions";
class UsersList extends Component {
  state = { userList: false, arr: [] };
  // componentWillMount() {
  //   console.log("this", this.state.userList);
  // }
  setText = user => {
    if (user.selected) {
      this.deleteList(user);
    } else {
      user.selected = !user.selected;
      const array = this.state.arr.concat([user]);
      this.setState({ arr: array });
    }
  };
  deleteList = user => {
    user.selected = !user.selected;
    const array = this.state.arr.filter(item => item.id != user.id);
    this.setState({ arr: array });
  };

  createdTags = () => {
    console.log("created", this.state.arr);
    if (this.state.arr.length > 0)
      return this.state.arr.map(text => {
        return (
          <span>
            {text.name}
            <img
              onClick={() => this.deleteList(text)}
              style={{ width: "6%" }}
              src="../../images/cross.png"
            />
          </span>
        );
      });
  };
  renderList = () => {
    return this.props.userList.map(user => {
      if (user.added == "false") {
        if (user.selected) {
          return (
            <li onClick={() => this.setText(user)} key={user.id}>
              <img src={user.imageURL} />
              <span>{user.name}</span>
              <img src="../../images/right.png" />
            </li>
          );
        }

        return (
          <li
            className={user.selected ? "gray" : "show"}
            onClick={() => this.setText(user)}
            key={user.id}
          >
            <img src={user.imageURL} />
            <span>{user.name}</span>
          </li>
        );
      }
    });
  };

  renderUserList = () => {
    if (this.props.showList) {
      return (
        <div className="userlist" style={{ position: "absolute" }}>
          <ul>{this.renderList()}</ul>
        </div>
      );
    }
  };

  onSubmission = event => {
    event.preventDefault();
    console.log("submitted");
    this.props.box();
    for (var i = 0; i < this.state.arr.length; i++) {
      this.props.postList(this.state.arr[i]);
    }
  };
  render() {
    // console.log("list", this.props.userList);
    return (
      <div className="show_hide">
        <span style={{ fontWeight: "bold", fontSize: "13px" }}>Add User</span>
        <br />
        <label style={{ fontSize: "12px", marginTop: "20px" }}>
          Add members
        </label>
        <div className="suggestion" style={{ position: "relative" }}>
          <ul style={{ padding: "0px" }}>
            <li id="create-list">
              {this.createdTags()}
              <form onSubmit={this.onSubmission}>
                <input onFocus={() => this.props.usersList()} />
              </form>
            </li>
          </ul>
          {this.renderUserList()}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    showBox: state.showHide.box,
    showList: state.showHide.userslist
  };
}
export default connect(mapStateToProps, { postList, usersList, box })(
  UsersList
);
