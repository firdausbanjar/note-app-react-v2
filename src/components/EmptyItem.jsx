import React from "react";
import PropTypes from "prop-types";

const EmptyItem = ({ label }) => {
    return (
        <div className="no-notes">
            <p>{label}</p>
        </div>
    );
};

EmptyItem.propTypes = {
    label: PropTypes.string.isRequired,
};

export default EmptyItem;
