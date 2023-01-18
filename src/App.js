import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';
import Team from "./components/Team";
import NavBar from "./components/NavBar";
import LogBook from "./components/LogBooks";
import Home from "./components/Home"
import Meetings from "./components/Meetings";
import Poster from "./components/Poster"
import ProjectProposal from "./components/ProjectProposal"
import MidProject from "./components/MidProject"
import ClientFeedBack  from "./components/ClientFeedBack"
import Documents from "./components/Documents"




const App = () => (
  <div>
    <NavBar />
    <ReactFullpage
      navigation={true}
      sectionsColor={["aqua", "#093640", "#3dabc2", "#29d6b7", "#2cc2d3","#2cc2d3","#2cc2d3","#2cc2d3","#2cc2d3"]}
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
            <Poster />
            <ProjectProposal />
            <MidProject />
            <ClientFeedBack />
            <Documents />


          </div>
        );
      }}
    />
  </div>
);
export default App;