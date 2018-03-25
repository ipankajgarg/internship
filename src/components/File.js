import React, { Component } from "react";
import Arrows from "./common/Arrows";
class File extends Component {
  render() {
    return (
      <div id="file" style={{ marginTop: "10px" }}>
        <div className="container">
          <Arrows styleLeft="black" styleRight="gray" left="/folder" />
          <div className="row">
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
              React in conjunction with the Flux application architecture. React
              encompasses some interesting concepts too like Virtual DOM,
              uni-directional reactive data flow, etc. but don’t worry we’ll
              discuss all those much later when you’re already comfortable with
              the library and hacking your way through it.
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
              React in conjunction with the Flux application architecture. React
              encompasses some interesting concepts too like Virtual DOM,
              uni-directional reactive data flow, etc. but don’t worry we’ll
              discuss all those much later when you’re already comfortable with
              the library and hacking your way through it.
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
              React in conjunction with the Flux application architecture. React
              encompasses some interesting concepts too like Virtual DOM,
              uni-directional reactive data flow, etc. but don’t worry we’ll
              discuss all those much later when you’re already comfortable with
              the library and hacking your way through it.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default File;
