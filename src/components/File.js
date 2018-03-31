import React, { Component } from "react";
import Arrows from "./common/Arrows";
class File extends Component {
  render() {
    return (
      <div id="file" style={{ marginTop: "10px" }}>
        <div className="container">
          <Arrows styleLeft="black" styleRight="gray" left="/folder" />

          <div
            className="row"
            style={{
              padding: "30px",
              marginTop: "30px",
              backgroundColor: "white"
            }}
          >
            <div className="col-sm-4">
              React (also React.js or ReactJS) is a JavaScript library for
              building user interfaces developed by Facebook & Instagram. It is
              not a full blown framework like Angular or Ember or even
              Backbone.js. It is a very simple View library which can replace
              the V in any other client-side MVC framework, i.e., you can use
              Backbone and React together for instance. In fact a lot of people
              are already doing that. Although when combined with a design
              pattern like Flux, you can totally give up on an MVC framework for
              your client-side architecture and happily develop apps with just
              React in conjunction with the Flux application architecture.
            </div>
            <div className="col-sm-4">
              React (also React.js or ReactJS) is a JavaScript library for
              building user interfaces developed by Facebook & Instagram. It is
              not a full blown framework like Angular or Ember or even
              Backbone.js. It is a very simple View library which can replace
              the V in any other client-side MVC framework, i.e., you can use
              Backbone and React together for instance. In fact a lot of people
              are already doing that. Although when combined with a design
              pattern like Flux, you can totally give up on an MVC framework for
              your client-side architecture and happily develop apps with just
              React in conjunction with the Flux application architecture.
            </div>
            <div className="col-sm-4">
              React (also React.js or ReactJS) is a JavaScript library for
              building user interfaces developed by Facebook & Instagram. It is
              not a full blown framework like Angular or Ember or even
              Backbone.js. It is a very simple View library which can replace
              the V in any other client-side MVC framework, i.e., you can use
              Backbone and React together for instance. In fact a lot of people
              are already doing that. Although when combined with a design
              pattern like Flux, you can totally give up on an MVC framework for
              your client-side architecture and happily develop apps with just
              React in conjunction with the Flux application architecture.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default File;
