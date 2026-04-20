import './Notes.css';
function NoteForm({addNote,input,setInput,title,setTitle,editId,updateNote,cancelNote}){
return(
    <div className = "input-form">
    <div className = "input-container">
    <input type="text" className="title-input" placeholder = "Heading..." value = {title} onChange={(e) => setTitle(e.target.value)}/>
    <input type="text" className="note-input" value = {input} onChange={(e) => setInput(e.target.value)}/>
    </div>
    {editId === null ?(<button className = "add-btn" onClick={()=> addNote()}>Add</button>):
    (
    <>
    <button className = "update-btn" onClick={()=>updateNote()}>Update</button>
    <button className = "cancel-btn" onClick={()=>cancelNote()}>Cancel</button>
    </>)}
    </div>

);
}
export default NoteForm;