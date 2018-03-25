import React from "react";
import { Route, IndexRoute } from "react-router"; ///indexroute is used as default route whenever request will come for '/' indexRoutw will be served

import App from "./components/app";
import Folders from "./components/Folders";
import Inside from "./components/InsideFolder";
import File from "./components/File";

const greeting = () => {
  return <div>hey there!</div>;
};
// const inside = () => {
//   return <div>i am inside</div>;
// };
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Folders} />
    <Route path="folder" component={Inside} />
    <Route path="read/file" component={File} />
  </Route>
);
