import React from "react";
import "../styles/Note.css"

function Note({ note, onDelete }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");
    return (
        <div className="note-container">
            <p className="note-title">{note.title}</p>      {/* ← Was Note-title */}
            <p className="note-content">{note.content}</p>  {/* ← Was Note-content */}
            <p className="note-date">{formattedDate}</p>    {/* ← Was Note-date */}
            <button className="delete-button" onClick={() => onDelete(note.id)}>
                Delete
            </button>                                        {/* ← Was Note-delete */}
        </div>
    );
}

export default Note;