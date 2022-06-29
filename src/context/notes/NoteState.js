import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async ()=>{
    //API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiNGIxYjM4ZTY4MGZjYzIyYzc2NTU2In0sImlhdCI6MTY1NjA1ODM1Nn0.87Gis0P98Rccq4z-x5kKU6MenBeyrIJthmbjyZnX73Q'
        }
      });
      const json = await response.json()
      console.log(json)
      setNotes(json)
  }

  // Add a Note
  const addNote = async (title, description, tag)=>{
    //API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiNGIxYjM4ZTY4MGZjYzIyYzc2NTU2In0sImlhdCI6MTY1NjA1ODM1Nn0.87Gis0P98Rccq4z-x5kKU6MenBeyrIJthmbjyZnX73Q'
        },
        body: JSON.stringify({title, description, tag})
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  }

  // Delete a Note
  const deleteNote = async (id)=>{
    //API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiNGIxYjM4ZTY4MGZjYzIyYzc2NTU2In0sImlhdCI6MTY1NjA1ODM1Nn0.87Gis0P98Rccq4z-x5kKU6MenBeyrIJthmbjyZnX73Q'
        }
      });
      const json = response.json();
      console.log(json);

    console.log("Deleted note");
    const newNotes = notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes)
  }

  // Edit a Note
  const editNote = async (id, title, description, tag)=>{
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiNGIxYjM4ZTY4MGZjYzIyYzc2NTU2In0sImlhdCI6MTY1NjA1ODM1Nn0.87Gis0P98Rccq4z-x5kKU6MenBeyrIJthmbjyZnX73Q'
        },
        body: JSON.stringify({title, description, tag})
      });
      const json = response.json();
      console.log(json);

    let newNotes = await JSON.parse(JSON.stringify(notes))
    //Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if(element._id === id){
            newNotes[index].title = title;
            newNotes[index].description = description;
            newNotes[index].tag = tag;
            break;
        }
    }
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;