import React, { useState } from "react";
import "./PassingThoughtsContainer.css";
//Components
import AddThoughtForm from "../components/AddThoughtForm/AddThoughtForm";
import Thought from "../components/Thought/Thought";
//Utility
import { generateId, getNewExpirationTime } from "../Utils/utilities";

export default function PassingThoughtsContainer() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: "This is a place for your passing thoughts.",
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = (thought) => {
    setThoughts((prev) => [thought, ...prev]);
  };

  const removeThought = (thoughtId) => {
    setThoughts((prev) => prev.filter((thought) => thought.id !== thoughtId));
  };

  return (
    <>
      <AddThoughtForm addThought={addThought} />
      <ul className="thoughts">
        {thoughts.map((thought) => (
          <Thought
            key={thought.id}
            thought={thought}
            removeThought={removeThought}
          />
        ))}
      </ul>
    </>
  );
}
