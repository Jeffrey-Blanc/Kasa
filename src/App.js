import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer"
import styled from "styled-components"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const HeaderAndMain = styled.div`
  margin: 0 100px;
`

export default function App() {
  return (
      <Router>
        <HeaderAndMain>
          <Header />
          <main>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </main>
        </HeaderAndMain>
        <Footer />
      </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}