import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import AuthProvider from "./context/AuthProvider";
import AboutUs from "./pages/AboutUs/AboutUs";
import AddService from "./pages/AddService/AddService";
import Contact from "./pages/Contact/Contact";
import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";
import ManageOrders from "./pages/ManageOrders/ManageOrders";
import MyOrders from "./pages/MyOrders/MyOrders";
import Notfound from "./pages/Notfound/Notfound";
import Register from "./pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Nav></Nav>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/aboutus">
              <AboutUs></AboutUs>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
