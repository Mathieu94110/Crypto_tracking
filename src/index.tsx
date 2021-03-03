import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home/home";
import List from "./pages/list/list";
import Search from "./pages/search/search";
import MyFavorites from "./pages/myFavorites/myFavorites";
import GagnantsEtPerdants from "./pages/gagnants_et_perdants/gagnants_et_perdants";
import Gagnants from "./pages/gagnants_et_perdants/gagnants";
import Perdants from "./pages/gagnants_et_perdants/perdants";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/Store/Store"; //
import reportWebVitals from "./reportWebVitals";
import { PersistGate } from "redux-persist/integration/react"; //
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <div>
          <Switch>
            <Route path="/100_premières_cryptos-monnaies" component={List} />
            <Route path="/Suivre_une_crypto-monnaie" component={Search} />
            <Route path="/Les_cryptos_que_je_suis" component={MyFavorites} />
            <Route
              path="/Gagnants_et_perdants"
              component={GagnantsEtPerdants}
            />
            <Route path="/gagnants" component={Gagnants} />
            <Route path="/perdants" component={Perdants} />

            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </PersistGate>
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
