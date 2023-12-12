import React from "react";
import { deleteNote, getArchivedNotes, unarchiveNote } from "../utils/local-data";
import NoteList from "../components/NoteList";

class ArchivePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            archives: getArchivedNotes(),
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onUnarchiveNoteHandler = this.onUnarchiveNoteHandler.bind(this);
    }

    onDeleteHandler(id) {
        deleteNote(id);

        this.setState(() => {
            return {
                archives: getArchivedNotes(),
            };
        });
    }

    onUnarchiveNoteHandler(id) {
        unarchiveNote(id);

        this.setState(() => {
            return {
                archives: getArchivedNotes(),
            };
        });
    }

    render() {
        const archives = this.state.archives.filter((archive) =>
            archive.title.toLowerCase().includes("")
        );

        return (
            <section>
                <div>
                    <h2 className="page-title">Daftar Arsip</h2>
                </div>
                <NoteList
                    notes={archives}
                    onUnarchive={this.onUnarchiveNoteHandler}
                    onDelete={this.onDeleteHandler}
                    emptyMessage="Tidak ada Arsip"
                />
            </section>
        );
    }
}

export default ArchivePage;
