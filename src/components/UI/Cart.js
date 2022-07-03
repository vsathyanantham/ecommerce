import React from "react";

export default function Cart() {
  return (
    <>
      <div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
        <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
          <div className="wishlist d-flex flex-row align-items-center justify-content-end">
            <div className="wishlist_icon">
              <img
                src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918681/heart.png"
                alt=""
              />
            </div>
            <div className="wishlist_content">
              <div className="wishlist_text">
                <a href="/">Wishlist</a>
              </div>
              <div className="wishlist_count">10</div>
            </div>
          </div>
          <div className="cart">
            <div className="cart_container d-flex flex-row align-items-center justify-content-end">
              <div className="cart_icon">
                <img
                  src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918704/cart.png"
                  alt=""
                />
                <div className="cart_count">
                  <span>3</span>
                </div>
              </div>
              <div className="cart_content">
                <div className="cart_text">
                  <a href="/">Cart</a>
                </div>
                <div className="cart_price">$185</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
