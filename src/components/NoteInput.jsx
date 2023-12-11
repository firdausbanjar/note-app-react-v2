import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
        };
    }

    render() {
        return (
            <form className="note-input neumorphism-flat" onSubmit={() => {}}>
                <div className="input-group">
                    <label htmlFor="title">Judul Catatan</label>
                    <input
                        className="input-title neumorphism-pressed "
                        type="text"
                        name="title"
                        id="title"
                        value={this.state.title}
                    />
                </div>
                <div className="input-group  ">
                    <label htmlFor="body">Isi Catatan</label>
                    <div
                        className="input-body neumorphism-pressed"
                        contentEditable
                    ></div>
                </div>
                <div className="input-btn">
                    <button className="btn cancel-btn" type="reset">
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

export default NoteInput;
