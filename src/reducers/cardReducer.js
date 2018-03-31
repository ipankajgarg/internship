import React from "react";

export default function(state = { list: [], update: true }, action) {
  switch (action.type) {
    case "CARDS": {
      return { ...state, list: action.payload.data };
    }
    case "UPDATE_CARDS": {
      const myarr = state.list.concat([action.payload.data]);
      console.log("myarr", myarr);
      return { ...state, list: myarr };
    }
    default:
      return state;
  }
}
