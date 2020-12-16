import React, { useEffect, useState } from "react";
import {getCookie} from "../lookup"

export function LoginComponent({setUser}) {


    function postData(e) {
    const myForm = e.target;
    const myFormData = new FormData(myForm);
    console.log(myFormData, "x");
    const url = e.target.getAttribute('action');
    const method = myForm.getAttribute("method");
    const responseType = "json";
    /*
      const data = JSON.stringify({
          username,
          password
      })
      */
    const xhr = new XMLHttpRequest();
    xhr.responseType = responseType;
    const csrftoken = getCookie("csrftoken");
    xhr.open(method, url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("HTTP_X_REQUESTED_WITH", "XMLHttpRequest");
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.setRequestHeader("X-CSRFToken", csrftoken);
    xhr.onload = () => {
      setUser(xhr.response);
      console.log("statusdgsgs", xhr.response);
    };
    xhr.send(JSON.stringify(myFormData));

  }

  return (
    <div className="login-container container mt-5">
      <form id="login-id"className="login-form" method="POST" onSubmit = {postData} action= "http://localhost:8000/accounts/login/">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control "
            id="username_id"
            aria-describedby="emailHelp"
            name="username"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password_id"
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
