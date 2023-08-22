import React, { useState } from "react";
import "./App.css";
import Creat_notes from "./Componants/Notes_comp/Creat_notes";
import Note from "./Componants/Notes_comp/Note";

function App() {
  const [nodeData, setNodeData] = useState([]);

  function addNote(note) {
    setNodeData((prev) => {
      return [...prev, note];
    });

    console.log(nodeData);
  }

  function deleteFun(id) {
    // alert(id);

    setNodeData((prevData) => {
      return prevData.filter((data, index) => index != id);
    });
  }
  return (
    <>
      <div className="navigation">
        <h1 className="nav_heading">Notes App</h1>
      </div>
      <Creat_notes onSelect={addNote} />
      <div className="all_notes">
        {nodeData.map((val, index) => {
          return (
            <Note
              title={val.title}
              contant={val.contant}
              id={index}
              key={index}
              onSelect={deleteFun}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
