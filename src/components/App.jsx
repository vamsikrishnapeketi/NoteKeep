import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNote] = useState([]);

  function addnote(note) {
    setNote((prev) => {
      return [...prev, note];
    });
  }

  function deletenote(id) {
    setNote((prev) => {
      return prev.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addnote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            deleteButton={deletenote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
