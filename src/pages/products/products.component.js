import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { ReactiveBase } from "@appbaseio/reactivesearch";

import ProductCollection from "../../components/product-collection/product-collection.component";
import ProductDetail from "../../components/product-detail/product-detail.component";

import Routes from "../../routes";

import "./products.styles.scss";

import { filterMetas } from "./product-filter.metadata";

const ProductsPage = () => {
  const { path } = useRouteMatch();

  return (
    <ReactiveBase
      className="product-page"
      app="products"
      url="http://localhost:9200"
    >
      <Route exact path={path}>
        <ProductCollection filterMetas={filterMetas} />
      </Route>
      <Route path={`${path}${Routes.products.child.productDetail}`}>
        <ProductDetail />
      </Route>
    </ReactiveBase>
  );
};

export default ProductsPage;
