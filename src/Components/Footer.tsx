import React, { Component } from "react";
import gitHubIcon from "../img/github.png";
export default class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="footerIcon">
          <img id="footerIcon" src={gitHubIcon} alt="gitHub Icon" />
        </div>
        <div className="footerPb">
          <a id="pb-inf" href="https://github.com/JuanP-VT">
            {" "}
            Made with ❤️ by Juan P
          </a>
        </div>
      </div>
    );
  }
}
