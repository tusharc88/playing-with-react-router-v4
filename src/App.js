import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

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

// manually tell if activeClassName has to be fired,
// will fire every time route is changed
const isActiveFunc = (match, location) => {
  return match;
};

const Links = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/">
      Home
    </NavLink>
    <NavLink activeStyle={{ color: "green" }} to={{ pathname: "/about" }}>
      About
    </NavLink>
    <NavLink
      isActive={isActiveFunc}
      activeClassName="active"
      replace
      to="/contact"
    >
      Contact
    </NavLink>
  </nav>
);

const App = () => (
  <BrowserRouter>
    <div>
      <Links />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" children={() => <About />} />
        <Route
          path="/contact"
          render={() => (
            <div style={styles}>
              <h2>Contact {"\u2728"}</h2>
            </div>
          )}
        />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
