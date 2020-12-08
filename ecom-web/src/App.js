// React, hook imports
import React, { useState } from "react";

// Component imports
import NavbarComponent from "./components/navbar";
//import FooterComponent from "./components/footer";
import Home from "./components/home";
import Products from "./components/products";

// React-router-dom imports


function App() {
  const [currentPage, setCurrentPage] = useState("");
  if (currentPage === "" || currentPage === "Home") {
    return (
      <div>
        <NavbarComponent
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></NavbarComponent>
        <Home></Home>
      </div>
    );
  } else if (currentPage === "Products") {
    return (
      <div>
        <NavbarComponent
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></NavbarComponent>
        <Products></Products>
      </div>
    );
  }
}

export default App;
