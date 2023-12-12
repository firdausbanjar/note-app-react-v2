import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";
import EmptyItem from "./EmptyItem";

const NoteList = ({ notes, onArchive, onUnarchive, onDelete, emptyMessage }) => {
    return notes.length > 0 ? (
        <div className="note-list">
            {notes.map((note, key) => (
                <NoteItem
                    key={key}
                    note={note}
                    onArchive={onArchive}
                    onUnarchive={onUnarchive}
                    onDelete={onDelete}
                />
            ))}
        </div>
    ) : (
        <EmptyItem label={emptyMessage} />
    );
};

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onArchive: PropTypes.func,
    onUnarchive: PropTypes.func,
    onDelete: PropTypes.func.isRequired,
    emptyMessage: PropTypes.string.isRequired,
};

export default NoteList;
