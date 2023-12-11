import React from "react";
import { getArchivedNotes } from "../utils/local-data";
import NoteList from "../components/NoteList";

class ArchivePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            archives: getArchivedNotes(),
        };
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
                <NoteList notes={archives} emptyMessage="Tidak ada Arsip" />
            </section>
        );
    }
}

export default ArchivePage;
