import React from "react";
import { archiveNote, deleteNote, getActiveNotes, getAllNotes } from "../utils/local-data";
import NoteList from "../components/NoteList";

class NotePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getActiveNotes(),
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    }

    onDeleteHandler(id) {
        deleteNote(id);

        this.setState(() => {
            return {
                notes: getActiveNotes(),
            };
        });
    }

    onArchiveNoteHandler(id) {
        archiveNote(id);

        this.setState(() => {
            return {
                notes: getActiveNotes(),
            };
        });
    }

    render() {
        const notes = this.state.notes.filter((note) => note.title.toLowerCase().includes(""));

        return (
            <section>
                <div>
                    <h2 className="page-title">Daftar Catatan</h2>
                </div>
                <NoteList
                    notes={notes}
                    onArchive={this.onArchiveNoteHandler}
                    onDelete={this.onDeleteHandler}
                    emptyMessage="Tidak ada Catatan"
                />
            </section>
        );
    }
}

const NotePageWrapper = () => {
    return <NotePage />;
};

export default NotePageWrapper;
