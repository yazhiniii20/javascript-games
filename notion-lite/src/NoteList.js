import './Notes.css';
function NoteList({notes,deleteNote,startEdit}){
return(
<div className = "notes-grid">
    {notes.map(note => 
        <div className = "notes-list" key = {note.id}>
            <h3> {note.heading} </h3>
            <p>  {note.contents} </p>
            <p>  Last Changes on : {note.createdAt} </p>
            <div>
            <button className = "delete-btn" onClick={() => deleteNote(note.id)}>Delete</button>
            <button className = "edit-btn" onClick={() => startEdit(note)}>Edit</button>
            </div>
        </div>
    )}
</div>
);
}
export default NoteList;