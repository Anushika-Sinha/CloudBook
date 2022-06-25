import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "62b59d7256c0a314dc928ca1",
      user: "62b4b1b38e680fcc22c76556",
      title: "Naruto kun is best",
      description: "All the best Naruto kun.",
      tag: "personal",
      date: "2022-06-24T11:18:10.022Z",
      __v: 0,
    },
    {
      _id: "62b5f96d7740ec858319c11d",
      user: "62b4b1b38e680fcc22c76556",
      title: "Naruto kun1",
      description: "All the best Naruto.",
      tag: "personal",
      date: "2022-06-24T17:50:37.357Z",
      __v: 0,
    },
    {
      _id: "62b59d7256c0a314dc928ca1",
      user: "62b4b1b38e680fcc22c76556",
      title: "Naruto kun is best2",
      description: "All the best Naruto kun.",
      tag: "personal",
      date: "2022-06-24T11:18:10.022Z",
      __v: 0,
    },
    {
      _id: "62b5f96d7740ec858319c11d",
      user: "62b4b1b38e680fcc22c76556",
      title: "Naruto kun2",
      description: "All the best Naruto.",
      tag: "personal",
      date: "2022-06-24T17:50:37.357Z",
      __v: 0,
    },
    {
      _id: "62b59d7256c0a314dc928ca1",
      user: "62b4b1b38e680fcc22c76556",
      title: "Naruto kun is best3",
      description: "All the best Naruto kun.",
      tag: "personal",
      date: "2022-06-24T11:18:10.022Z",
      __v: 0,
    },
    {
      _id: "62b5f96d7740ec858319c11d",
      user: "62b4b1b38e680fcc22c76556",
      title: "Naruto kun3",
      description: "All the best Naruto.",
      tag: "personal",
      date: "2022-06-24T17:50:37.357Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
