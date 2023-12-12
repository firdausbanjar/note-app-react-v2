import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import { showFormattedDate } from "../utils";

const NoteItemBody = ({ title, body, createdAt }) => {
    // const element = parse(body);
    // const element = parse("<b>TEBAL</b>");
    return (
        <div className="note-item">
            <h3 className="note-title">{title}</h3>
            <p className="note-date">{showFormattedDate(createdAt)}</p>
            <div className="note-content" dangerouslySetInnerHTML={{ __html: parse(body) }} />
        </div>
    );
};

NoteItemBody.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};

export default NoteItemBody;
