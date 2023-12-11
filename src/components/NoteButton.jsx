import React from "react";

const NoteButton = (props) => {
    return (
        <div className="btn-group" {...props}>
            <button className="btn archive-btn">Arsip</button>
            <button className="btn delete-btn">Hapus</button>
        </div>
    );
};

export default NoteButton;
