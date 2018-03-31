import React from "react";

export default function(state = { loggedUser: [] }, action) {
  switch (action.type) {
    case "LOGGED": {
      return { ...state, loggedUser: action.payload.data };
    }

    default:
      return state;
  }
}
