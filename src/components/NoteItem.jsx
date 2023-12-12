import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import NoteButton from "./NoteButton";
import NoteItemBody from "./NoteItemBody";

const NoteItem = ({ note, onArchive, onUnarchive, onDelete }) => {
    return (
        <div className="neumorphism-flat item">
            <Link style={{ textDecoration: "none" }} to={`/notes/${note.id}`}>
                <NoteItemBody {...note} />
            </Link>
            <NoteButton
                id={note.id}
                isArchived={note.archived}
                onDelete={onDelete}
                onArchive={onArchive}
                onUnarchive={onUnarchive}
                position="center"
            />
        </div>
    );
};

NoteItem.propTypes = {
    note: PropTypes.object.isRequired,
    onArchive: PropTypes.func,
    onUnarchive: PropTypes.func,
    onDelete: PropTypes.func.isRequired,
};

export default NoteItem;
