import React from "react";
import "./Main.css";
import ReactMarkdown from "react-markdown";

const Main = ({ activenote, onUpdatenote }) => {
  const onEditnote = (key, value) => {
    onUpdatenote({
      ...activenote,
      [key]: value,
      modDate: Date.now(),
    });
  };

  if (!activenote) {
    return <div className="no-active-note">ノートが選択されていません</div>;
  }
  return (
    <>
      <div className="app-main">
        <div className="app-main-note-edit">
          <input
            id="title"
            type="text"
            value={activenote.title}
            onChange={(e) => onEditnote("title", e.target.value)}
          />
          <textarea
            id="content"
            placeholder="ノート内容を記入"
            value={activenote.content}
            onChange={(e) => onEditnote("content", e.target.value)}
          ></textarea>
        </div>
        <div className="app-main-note-preview">
          <h1 className="preview-title">{activenote.title}</h1>
          <ReactMarkdown className="markdown-preview">
            {activenote.content}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default Main;
