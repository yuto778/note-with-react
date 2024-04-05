import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState([]);
  const [activenote, setactiveNote] = useState(false);

  const onAddnote = () => {
    const newNote = {
      id: uuid(),
      title: "新しいノート",
      content: "",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  const onDeletenote = (id) => {
    const filternotes = notes.filter((note) => note.id !== id);
    setNotes(filternotes);
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activenote);
  };

  const onUpdatenote = (updatedNote) => {
    //修正された新しいノートの配列を返す
    const updateNotearray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });

    setNotes(updateNotearray);
  };

  return (
    <>
      <div className="App">
        <Sidebar
          onAddnote={onAddnote}
          notes={notes}
          onDeletenote={onDeletenote}
          activenote={activenote}
          setactiveNote={setactiveNote}
        />
        <Main activenote={getActiveNote()} onUpdatenote={onUpdatenote} />
      </div>
    </>
  );
}

export default App;
