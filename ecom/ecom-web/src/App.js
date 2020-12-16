// React, hook imports
import React, { useEffect, useState } from "react";
// Router imports
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

// Component imports
import { NavbarComponent, Home, Products, Detail, LoginComponent, RegisterComponent } from "./components";


function App() {
  const lookUser = (callBack) => {
    const url = "http://localhost:8000/accounts/getUser";
    const responseType = "json";
    const method = "GET";

    const xhr = new XMLHttpRequest();
    xhr.responseType = responseType;
    xhr.open(method, url);
    xhr.onload = () => {
      callBack(xhr.response, xhr.status)
    } 
    xhr.send();
  }

  
  const [cart, setCart] = useState({});
  const [user, setUser] = useState('ss');
  
  
  useEffect(() => {
    const myCallBack = (response, status) => {
      if (status === 200) {
        console.log(response.user);
        setUser(response);
      }
    };

    
    lookUser(myCallBack);
    
  },[]);
  useEffect(() => {
    const lookOrder = (callBack) => {
      const url = "http://localhost:8000/api/getOrder";
      const responseType = "json";
      const method = "GET";
  
      const xhr = new XMLHttpRequest();
      xhr.responseType = responseType;
      xhr.open(method, url);
      xhr.onload = () => {
        setCart(xhr.response);
      } 
      xhr.send();
    }
    lookOrder();
  },[cart])
  

  return (
    <div>
      
      <Router>
        <NavbarComponent cart = {cart} setCart={setCart} user= {user}></NavbarComponent>
        <Switch>
          <Route exact path="/">
            <Home cart = {cart} setCart={setCart}user= {user} />
          </Route>
          <Route exact path="/home">
            <Home cart = {cart} setCart={setCart}user= {user} />
          </Route>
          <Route exact path="/Products">
            <Products cart = {cart} setCart={setCart}user= {user} />
          </Route>

          <Route exact path="/Detail/:product_id">
            <Detail cart = {cart} setCart={setCart}user= {user} ></Detail>
            </Route>



        </Switch>
      </Router>
    </div>
  );
}

export default App;
