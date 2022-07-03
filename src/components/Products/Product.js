import React, { useMemo } from "react";

import ProductList from "./ProductList";
import ErrorModal from "../UI/ErrorModal";
import useHttp from "../../hooks/http";

const Product = (props) => {
  const { error, clear } = useHttp();
  const { isLoading, productData } = props;
  const productLists = useMemo(() => {
    return <ProductList products={productData} isLoading={isLoading} />;
  }, [productData, isLoading]);
  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <section>{productLists}</section>
    </div>
  );
};

export default Product;
