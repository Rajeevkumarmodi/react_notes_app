import React from "react";
import { AiFillDelete } from "react-icons/ai";

function Note(props) {
  function deleteBtn(id) {
    props.onSelect(id);
  }

  return (
    <div className="note_field">
      <h2 className="note_title">{props.title}</h2>
      <p className="note_contant">{props.contant}</p>
      <div className="deleteBtn">
        <AiFillDelete
          onClick={() => {
            deleteBtn(props.id);
          }}
        />
      </div>
    </div>
  );
}

export default Note;
