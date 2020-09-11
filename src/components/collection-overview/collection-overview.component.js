import React, { useEffect } from "react";
import { ReactiveList } from "@appbaseio/reactivesearch";
import { useSelector } from "react-redux";

import CollectionResultStats from "../collection-result-stats/collection-result-stats.component";
import CollectionItem from "../collection-item/collection-item.component";
import Spinner from "../spinner/spinner.component";

import "./collection-overview.styles.scss";

const CollectionOverview = () => {
  const lock = useSelector((state) => state.isModalOpen);

  useEffect(() => {
    if (lock) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [lock]);

  return (
    <ReactiveList
      componentId="ProductsResult"
      className="collection-overview"
      dataField={"name.raw"}
      react={{
        and: ["SearchSensor", "BrandSensor", "TagSensor", "PriceSensor"],
      }}
      size={20}
      showResultStats={true}
      pagination={true}
      URLParams={true}
      sortOptions={[
        {
          label: "Product (Alphabetical Ascending)",
          dataField: "name.keyword",
          sortBy: "asc",
        },
        {
          label: "Product (Alphabetical Descending)",
          dataField: "name.keyword",
          sortBy: "desc",
        },
        {
          label: "Brand (Alphabetical Ascending)",
          dataField: "brand.keyword",
          sortBy: "asc",
        },
        {
          label: "Brand (Alphabetical Descending)",
          dataField: "brand.keyword",
          sortBy: "desc",
        },
        { label: "Price (Low to High)", dataField: "price", sortBy: "asc" },
        { label: "Price (High to Low)", dataField: "price", sortBy: "desc" },
      ]}
      renderResultStats={(stats) => <CollectionResultStats {...stats} />}
      // renderItem={(res) => <CollectionItem key={res.name} {...res} />}
      // loader={<Spinner />}
      render={({ loading, error, data }) => {
        if (loading) {
          return <Spinner />;
        }

        return (
          <div className="collection-list">
            {data.map((item) => (
              <CollectionItem key={item.name} {...item} />
            ))}
          </div>
        );
      }}
      innerClass={{
        resultsInfo: "collection-info",
        sortOptions: "collection-sort-selector",
        resultStats: "collection-stats",
      }}
    />
  );
};

export default CollectionOverview;
