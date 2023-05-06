import {BrowserRouter, Route, Switch} from "react-router-dom";
import LandingPage from "./components/Landing/LandingPage";
import DogDetail from "./components/DogDetail/DogDetail"
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path= "/detail/:id" component = {DogDetail}/>
          <Route exact path= "/" component = {LandingPage}/>
          <Route exact path= "/newDog" component = {Form}/>
          <Route exact path= "/home" component = {Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;