import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";
import EmptyItem from "./EmptyItem";

const NoteList = ({ notes }) => {
    return notes.length > 0 ? (
        <div className="note-list">
            {notes.map((note, key) => (
                <NoteItem key={key} {...note} />
            ))}
        </div>
    ) : (
        <EmptyItem label="Tidak ada catatan" />
    );
};

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
