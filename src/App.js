import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';
import Second from "./components/Second";
import Third from "./components/Third";

const anchors = ["firstPage", "secondPage", "thirdPage", "fourthPage"];

const App = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    sectionsColor={["#00ffff", "#7fff00", "black", "blue"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div>
          <div className="section"><h3>FINNAPPSTER DELTAV2<br /> PORTFOLIO</h3></div>
          <Second />
          <Third />
        </div>
      );
    }}
  />
);
export default App;