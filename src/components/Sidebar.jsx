import React from "react";
import "./Sidebar.css";

const Sidebar = ({
  onAddnote,
  notes,
  onDeletenote,
  activenote,
  setactiveNote,
}) => {
  return (
    <>
      <div className="app-sidebar">
        <div className="app-sidebar-header">
          <h1>ノート</h1>
          <button onClick={onAddnote}>追加</button>
        </div>
        <div className="app-sidebar-notes">
          {notes.length === 0 ? (
            <div>ノートが存在しません</div>
          ) : (
            notes.map((note) => (
              <div
                key={note.id}
                className={`app-sidebar-note ${
                  note.id === activenote && "active"
                }`}
                onClick={() => {
                  setactiveNote(note.id);
                }}
              >
                <div className="sidebar-note-title">
                  <strong>{note.title}</strong>
                  <button onClick={() => onDeletenote(note.id)}>削除</button>
                </div>
                <p>{note.content}</p>
                <small>
                  {new Date(note.modDate).toLocaleDateString("ja-JP", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </small>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
