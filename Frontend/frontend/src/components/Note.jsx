import React from "react";

function Note({ note, onDelete }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");
    return (
        <div className="note-container">
         <p className= "Note-title">{note.title}</p>
         <p className="Note-content">{note.content}</p>
         <p className="Note-date">{formattedDate}</p>
         <button className="Note-delete" onClick={() => onDelete(note.id)}>Delete</button>
        </div>
    );
}

export default Note;