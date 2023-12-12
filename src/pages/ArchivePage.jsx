import React from "react";
import PropTypes from "prop-types";
import { deleteNote, getArchivedNotes, unarchiveNote } from "../utils/local-data";
import NoteList from "../components/NoteList";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";

class ArchivePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            archives: getArchivedNotes(),
            keyword: props.defaultKeyword || "",
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onUnarchiveNoteHandler = this.onUnarchiveNoteHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
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

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword: keyword,
            };
        });

        this.props.keywordChange(keyword);
    }

    render() {
        const archives = this.state.archives.filter((archive) =>
            archive.title.toLowerCase().includes(this.state.keyword.toLowerCase())
        );

        return (
            <section>
                <SearchBar
                    keyword={this.state.keyword}
                    onKeywordChange={this.onKeywordChangeHandler}
                />
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

const ArchivePageWrapper = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("keyword");

    const changeSearchParams = (keyword) => {
        setSearchParams({ keyword });
    };

    return <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
};

ArchivePage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func,
};

export default ArchivePageWrapper;
