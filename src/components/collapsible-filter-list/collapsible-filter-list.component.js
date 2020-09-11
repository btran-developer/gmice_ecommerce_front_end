import React from "react";
import MediaQuery from "react-responsive";
import { MultiList, MultiRange } from "@appbaseio/reactivesearch";

import FilterModal from "../filter-modal/filter-modal.component";

import "./collapsible-filter-list.styles.scss";

const CollapsibleFilterList = ({
  isClosed,
  handleCloseOverlay,
  ...filterMetas
}) => {
  return (
    <>
      <MediaQuery minDeviceWidth={701}>
        <div className={`desktop-view ${isClosed ? "close" : ""}`}>
          <CollapsibleFilterListContent {...filterMetas} />
        </div>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={700}>
        <FilterModal show={!isClosed}>
          <div className="mobile-view">
            <CollapsibleFilterListContent {...filterMetas} />
            <div className="close-btn" onClick={handleCloseOverlay}>
              Done
            </div>
          </div>
        </FilterModal>
      </MediaQuery>
    </>
  );
};

const CollapsibleFilterListContent = ({ ...filterMetas }) => {
  const {
    facetLabel,
    sensorName,
    dataField,
    listType,
    size,
    sortBy,
    data
  } = filterMetas;

  if (listType === "multilist") {
    return (
      <MultiList
        className="collapsible-filter-list"
        componentId={sensorName}
        dataField={dataField}
        size={size}
        sortBy={sortBy}
        showSearch={false}
        showFilter={true}
        filterLabel={facetLabel}
      />
    );
  }

  if (listType === "multirange") {
    return (
      <MultiRange
        className="collapsible-filter-list"
        componentId={sensorName}
        dataField={dataField}
        data={data}
        showFilter={true}
        filterLabel={facetLabel}
      />
    );
  }

  return null;
};

export default CollapsibleFilterList;
