import React, { useState } from "react";
import "./AddThoughtForm.css";
//Utility
import { generateId, getNewExpirationTime } from "../../Utils/utilities";

export default function AddThoughtForm(props) {
  const [text, setText] = useState("");

  const handleTextChange = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() !== "") {
      const thought = {
        id: generateId(),
        text: text,
        expiresAt: getNewExpirationTime(),
      };
      props.addThought(thought);
      setText("");
    }
  };
  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
