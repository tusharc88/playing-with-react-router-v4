import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Home = () => (
  <div style={styles}>
    <h2>Home {"\u2728"}</h2>
  </div>
);

const About = () => (
  <div style={styles}>
    <h2>About {"\u2728"}</h2>
  </div>
);

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to={{ pathname: "/about" }}>About</Link>
    <Link to="/contact">Contact</Link>
  </nav>
);

const App = () => (
  <BrowserRouter>
    <div>
      <Links />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" children={() => <About />} />
        <Route path="/contact" render={() => <h2>Contact</h2>} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
