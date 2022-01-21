import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
//Components + Containers
import PassingThoughtsContainer from "./containers/PassingThoughtsContainer";
import Nav from "./components/Nav/Nav";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <header>
          <h1>Passing Thoughts</h1>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/thoughts"
              element={<PassingThoughtsContainer />}
            />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

//Home and NoMatch functional comps

const Home = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "rgb(131, 203, 255)",
    fontWeight: "bold",
  };

  return (
    <div style={{ textAlign: "center" }}>
      <p>What if you could post something and know it wouldn’t live forever?</p>
      <p>
        In this{" "}
        <NavLink style={linkStyle} to="/thoughts">
          Project
        </NavLink>
        , we built a place for our passing thoughts.
      </p>
      <p>
        Once you add a short thought, it’ll disappear after just 15 seconds.
      </p>
    </div>
  );
};

const NoMatch = () => {
  return (
    <p style={{ color: "rgb(176, 0, 0)", textAlign: "center" }}>
      Oops! The page you requested was not found!
    </p>
  );
};
