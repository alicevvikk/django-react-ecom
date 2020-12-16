import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Detail } from ".";
import { getProducts } from "../lookup";

export function Products() {
  // One state below:
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const myCallBack = (response, status) => {
      if (status === 200) {
        console.log("products resnpose:", response);
        setProducts(response);
      }
    };

    getProducts(myCallBack);
  }, []);
  // One state below:
  const [filterText, setFilter] = useState("");
  const [filterPrice, setPrice] = useState(3099);
  const [filterCategory, setCategory] = useState("all");

  const filterProducts = (event) => {
    if (event.type === "change") {
      if (event.target.name === "text") {
        setFilter(event.target.value);
      } else if (event.target.name === "price") {
        console.log("youre here");
        setPrice(parseInt(event.target.value));
        document.querySelector(
          ".price-display"
        ).textContent = `${filterPrice} $`;
        console.log(event.target.value);

        event.target.value = filterPrice;
        console.log(filterPrice);
      }
    } else if (event.type === "click") {
      event.preventDefault();

      let element = document.getElementsByClassName("category-btn");
      for (let i = 0; i < element.length; i++) {
        if (element[i] === event.target) {
          element[i].className = "category-btn btn btn-outline-info active";
        } else {
          element[i].className = "category-btn btn btn-outline-info btn-sm";
        }
      }

      setCategory(event.target.name);
    }
  };

  const filtered = useMemo(() => {
    return products.filter((product) => {
      if (filterCategory.toLowerCase() === "all")
        return filterText.length > 0
          ? product.name.toLowerCase().includes(filterText.toLowerCase()) &&
              product.price < filterPrice
          : product.price < filterPrice;
      else if (product.kind.toLowerCase() === filterCategory.toLowerCase())
        return filterText.length > 0
          ? product.name.toLowerCase().includes(filterText.toLowerCase()) &&
              product.price < filterPrice
          : product.price < filterPrice;
      // just in case
      else if (filterCategory === "") return product.price < filterPrice;
    });
  }, [filterCategory, filterPrice, filterText, products]);

  return (
    <div className="products-page">
      <div className="card-filters">
        <form>
          <div class="form-search col mt-5 ml-2 ">
            <input
              onChange={filterProducts}
              type="text"
              name="text"
              class="form-control"
              placeholder="Search"
            />
          </div>

          <p></p>
          <h5 clas>Category</h5>
          <hr></hr>
          <div className="form-buttons container mt-4">
            <button
              className="category-btn btn btn-outline-info btn-sm"
              name="All"
              onClick={filterProducts}
            >
              All
            </button>
            <p></p>
            <button
              className="category-btn btn btn-outline-info btn-sm"
              name="Electronic"
              onClick={filterProducts}
            >
              Electronic
            </button>
            <p></p>
            <button
              className="category-btn btn btn-outline-info btn-sm"
              name="Furniture"
              onClick={filterProducts}
            >
              Furniture
            </button>
            <p></p>
            <button
              className="category-btn btn btn-outline-info btn-sm"
              name="Dining"
              onClick={filterProducts}
            >
              Dining
            </button>
            <hr></hr>
          </div>
          <div>
            <div className="form-price">
              <h5>Price</h5>
              <p className="price-display"> {filterPrice}$</p>
              <input
                onChange={filterProducts}
                type="range"
                name="price"
                id="input"
                min="0"
                max="3099"
                value={filterPrice}
              ></input>
            </div>
          </div>
          <hr></hr>
        </form>
      </div>
      <div className="card-group container">
        {filtered.map((product, index) => {
          return (
            <div key={index}>
              <div className="card shadow" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="https://dl.airtable.com/.attachmentThumbnails/65708b701baa3a84883ad48301624b44/2de058af"
                  alt="Card image cap"
                />
                <Link className="link" to={`/Detail/${product.id}`}>
                  <svg
                    stroke="currentColor"
                    fill="white"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg>
                </Link>
                <div className="card-footer">
                  <p className="card-text">{product.name}</p>
                  <p className="card-price" style={{ float: "right" }}>
                    {product.price}$
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
