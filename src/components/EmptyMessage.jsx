import React from "react";
import PropTypes from "prop-types";

const EmptyMessage = ({ label }) => {
    return (
        <div className="no-notes">
            <p>{label}</p>
        </div>
    );
};

EmptyMessage.propTypes = {
    label: PropTypes.string.isRequired,
};

export default EmptyMessage;
