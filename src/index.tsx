import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./scss/style.scss";
import Home from './pages/home/home';
import List from './pages/list/list';
import Search from './pages/search/search';
import { Provider } from "react-redux";
import store from "./redux/Store/Store";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
  

        <Switch>
          <Route path="/liste" component={List} />
          <Route path="/rechercher" component={Search}/>
          <Route path="/" component={Home} />

        </Switch>

      </div>
    </Router>
</Provider>,
document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* retirer pour ne pas géner l'affichage sur les différentes pages
      <nav>
          <ul>
            <li>
              <Link to="/home">Accueil</Link>
            </li>
          </ul>
        </nav>

*/