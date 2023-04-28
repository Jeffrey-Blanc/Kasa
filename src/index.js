import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import styled from "styled-components"

import Header from "./components/Header";
import Footer from "./components/Footer"
import Error from "./components/Error"
import Home from "./pages/Home"
import About from "./pages/About"
import Apartment from "./pages/Apartment"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const HeaderAndMain = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 100px;
`

const Main = styled.main`
  margin: auto 0;
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <HeaderAndMain>
        <Header />
        <Main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/apartment/:id">
              <Apartment />
            </Route>
            <Route>
              <Error />
            </Route>
          </Switch>
        </Main>
      </HeaderAndMain>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
