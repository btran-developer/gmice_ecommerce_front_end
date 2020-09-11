import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
// import { convertToUrlPath } from "../../utils";

import "./collection-item.styles.scss";

const CollectionItem = ({ images, name, brand, price, slug }) => {
  // Sort all main image to the front and grab the first one
  // this will avoid errors when there are no main images
  const ImageRoutes = images
    .sort((x, y) => (x.main === y.main ? 0 : x.main ? -1 : 1))
    .map(image => image.image_url);
  const history = useHistory();
  const { path } = useRouteMatch();

  const redirectToItemDetail = e => history.push(`${path}/${slug}`);

  return (
    <div className="collection-item">
      <div
        className="image"
        // style={{
        //   backgroundImage: `url('http://127.0.0.1:5000/${convertToUrlPath(
        //     ImageRoutes[0]
        //   )}')`
        // }}
        style={{
          backgroundImage: `url('${ImageRoutes[0]}')`
        }}
        onClick={redirectToItemDetail}
      ></div>
      <div className="collection-item-footer">
        <div className="name" onClick={redirectToItemDetail}>
          {name}
        </div>
        <div className="brand">{brand}</div>
        <div className="price">${price}</div>
      </div>
    </div>
  );
};

export default CollectionItem;
