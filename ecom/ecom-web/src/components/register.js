import React, { useEffect, useState } from "react";






export function RegisterComponent() {
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  function registerUser(e) {
    //e.preventDefault();
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
      console.log("status", xhr.status);
    };
    xhr.send(JSON.stringify(myFormData));
  }

  return (
    <div className="login-container container mt-5">
      <form
        className="login-form"
        id="register-id"
        onSubmit={registerUser}
        method="POST"
        action = "http://localhost:8000/register"
        
      >
        {" "}
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control "
            id="exampleInputEmail1"
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
            id="exampleInputPassword1"
            name="password1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password2"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
