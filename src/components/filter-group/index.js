import React from "react";
import CollectionFilterPanel from "../collection-filter-panel";
import "./filter-group.styles.scss";

const features = [
  "Wireless",
  "Right-Handed",
  "Ambidextrous",
  "Ergonomic Design",
  "Plug and Play"
];

const FilterGroup = ({ data, checkedValues, handleChange }) => {
  const facets = ["Brands", "Tags"];
  console.log(checkedValues);
  return (
    <div className="filter-group">
      {facets.map(facet => (
        <CollectionFilterPanel
          key={facet}
          label={facet}
          data={data}
          checkedValues={checkedValues}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
};

export default FilterGroup;
