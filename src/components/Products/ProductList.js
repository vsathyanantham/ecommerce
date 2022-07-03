import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductList.css";

const ProductList = (props) => {
  return (
    <div className="container mydiv d-flex align-items-center justify-content-center text-center">
      {props.isLoading && (
        <div className="spinner-border text-primary" id="spinner" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {!props.isLoading && !props?.products?.length && (
        <div className="text-primary no-product"> No product found</div>
      )}
      {props?.products?.length ? (
        <div className="row">
          {props.products.map((ig) => (
            <div className="col-md-4" key={ig.id}>
              <div className="bbb_deals">
                {ig.discountPercentage ? (
                  <div className="ribbon ribbon-top-right">
                    <span>
                      {ig.discountPercentage}
                      <small className="cross">%</small>
                    </span>
                  </div>
                ) : (
                  ""
                )}
                <div className="bbb_deals_title">{ig.brand}</div>
                <div className="bbb_deals_slider_container">
                  <div className=" bbb_deals_item">
                    <div className="bbb_deals_image">
                      <img src={ig.images[0]} alt={ig.title} />
                    </div>
                    <div className="bbb_deals_content">
                      <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                        <div className="bbb_deals_item_category">
                          <a href="/">{ig.category}</a>
                        </div>
                        <div className="bbb_deals_item_price_a ml-auto">
                          <strike>${ig.price}</strike>
                        </div>
                      </div>
                      <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                        <div className="bbb_deals_item_name">{ig.title}</div>
                        <div className="bbb_deals_item_price ml-auto">
                          ${ig.price}
                        </div>
                      </div>
                      <div className="available">
                        <div className="available_line d-flex flex-row justify-content-start">
                          <div className="available_title">
                            In Stock: <span>{ig.stock}</span>
                          </div>
                          <div className="sold_stars ml-auto">
                            {" "}
                            <i className="fa fa-star"></i>{" "}
                            <span> {ig.rating}</span>{" "}
                          </div>
                        </div>
                      </div>
                      <div className="available_line d-flex flex-row justify-content-start">
                        <div className="available_title">
                          <i
                            className="fa fa-map-marker"
                            style={{ color: "#3498db" }}
                          ></i>{" "}
                          <span>{ig.brand}</span>
                        </div>
                      </div>
                      <div className="available_line d-flex flex-row justify-content-start">
                        <button
                          type="button"
                          className="btn bg-cart"
                          onClick={() => {
                            alert("Added to cart: " + ig.title);
                          }}
                        >
                          <i className="fa fa-cart-plus mr-2"></i> Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductList;
