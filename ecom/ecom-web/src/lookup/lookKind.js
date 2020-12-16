export function getProductKinds(callBack) {
    const url = "http://localhost:8000/api/kinds";
    const responseType = 'json';
    const method = "GET";
    const xhr = new XMLHttpRequest();

    xhr.responseType = responseType;
    xhr.open(method, url);
  
    xhr.onload = () => {
      //console.log(xhr.response, xhr.status);
      callBack(xhr.response, xhr.status);
    };
  
    xhr.send();
  }