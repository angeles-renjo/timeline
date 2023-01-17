import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';
import Team from "./components/Team";
import NavBar from "./components/NavBar";
import LogBook from "./components/LogBooks";
import Home from "./components/Home"
import Meetings from "./components/Meetings";

const App = () => (
  <div>
    <NavBar />
    <ReactFullpage
      navigation={true}
      sectionsColor={["#00ffff", "black", "#0798ec", "gray"]}
      onLeave={(origin, destination, direction) => {
        console.log("onLeave event", { origin, destination, direction });
      }}
      render={({ state, fullpageApi }) => {
        console.log("render prop change", state, fullpageApi);

        return (
          <div>
            <Home />
            <Team />
            <LogBook />
            <Meetings />

          </div>
        );
      }}
    />
  </div>
);
export default App;