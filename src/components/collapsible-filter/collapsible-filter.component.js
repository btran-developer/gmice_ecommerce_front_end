import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MediaQuery from "react-responsive";
import { openModal, closeModal } from "../../redux/modal/modal.actions";
import { useMediaQuery } from "react-responsive";

import CollapsibleFilterList from "../collapsible-filter-list/collapsible-filter-list.component";

import "./collapsible-filter.styles.scss";

const CollapsibleFilter = ({ ...filterMetas }) => {
  const isMobileScreen = useMediaQuery({ query: "(max-device-width: 700px)" });
  const [isClosed, setIsClosed] = useState(isMobileScreen ? true : false);
  const dispatch = useDispatch();
  const { facetLabel } = filterMetas;

  const toggleFilterDropDown = e => {
    setIsClosed(!isClosed);
  };

  const openFilterOverlay = e => {
    e.stopPropagation();
    dispatch(openModal());
    setIsClosed(false);
  };

  const closeFilterOverlay = e => {
    e.stopPropagation();
    dispatch(closeModal());
    setIsClosed(true);
  };

  return (
    <div className="collapsible-filter">
      <MediaQuery minDeviceWidth={701}>
        <div className="facet" onClick={toggleFilterDropDown}>
          <span className="facet-label">{facetLabel}</span>
          <span className="dropdown-icon">
            {isClosed ? (
              <FontAwesomeIcon icon="chevron-left" />
            ) : (
              <FontAwesomeIcon icon="chevron-down" />
            )}
          </span>
        </div>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={700}>
        <div className="facet-mobile" onClick={openFilterOverlay}>
          {facetLabel}
          &nbsp;
          <FontAwesomeIcon icon="chevron-down" size="xs" />
        </div>
      </MediaQuery>
      <CollapsibleFilterList
        isClosed={isClosed}
        handleCloseOverlay={closeFilterOverlay}
        {...filterMetas}
      />
    </div>
  );
};

export default CollapsibleFilter;
