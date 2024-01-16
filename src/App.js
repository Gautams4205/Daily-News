import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  pagesize={4}
                  key="general"
                  coutry="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  pagesize={4}
                  key="business"
                  coutry="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  pagesize={4}
                  coutry="in"
                  key="entertainment"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  pagesize={4}
                  key="general"
                  coutry="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News pagesize={4} key="health" coutry="in" category="health" />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  pagesize={4}
                  key="science"
                  coutry="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News pagesize={4} key="sports" coutry="in" category="sports" />
              }
            />

            <Route
              exact
              path="/technology"
              element={
                <News
                  pagesize={4}
                  key="technology"
                  coutry="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
