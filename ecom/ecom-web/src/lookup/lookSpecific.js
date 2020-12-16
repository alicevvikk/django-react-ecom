export function getSpecificProduct (callBack, product_id) {
    const url = `http://localhost:8000/api/product/${product_id}`;
    const method = 'GET';
    const responseType = 'json';
    
    const xhr = new XMLHttpRequest();
    xhr.responseType = responseType;
    xhr.open(method, url);
    xhr.onload = () => {
        //console.log(xhr.response);
        callBack(xhr.response, xhr.status);
    }
    xhr.send();

}