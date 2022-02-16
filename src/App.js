import PesertaList from "./components/PesertaList";
import AddPeserta from "./components/AddPeserta";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Switch>
              <Route exact path="/">
                <PesertaList />
              </Route>
              <Route  path="/add">
                <AddPeserta />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
