import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_APIKEY;
  state = { progress: 0 };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <>
        <Router>
          <LoadingBar
            color="#f11946"
            height={2}
            progress={this.state.progress}
          />
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pagesize={16}
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
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pagesize={16}
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
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pagesize={16}
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
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pagesize={16}
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
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pagesize={16}
                  key="health"
                  coutry="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pagesize={16}
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
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pagesize={16}
                  key="sports"
                  coutry="in"
                  category="sports"
                />
              }
            />

            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pagesize={16}
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
