import React from "react";
import { getActiveNotes, getAllNotes } from "../utils/local-data";
import NoteList from "../components/NoteList";

class NotePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getActiveNotes(),
        };
    }
    render() {
        const notes = this.state.notes.filter((note) => note.title.toLowerCase().includes(""));

        console.log(getAllNotes());

        return (
            <section>
                <div>
                    <h2 className="page-title">Daftar Catatan</h2>
                </div>
                <NoteList notes={notes} emptyMessage="Tidak ada Catatan" />
            </section>
        );
    }
}

const NotePageWrapper = () => {
    return <NotePage />;
};

export default NotePageWrapper;
