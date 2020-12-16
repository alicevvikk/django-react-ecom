import {getCookie} from "../lookup"
export const updateCart = (productId, action) => {
    const url = "http://localhost:8000/api/updateCart";
    const responseType = 'json';
    const method = "POST";

    const xhr = new XMLHttpRequest();
    xhr.responseType = responseType;
    const csrftoken = getCookie("csrftoken");
    xhr.open(method, url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("HTTP_X_REQUESTED_WITH", "XMLHttpRequest");
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.setRequestHeader('X-CSRFTOKEN', csrftoken);
    
    xhr.onload = () => {
        
        console.log(xhr.response);
    } 
    xhr.send(JSON.stringify({productId, action}));

}