import React from "react";
import PropTypes from "prop-types";

const NoteButton = ({ id, isArchived, onDelete, onArchive, onUnarchive, position }) => {
    return (
        <div className="btn-group" style={{ justifyContent: position }}>
            {isArchived ? (
                <button className="btn archive-btn" onClick={() => onUnarchive(id)}>
                    Catatan
                </button>
            ) : (
                <button className="btn archive-btn" onClick={() => onArchive(id)}>
                    Arsip
                </button>
            )}
            <button className="btn delete-btn" onClick={() => onDelete(id)}>
                Hapus
            </button>
        </div>
    );
};

NoteButton.propTypes = {
    id: PropTypes.string.isRequired,
    isArchived: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func,
    onUnarchive: PropTypes.func,
    position: PropTypes.string.isRequired,
};

export default NoteButton;
