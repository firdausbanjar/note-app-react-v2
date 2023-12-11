import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";
import { Link } from "react-router-dom";
import NoteButton from "./NoteButton";

const NoteItem = ({ id, title, body, createdAt, archived }) => {
    return (
        <div className="neumorphism-flat item">
            <Link style={{ textDecoration: "none" }} to={`/notes/${id}`}>
                <div className="note-item">
                    <h3 className="note-title">{title}</h3>
                    <p className="note-date">{showFormattedDate(createdAt)}</p>
                    <p className="note-content">{body}</p>
                </div>
            </Link>
            <NoteButton style={{ justifyContent: "center" }} />
        </div>
    );
};

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
};

export default NoteItem;
