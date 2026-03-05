import React, { useState } from "react";

const Notes: React.FC = () => {
  const [note, setNote] = useState<string>("");
  const [notesList, setNotesList] = useState<string[]>([]);

  const addNote = () => {
    if (note.trim() === "") return;

    setNotesList([...notesList, note]);
    setNote("");
  };
  console.log("Notes component rendered");
  console.log("Current note:", note);
  console.log("Notes list:", notesList);
  return (
    <div style={{ padding: "20px" }}>
      <h2>My Notes</h2>

      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write a note..."
        style={{ padding: "8px", width: "250px" }}
      />

      <button
        onClick={addNote}
        style={{ marginLeft: "10px", padding: "8px 12px" }}
      >
        Add
      </button>

      <ul style={{ marginTop: "20px" }}>
        {notesList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
