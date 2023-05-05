import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./notes";
import CreateArea from "./CreateArea";

export default function App() {
  const [noteAdd, setNoteAdd] = useState([]);

  function addNote(note) {
    setNoteAdd((prevNote) => {
      return [...prevNote, note];
    });
  }

  function deleteNote(id) {
    setNoteAdd((prevNote) => {
      return prevNote.filter((item, index) => {
        return index !== id;
        console.log(item);
      });
    });
  }
  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      {noteAdd.map((entry, index) => (
        <Note
          key={index}
          id={index}
          onDelete={deleteNote}
          title={entry.title}
          content={entry.content}
        />
      ))}
      <Footer />
    </>
  );
}
