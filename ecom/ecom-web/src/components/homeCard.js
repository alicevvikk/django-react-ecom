import React, { useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardColumns,
} from "reactstrap";

import {updateCart} from "../lookup"

export function CardComponent(props) {
  const { cart, products, setCart } = props;
  //const products = props.products;


 

  return (
    <div className="container cards">
      <div className="featured">
        Featured Products
        {cart.length}
        <div className="featured-underline"></div>
      </div>
      <CardColumns>
        {products.map((product, index) => {
          if (product.is_featured)
            return (
              <Card key={index}>
                <CardImg
                  top
                  width="100%"
                  src="https://dl.airtable.com/.attachmentThumbnails/5ebc46a9e31a09cbc6078190ab035abc/8480b064"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">{product.name}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    Card subtitle
                  </CardSubtitle>
                  <CardText>{product.description}</CardText>
                  <Button onClick={() => updateCart(product.id, "add")} action = "add" color="primary">
                    Add to cart
                  </Button>
                  <Button color="info ml-2">Detail</Button>
                  <p style={{ float: "right", color: "brown" }}>
                    ${product.price}
                  </p>
                </CardBody>
              </Card>
            );
          else return;
        })}
      </CardColumns>
    </div>
  );
}
