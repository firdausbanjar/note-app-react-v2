import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/local-data";
import { showFormattedDate } from "../utils";
import NoteButton from "../components/NoteButton";

const DetailNotePage = () => {
    const { id: noteId } = useParams();
    const note = getNote(noteId);
    const navigate = useNavigate();

    const onDeleteHandler = (id) => {
        deleteNote(id);
        navigate("/");
    };

    const onArchiveNoteHandler = (id) => {
        archiveNote(id);
        navigate("/archives");
    };

    const onUnarchiveNoteHandler = (id) => {
        unarchiveNote(id);
        navigate("/");
    };

    return (
        <>
            <div className="note-detail">
                <NoteButton
                    id={noteId}
                    isArchived={note.archived}
                    onArchive={onArchiveNoteHandler}
                    onUnarchive={onUnarchiveNoteHandler}
                    onDelete={onDeleteHandler}
                    position="flex-end"
                />
                <div>
                    <h2 className="detail-title">{note.title}</h2>
                    <p className="detail-date">{showFormattedDate(note.createdAt)}</p>
                    <p className="detail-content">{note.body}</p>
                </div>
            </div>
        </>
    );
};

export default DetailNotePage;
