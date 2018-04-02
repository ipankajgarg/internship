import React from "react";
import { Route, IndexRoute } from "react-router"; ///indexroute is used as default route whenever request will come for '/' indexRoutw will be served

import App from "./components/app";
import MainScreen from "./components/MainScreen";

const greeting = () => {
  return <div>hey there!</div>;
};
// const inside = () => {
//   return <div>i am inside</div>;
// };
export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainScreen} />
  </Route>
);
