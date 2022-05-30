import logo from "./logo.svg";
import "./App.scss";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Home from "./example/Home";
import MyComponent from "./example/MyComponent";
import ListTodo from "./todos/ListTodo";
import Nav from "./nav/nav";
import ListUser from "./users/list-user";
import DetailUser from "./users/detail-user";
import { BrowserRouter, Switch, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/job">
              <MyComponent />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
