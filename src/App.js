import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';
import Second from "./components/Second";
import Third from "./components/Third";
import NavBar from "./components/NavBar";

const App = () => (
  <div>
    <NavBar />
    <ReactFullpage
      navigation={true}
      sectionsColor={["#00ffff", "#7fff00", "black", "blue"]}
      onLeave={(origin, destination, direction) => {
        console.log("onLeave event", { origin, destination, direction });
      }}
      render={({ state, fullpageApi }) => {
        console.log("render prop change", state, fullpageApi);

        return (
          <div>
            <div className="section" data-anchor="page1"><h3>FINNAPPSTER DELTAV2<br /> PORTFOLIO</h3></div>
            <Second />
            <Third />
          </div>
        );
      }}
    />
  </div>
);
export default App;