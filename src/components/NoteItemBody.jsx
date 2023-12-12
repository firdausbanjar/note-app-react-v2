import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";

const NoteItemBody = ({ title, body, createdAt }) => {
    return (
        <div className="note-item">
            <h3 className="note-title">{title}</h3>
            <p className="note-date">{showFormattedDate(createdAt)}</p>
            <p className="note-content">{body}</p>
        </div>
    );
};

NoteItemBody.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};

export default NoteItemBody;
