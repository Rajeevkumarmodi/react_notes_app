import React, { useState } from "react";
import "./notes.css";

function Creat_notes(props) {
  const [note, setNote] = useState({
    title: "",
    contant: "",
    id: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  function addNote() {
    props.onSelect(note);
    setNote({
      title: "",
      contant: "",
    });
  }

  return (
    <div className="creat_notes_fields">
      <div className="input_field">
        <input
          onChange={changeHandler}
          value={note.title}
          className="input_title"
          type="text"
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={changeHandler}
          value={note.contant}
          className="input_contant"
          name="contant"
          rows="3"
          placeholder="Write a note..."
        ></textarea>
        <h1 onClick={addNote} className="add_btn">
          +
        </h1>
      </div>
    </div>
  );
}

export default Creat_notes;
