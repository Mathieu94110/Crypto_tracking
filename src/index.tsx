import React, { FC } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./style.scss";
import Home from './pages/home/home.tsx';
import List from './pages/list/list.tsx';

const App: FC = () => {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Accueil</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/liste" component={List} />

          <Route path="/" component={Home} />

        </Switch>

      </div>
    </Router>

  );
};

ReactDOM.render(<App />, document.getElementById("root"));

