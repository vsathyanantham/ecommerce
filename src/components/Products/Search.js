import React, { useState, useEffect, useRef, useCallback } from "react";

import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import useHttp from "../../hooks/http";
import "./Search.css";
import Product from "../Products/Product";
import InfiniteScroll from "react-infinite-scroll-component";
import Logo from "../UI/Logo";
import Cart from "../UI/Cart";

const Search = React.memo(() => {
  // Provide search API show the cros so I used dummy product API
  //const apiUrl = 'https://www.blibli.com/backend/search/products?searchTerm=samsung&start=0&itemPerPage=24';
  const apiUrl = "https://dummyjson.com/products/search";
  const [enteredFilter, setEnteredFilter] = useState("");
  const inputRef = useRef();
  const { isLoading, data, error, sendRequest, clear } = useHttp();
  const [product, setProduct] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query = enteredFilter.length === 0 ? "" : `?q=${enteredFilter}`; //?searchTerm=samsung&start=0&itemPerPage=24
        sendRequest(apiUrl + query, "GET");
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, inputRef, sendRequest]);
  const searchCall = () => {
    const query = enteredFilter.length === 0 ? "" : `?q=${enteredFilter}`;
    sendRequest(apiUrl + query, "GET");
  };
  useEffect(() => {
    if (!isLoading && !error && data) {
      const productData = data?.products || [];
      const productArr = [...product, ...productData];

      console.log(productArr);
      console.log(data);
      if (data.total && data.total > productArr.length) {
        setHasMore(true);
        setProduct(productArr);
      } else {
        //setProduct(productArr);
        setHasMore(false);
      }
      //setProduct((prvData)=> { return [...prvData, ...productData]});
    }
  }, [isLoading]);
  return (
    <>
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <div className="header_main">
        <div className="container">
          <div className="row">
            <Logo />
            <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right align-self-center">
              <div className="header_search_form_container">
                <form
                  action="#"
                  className="header_search_form clearfix"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <input
                    type="search"
                    required="required"
                    className="header_search_input"
                    placeholder="Search for products..."
                    ref={inputRef}
                    value={enteredFilter}
                    onChange={(event) => setEnteredFilter(event.target.value)}
                  />
                  <button
                    type="submit"
                    className="header_search_button trans_300"
                    value="Submit"
                  >
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918770/search.png"
                      alt=""
                    />
                  </button>
                </form>
              </div>
            </div>
            <Cart />
          </div>
        </div>
      </div>
      <InfiniteScroll
        dataLength={product.length}
        next={searchCall}
        hasMore={hasMore}
      >
        <Card>
          <Product productData={product} isLoading={isLoading} />
        </Card>
      </InfiniteScroll>
    </>
  );
});

export default Search;
