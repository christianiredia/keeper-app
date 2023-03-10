import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "./notes";

function createNote(note) {
  return <Note key={note.key} title={note.title} content={note.content} />;
}

const App = () => {
  return (
    <div>
      <Header />
      <div>{notes.map(createNote)}</div>
      <Footer />
    </div>
  );
};

export default App;
