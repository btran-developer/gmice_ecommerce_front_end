import React from "react";
import { connect } from "react-redux";
import CollectionFilterPanel from "../collection-filter-panel/collection-filter-panel.component";
import "./filter-group.styles.scss";

const features = [
  "Wireless",
  "Right-Handed",
  "Ambidextrous",
  "Ergonomic Design",
  "Plug and Play"
];

const priceRanges = [
  "$1 - $24.99",
  "$25 - $49.99",
  "$50 - $74.99",
  "$75 - $99.99",
  "$100 - $149.99",
  "$150 - $199.99",
  "$75 - $99.99",
  "$100 - $149.99",
  "$150 - $199.99",
  "$75 - $99.99",
  "$100 - $149.99",
  "$150 - $199.99",
  "$200 - $249.99"
];

const FilterGroup = ({ brands, tags }) => {
  const facets = [brands, tags].filter(facet => facet.data.length);

  return (
    <div className="filter-group">
      {facets.map(facet => (
        <CollectionFilterPanel label={facet.label} data={facet.data} />
      ))}
      {/* <CollectionFilterPanel label="Features" data={features} />
    <CollectionFilterPanel label="Price" data={priceRanges} /> */}
    </div>
  );
};

const mapStateToProps = state => ({
  brands: state.brands,
  tags: state.tags
});

export default connect(mapStateToProps)(FilterGroup);
