import React, { useState } from "react";
import MediaQuery from "react-responsive";

import "./product-image-preview.styles.scss";

const ProductImagePreviewThumbNav = ({
  images,
  activeImage,
  changeActiveImage
}) => (
  <div className="thumbnail-list">
    {images.map(({ image_url, thumbnail_url }) => (
      <div
        key={thumbnail_url}
        className={`thumbnail-item ${
          activeImage.image_url === image_url ? "active" : ""
        }`}
        onMouseEnter={e => changeActiveImage(thumbnail_url)}
      >
        <img src={`${thumbnail_url}`} alt={thumbnail_url} />
      </div>
    ))}
  </div>
);

const ProductImagePreview = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  const changeActiveImage = thumbnail_url => {
    const nextActiveImage = images.find(
      image => image.thumbnail_url === thumbnail_url
    );
    setActiveImage(nextActiveImage);
  };

  return (
    <div className="image-preview">
      <MediaQuery minDeviceWidth={701}>
        <ProductImagePreviewThumbNav
          images={images}
          activeImage={activeImage}
          changeActiveImage={changeActiveImage}
        />
      </MediaQuery>
      {images.map(({ image_url }) => (
        <div
          key={image_url}
          className={`image-item fade ${
            activeImage.image_url === image_url ? "active" : ""
          }`}
          style={{
            backgroundImage: `url('${image_url}')`
          }}
        ></div>
      ))}
      <MediaQuery maxDeviceWidth={700}>
        <ProductImagePreviewThumbNav
          images={images}
          activeImage={activeImage}
          changeActiveImage={changeActiveImage}
        />
      </MediaQuery>
    </div>
  );
};

export default ProductImagePreview;
