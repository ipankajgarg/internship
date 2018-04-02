import React from "react";

export default function(state = { loggedUser: [] }, action) {
  switch (action.type) {
    case "LOGGED": {
      return { ...state, loggedUser: action.payload.data };
    }
    case "ADDED_USER": {
      console.log("prevarr", state.loggedUser);
      const myarr = state.loggedUser.filter(
        item => item.id != action.payload.data.id
      );
      //
      // state.list.concat([action.payload.data]);
      const arr = myarr.concat([action.payload.data]);
      console.log("myarray", arr);
      return { ...state, loggedUser: arr };
    }

    default:
      return state;
  }
}
