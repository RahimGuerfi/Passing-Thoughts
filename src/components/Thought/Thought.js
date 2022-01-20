import React, { useEffect } from "react";
import "./Thought.css";

export default function Thought(props) {
  const { thought, removeThought } = props;

  const handleRemove = () => removeThought(thought.id);

  useEffect(() => {
    const timeRemaining = thought.expiresAt - Date.now();

    const intervalId = setTimeout(() => {
      removeThought(thought.id);
    }, timeRemaining);
    return () => clearInterval(intervalId);
  }, [removeThought, thought]);

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemove}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}
