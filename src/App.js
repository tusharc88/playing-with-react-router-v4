import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Link,
  Redirect
} from "react-router-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Home = props => (
  <div style={styles}>
    <h2>Home {"\u2728"}</h2>
    <p>{props.urlParam}</p>
  </div>
);

const About = () => (
  <div style={styles}>
    <h2>About {"\u2728"}</h2>
    <Link to="/about/address">Address</Link>
    <Link to="/about/email">E-mail</Link>
    <Link to="/about/phone">Phone No</Link>
    <Route path="/about/address" render={() => <div>Address</div>} />
  </div>
);

const Contact = () => (
  <div style={styles}>
    <h2>Contact: {"\u2728"}</h2>
  </div>
);

// manually tell if activeClassName has to be fired,
// will fire every time route is changed
const isActiveFunc = (match, location) => {
  return match;
};

const Links = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/?id=123">
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
    <NavLink to={{ pathname: "/oldlink/12345" }}>Old Link</NavLink>
  </nav>
);

const App = () => (
  <BrowserRouter>
    <div>
      <Links />
      <Switch>
        <Route
          exact
          path="/"
          render={({ match, location }) => (
            <div style={styles}>
              <h2>Home {"\u2728"}</h2>
              {/*<p>{JSON.stringify(match)}</p>
              <p>{JSON.stringify(location)}</p>*/}
              <p>{new URLSearchParams(location.search).get("id")}</p>
            </div>
          )}
        />
        <Route path="/about" children={() => <About />} />
        <Route path="/contact" render={() => <Contact />} />
        {/*<Redirect from="/oldlink" to="/" />*/}
        <Route
          path="/new/:str"
          children={({ match }) => <Home urlParam={match.params.str} />}
        />
        <Route
          path="/oldlink/:str"
          render={({ match }) => <Redirect to={`/new/${match.params.str}`} />}
        />
        <Route render={() => <h1>Path Not Found</h1>} />
        {/*
        <Route
          path="/:page?/:subpage?"
          render={({ match }) => (
            <div style={styles}>
              <h2>
                Page: {match.params.page} {"\u2728"} <br />
                Subpage: {match.params.subpage}
              </h2>
            </div>
          )}
        />
        */}
        {/*
        <Route
          path="/:a(\d{2}-\d{2}-\d{4})/:b"
          render={({ match }) => (
            <div style={styles}>
              <h2>
                Parameter A: {match.params.a} {"\u2728"} <br />
                Parameter B: {match.params.b}
              </h2>
            </div>
          )}
        />
        */}
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
