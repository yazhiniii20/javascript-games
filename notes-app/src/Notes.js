import {useState} from 'react';
import './Notes.css';
function Notes(){
    const[input,setInput] = useState("");
    const[heading,setHeading] = useState("");
    const[note,setNote] = useState([]);
    function addNote(input,heading){
        if(input.trim() === ""){
            return;
        }
       const newNote = {
        id : Date.now(),
        dateCreated : new Date().toLocaleString(),
        noteheading : heading,
        contents : input
       }
       setNote([...note,newNote]);
       setHeading("");
       setInput("");
    }
    function deleteNote(id){
        setNote(note.filter(n => n.id !== id));
    }
    return(
        <div className = "notes">
          <div className="notes-input">
          <input type="text" className = "heading-input" value = {heading} placeholder = "Heading" onChange = {(e) => setHeading(e.target.value)}/><br></br>
          <input type="text" className = "note-input" value = {input} onChange = {(e) => setInput(e.target.value)}/> <br></br>
          <button className = "add-btn" onClick = {() => addNote(input,heading)}> Add </button>
          </div>
          <div className = "notes-grid">
             {note.map(n => 
             <div className ="notes-list" key={n.id}>
                <h3> {n.noteheading}</h3>
                <p className = "date"> Created on : {n.dateCreated} </p>
                <p className = "contents"> {n.contents} </p>
                <button className = "delete-btn" onClick = {() => deleteNote(n.id)}> Delete </button>
            </div>
            )}
            </div>
        </div>
    );
}
export default Notes;