import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MediaQuery from "react-responsive";

import ProductDetailHeader from "../product-detail-header/product-detail-header.component";
import ProductDetailPrice from "../product-detail-price/product-detail-price.component";
import AddToCartButton from "../add-to-cart-button/add-to-cart-button.component";
import ProductDetailDescription from "../product-detail-description/product-detail-description.component";
import ProductImagePreview from "../product-image-preview/product-image-preview.component";
import ProductDetailSpecifications from "../product-detail-specifications/product-detail-specifications.component";
import ProductDetailFeatures from "../product-detail-features/product-detail-features.component";

import { fetchProduct } from "../../redux/product/product.actions";
import { addToCart } from "../../redux/cart/cart.actions";

import "./product-detail.styles.scss";

const ProductDetail = () => {
  const { productSlug } = useParams();
  const cartId = useSelector(state => state.cart.cartId);
  const products = useSelector(state => state.products);
  const product = products[productSlug];
  const dispatch = useDispatch();
  const handleFetchProduct = slug => dispatch(fetchProduct(slug));
  const handleAddToCart = productId => {
    dispatch(addToCart(cartId, productId));
  };

  useEffect(() => {
    if (!products.hasOwnProperty(productSlug)) {
      handleFetchProduct(productSlug);
    }
  }, [productSlug]);

  if (!product) {
    return null;
  }

  return (
    <div className="product-detail">
      <div className="general-section">
        <MediaQuery maxDeviceWidth={700}>
          <ProductDetailHeader
            productName={product.name}
            brand={product.brand.name}
          />
        </MediaQuery>
        <div className="image-preview">
          <ProductImagePreview images={product.images} />
        </div>
        <div className="text-info">
          <MediaQuery minDeviceWidth={701}>
            <ProductDetailHeader
              productName={product.name}
              brand={product.brand.name}
            />
          </MediaQuery>
          <ProductDetailPrice price={product.price} />
          <AddToCartButton
            inStock={product.in_stock}
            handleAddToCart={() => handleAddToCart(product.id)}
          />
          <ProductDetailDescription description={product.description} />
        </div>
      </div>
      <div className="detail-section">
        <ProductDetailSpecifications product={product} />
        <br />
        <ProductDetailFeatures features={product.features} />
      </div>
    </div>
  );
};

export default ProductDetail;
