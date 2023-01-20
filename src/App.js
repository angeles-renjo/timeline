import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';
import Team from "./components/Team";
import LogBook from "./components/LogBooks";
import Home from "./components/Home"
import Meetings from "./components/Meetings";
import Poster from "./components/Poster"
import ProjectProposal from "./components/ProjectProposal"
import MidProject from "./components/MidProject"
import ClientFeedBack from "./components/ClientFeedBack"
import Documents from "./components/Documents"
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";





const App = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <ReactFullpage
        navigation={true}
        sectionsColor={["aqua", "#0FC2C0", "#3dabc2", "#29d6b7", "#2cc2d3", "#2cc2d3", "#2cc2d3", "#2cc2d3", "#2cc2d3"]}
        navigationTooltips={['Home', 'The Team', 'LogBooks', 'MeetingMinutes', 'Poster', 'ProjectProposal', 'MidProjectProposal', 'ClientFeedBack', 'Other Documents']}
        showActiveTooltip={true}
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
  </BrowserRouter>
);
export default App;