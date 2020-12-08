import React, { useEffect, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import { getNavbarItems } from "../lookup";
import { BiCart } from "react-icons/bi";
/*
function getProductKinds(callBack) {
  var url = "http://localhost:8000/api/kinds";
  const responseType = "json";
  const method = "GET";
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  xhr.onload = () => {
    //console.log(xhr.response, xhr.status);
    callBack(xhr.response, xhr.status);
  };

  xhr.send();
}
*/
function NavbarComponent(props) {
  const { currentPage, setCurrentPage } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const [navItems, setNavItems] = useState([]);
  useEffect(() => {
    const myCallBack = (response, status) => {
      console.log("received data: ", response, status);
      if (status === 200) {
        setNavItems(response);
        console.log("received data2: ", navItems, status);
      }
    };
    getNavbarItems(myCallBack);
  }, []);



  const changeCurrentPage = (to) => {
    console.log(to);
    setCurrentPage(to);
  };

  return (
    <Navbar color="light" light expand="md" sticky="top">
      <NavbarBrand className="ml-5 pl-5" href="/">
        BRAND
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mx-auto " navbar>
          {navItems.map((navItem, index) => {
            return (
              <NavItem className="ml-5" key={index}>
                <NavLink href="#" onClick={() => changeCurrentPage(navItem[1])}>
                  {navItem[1]}
                </NavLink>
              </NavItem>
            );
          })}
        </Nav>
      </Collapse>
      <NavItem>
        <BiCart></BiCart>
      </NavItem>
    </Navbar>
  );
}

export default NavbarComponent;
