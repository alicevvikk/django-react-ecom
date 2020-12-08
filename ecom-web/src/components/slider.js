import React from "react";
import {Button} from 'reactstrap'

function SliderComponent() {
  return (
    <div className="slider container">
      
        <h1 className="display-3">Hello, Welcome!</h1>
        <p className="lead">
            You want to design your comfort zone and more ?
            This is the website that you are looking for!
        </p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <a href="/Electronic"><Button color="warning" className = "shop-btn btn">SHOP NOW</Button> </a>
        </p>
      
    </div>
  );
}

export default SliderComponent;
