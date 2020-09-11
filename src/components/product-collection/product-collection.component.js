import React from "react";
import { SelectedFilters, DataSearch } from "@appbaseio/reactivesearch";
import { useMediaQuery } from "react-responsive";

import CollapsibleFilter from "../../components/collapsible-filter/collapsible-filter.component";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";

import "./product-collection.styles.scss";

const ProductCollection = ({ filterMetas }) => {
  const isMobileScreen = useMediaQuery({ query: "(max-device-width: 700px)" });
  const filterGroupProps = isMobileScreen
    ? {
        "uk-sticky":
          "show-on-up: true; animation: uk-animation-slide-top; bottom: #bottom"
      }
    : {};

  return (
    <>
      <div className="filter-group" {...filterGroupProps}>
        <DataSearch
          componentId="SearchSensor"
          dataField={["brand", "name"]}
          className="searchbar"
          showFilter={false}
        />
        <div className="filters">
          {filterMetas.map(filterMeta => (
            <CollapsibleFilter key={filterMeta.facetLabel} {...filterMeta} />
          ))}
        </div>
        {!isMobileScreen && <SelectedFilters />}
      </div>
      {isMobileScreen && (
        <SelectedFilters
          showClearAll={"default"}
          style={{ padding: "10px 30px" }}
        />
      )}
      <div className="main">
        <CollectionOverview />
      </div>
    </>
  );
};

export default ProductCollection;
