import {useState,useEffect} from 'react';
import NoteForm from './NoteForm.js';
import NoteList from './NoteList.js';
function KnowledgeHub(){
 const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
 const [input,setInput] = useState("");
 const [title,setTitle] = useState("");
 const [editId,setEditId] = useState(null);
 function addNote(){
    if(input.trim() === ""){
        return;
    }
    const newNote = {
        id : Date.now(),
        heading : title,
        contents : input,
        tags : [],
        pinned : false,
        createdAt : new Date().toLocaleString(),
        updatedAt : ""
    }
    setNotes([...notes,newNote]);
    setTitle("");
    setInput("");
}
function deleteNote(id){
    setNotes(notes.filter(n => n.id !== id));
}
function startEdit(note){
    setEditId(note.id);
    setTitle(note.heading);
    setInput(note.contents);
}
function updateNote(){
    const updated = notes.map(n =>{
        if(n.id === editId){
            return {
                ...n,
                heading : title,
                contents : input,
                updatedAt : new Date().toLocaleString()
            }
        }
        return n;
    });
    setNotes(updated);
    setEditId(null);
    setTitle("");
    setInput("");
}
function cancelNote(){
    setTitle("");
    setInput("");
    setEditId(null);
}
return(
    <div>
    <h1> Personal Knowledge Hub </h1>
    <NoteForm addNote = {addNote} input = {input} setInput = {setInput} title = {title} setTitle = {setTitle}
    editId = {editId} updateNote = {updateNote} cancelNote = {cancelNote}/>
    <NoteList notes = {notes} deleteNote = {deleteNote} startEdit = {startEdit}/>
    </div>
);
}
export default KnowledgeHub;