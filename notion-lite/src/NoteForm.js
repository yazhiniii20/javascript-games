import './Notes.css';
function NoteForm({addNote,input,setInput,title,setTitle,editId,updateNote,cancelNote,tagInput,setTagInput,tags,setTags,selectedTag,setSelectedTag}){
return(
    <div className = "input-form">
    <div className = "input-container">
    <input type="text" className="title-input" placeholder = "Heading..." value = {title} onChange={(e) => setTitle(e.target.value)}/>
    <input type="text" className="note-input" value = {input} onChange={(e) => setInput(e.target.value)}/>
    </div>
    <div className="tags">
    <input type="text" value = {tagInput} className = "tag-input" placeholder = "Add tag and press enter" onChange = {(e) => setTagInput(e.target.value)}
    onKeyDown={(e) => {
        if (e.key === "Enter" && tagInput&&tagInput.trim() !== "") {
          e.preventDefault();
          console.log(tagInput);
          setTags([...tags, tagInput.trim()]);
          setTagInput("");
        }
      }}/>
      {selectedTag && (
        <button onClick={() => setSelectedTag("")}> Clear Tag Filter </button> )}
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