import React from "react";
import PropTypes from "prop-types";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
        };

        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onResetEventHandler = this.onResetEventHandler.bind(this);
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    onResetEventHandler() {
        this.setState(() => {
            document.querySelector(".input-body").innerHTML = "";
            return {
                title: "",
                body: "",
            };
        });
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            };
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.innerHTML,
            };
        });
    }

    render() {
        return (
            <form className="note-input neumorphism-flat" onSubmit={this.onSubmitEventHandler}>
                <div className="input-group">
                    <label htmlFor="title">Judul Catatan</label>
                    <input
                        className="input-title neumorphism-pressed "
                        type="text"
                        value={this.state.title}
                        onChange={this.onTitleChangeEventHandler}
                    />
                </div>
                <div className="input-group  ">
                    <label htmlFor="body">Isi Catatan</label>
                    <div
                        className="input-body neumorphism-pressed"
                        contentEditable
                        onInput={this.onBodyChangeEventHandler}
                    ></div>
                </div>
                <div className="input-btn">
                    <button
                        className="btn cancel-btn"
                        type="reset"
                        onClick={this.onResetEventHandler}
                    >
                        Batal
                    </button>
                    <button className="btn submit-btn" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        );
    }
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
};

export default NoteInput;
