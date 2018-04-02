import React from "react";

export default function(state = { box: false, userslist: false }, action) {
  switch (action.type) {
    case "BOX": {
      const { box } = state;
      const { userslist } = state;
      return { ...state, box: !box, userslist };
    }
    case "USERSLIST": {
      const { box } = state;
      const { userslist } = state;
      return { ...state, box, userslist: !userslist };
    }
    default:
      return state;
  }
}
