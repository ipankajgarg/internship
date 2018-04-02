import axios from "axios";

export function getCards() {
  return function(dispatch) {
    axios
      .get("http://localhost:3000/cards")
      .then(response => {
        dispatch({ type: "CARDS", payload: response });
      })
      .catch(() => {
        //if brand//show an error to the user
        console.log("auth");
      });
  };
}
export function postCards(obj) {
  return function(dispatch) {
    axios
      .post("http://localhost:3000/cards", obj)
      .then(response => {
        console.log("response", response);
        dispatch({ type: "UPDATE_CARDS", payload: response });
      })
      .catch(() => {
        //if brand//show an error to the user
        console.log("auth");
      });
  };
}
export function addedUser() {
  return function(dispatch) {
    axios
      .get("http://localhost:3000/users")
      .then(response => {
        console.log("response", response);
        dispatch({ type: "LOGGED", payload: response });
      })
      .catch(() => {
        //if brand//show an error to the user
        console.log("auth");
      });
  };
}
export function postList(user) {
  return function(dispatch) {
    axios
      .patch("http://localhost:3000/users/" + user.id, { added: "true" })
      .then(response => {
        console.log("patch response", response);
        dispatch({ type: "ADDED_USER", payload: response });
      })
      .catch(() => {
        //if brand//show an error to the user
        console.log("auth");
      });
  };
}
export function box() {
  return {
    type: "BOX"
  };
}
export function usersList() {
  return {
    type: "USERSLIST"
  };
}
// export function allUser() {
//   return function(dispatch) {
//     axios
//       .get("http://localhost:3000/users")
//       .then(response => {
//         console.log("response", response);
//         dispatch({ type: "LOGGED", payload: response });
//       })
//       .catch(() => {
//         //if brand//show an error to the user
//         console.log("auth");
//       });
//   };
// }
