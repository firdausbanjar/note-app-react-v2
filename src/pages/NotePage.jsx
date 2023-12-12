import React from "react";
import { archiveNote, deleteNote, getActiveNotes } from "../utils/local-data";
import NoteList from "../components/NoteList";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import SearchBar from "../components/SearchBar";

class NotePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getActiveNotes(),
            keyword: props.defaultKeyword || "",
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
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

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword: keyword,
            };
        });

        this.props.keywordChange(keyword);
    }

    render() {
        const notes = this.state.notes.filter((note) =>
            note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
        );

        return (
            <section>
                <SearchBar
                    keyword={this.state.keyword}
                    onKeywordChange={this.onKeywordChangeHandler}
                />
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
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("keyword");

    const changeSearchParams = (keyword) => {
        setSearchParams({ keyword });
    };

    return <NotePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
};

NotePage.proptypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func,
};

export default NotePageWrapper;
