import React, { useEffect, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Badge
} from "reactstrap";

import { getNavbarItems } from "../lookup";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
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
export function NavbarComponent(props) {
  const { cart, user } = props;
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
                <NavLink tag={Link} to= {`/${navItem[1]}`} >
                  {navItem[1]}
                </NavLink>
              </NavItem>
            );
          })}
          {user.user === 'AnonymousUser' ? <NavItem ><a href="/accounts/login"> Login</a></NavItem>
        : <NavItem> <a href="/accounts/logout"> Logout</a> </NavItem>}
        </Nav>

      </Collapse>
      <NavItem>
        <BiCart size = "1.5rem"></BiCart>
        <Badge color="primary"  >{cart.lengthOrder}</Badge>
      </NavItem>
    </Navbar>
  );
}


