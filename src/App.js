import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Nav from './components/Nav/Nav';
import AboutUs from "./pages/AboutUs/AboutUs";
import AddService from "./pages/AddService/AddService";
import Contact from "./pages/Contact/Contact";
import Details from "./pages/Details/Details";
import Home from './pages/Home/Home';
import ManageOrders from "./pages/ManageOrders/ManageOrders";
import MyOrders from "./pages/MyOrders/MyOrders";
import Notfound from "./pages/Notfound/Notfound";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div>
      <Router>
        <Nav></Nav>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/aboutus">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/myOrders">
            <MyOrders></MyOrders>
          </Route>
          <Route path="/manageOrders">
            <ManageOrders></ManageOrders>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/details">
            <Details></Details>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
