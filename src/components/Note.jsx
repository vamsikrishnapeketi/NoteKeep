import React from "react";

function Note(props) {
  function handleDelete(event) {
    event.preventDefault();
    props.deleteButton(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}

export default Note;
