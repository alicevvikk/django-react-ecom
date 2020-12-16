import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSpecificProduct} from '../lookup';
export function Detail() {
  let { product_id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const myCallBack = (response, status) => {
      if (status === 200) {
        response = response[0]
        setProduct(response);
        console.log("specific item:", response);
      }
      
    }; getSpecificProduct(myCallBack, product_id)
  }, [])
  
  return (
    <div>
      <div className="detailPage container mt-5">
        <div className="back-btn-container">
          <button className="back-btn">Back to Shopping</button>
        </div>
        <div className="detail-section container">
          <div className="detail-img-div container">
            <img
              className="detail-img container"
              src="https://dl.airtable.com/.attachmentThumbnails/65708b701baa3a84883ad48301624b44/2de058af"
            ></img>
          </div>
          <div className="product-detail container">
            <div className="product-title">{product.name}</div>
            <div className="product-desc">{product.description}</div>
            <div className="product-available"></div>
            <div className="product-brand">{product.id} </div>
            <hr></hr>
          </div>
        </div>
      </div>
    </div>
  );
}
