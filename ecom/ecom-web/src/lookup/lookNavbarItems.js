export const getNavbarItems = (callBack) => {
      const url = 'http://localhost:8000/api/navbar-items';
      const method = 'GET';
      const responseType = 'json';

      const xhr = new XMLHttpRequest();
      xhr.responseType = responseType;
      xhr.open(method, url);
      xhr.onload = function() {
          if (xhr.status === 200) {
              callBack(xhr.response, xhr.status);
          }
      }
      xhr.send();

}