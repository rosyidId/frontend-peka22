import PesertaList from "./components/PesertaList";
import AddPeserta from "./components/AddPeserta";
import EditPeserta from "./components/EditPeserta";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="container">
            <Switch>
              <Route exact path="/">
                <PesertaList />
              </Route>
              <Route  path="/add">
                <AddPeserta />
              </Route>
              <Route  path="/edit/:id">
                <EditPeserta />
              </Route>
            </Switch>
      </div>
    </Router>
  );
}

export default App;
