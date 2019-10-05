import React, { useGlobal } from "reactn";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
// import NotFound from './pages/NotFound';
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Logout from './components/Logout';
import Signup from './components/SignupForm'

const NavBar = () => {
  const { 0: token } = useGlobal("token");

  return (
    <nav>
      <ul>
        <li>
          <Link type="li" to="/Signup">
            Signup
          </Link>
        </li>
        <li>
          <Link type="li" to="/">
            Home
          </Link>
        </li>
        {!token && (
          <li>
            <Link type="li" to="/login">
              Login
            </Link>
          </li>
        )}
        {token && (
          <>
            <li>
              <Link type="li" to="/profile">
                Profile
              </Link>
            </li>
            <li>
              <Logout />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/Signup" component={Signup} />
      <PrivateRoute path="/profile" component={Profile} />
      {/* <Route component={NotFound} /> */}
    </Router>
  );
}

export default App;
