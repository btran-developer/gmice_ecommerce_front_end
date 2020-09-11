import React from "react";

import "./collection-result-stats.styles.scss";

const CollectionResultStats = ({ displayedResults, numberOfResults }) => (
  <div className="collection-result-stats">{`${displayedResults} of total ${numberOfResults} items`}</div>
);

export default CollectionResultStats;
