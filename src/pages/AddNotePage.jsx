import React from "react";
import NoteInput from "../components/NoteInput";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";

const AddNotePage = () => {
    const navigate = useNavigate();

    const onAddNoteHandler = (note) => {
        addNote(note);
        navigate("/");
    };

    return (
        <section>
            <h2 className="page-title">Tambah Catatan</h2>
            <NoteInput addNote={onAddNoteHandler} />
        </section>
    );
};

export default AddNotePage;
