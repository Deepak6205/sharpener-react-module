import React, { useState } from "react";
import "./style.css";
const candidates = ["Ramesh", "Suresh", "Deepak"];

const MonitorVote = () => {
  const [selectedCandidate, setSelectedCandidate] = useState("Ramesh");
  const [voterName, setVoterName] = useState("");
  const [votes, setVotes] = useState({
    Ramesh: [],
    Suresh: [],
    Deepak: [],
  });

  const handleVote = (e) => {
    e.preventDefault();
    if (!voterName.trim()) return;
    setVotes((prevVotes) => ({
      ...prevVotes,
      [selectedCandidate]: [...prevVotes[selectedCandidate], voterName.trim()],
    }));
    setVoterName("");
  };

  const handleDelete = (candidate, index) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [candidate]: prevVotes[candidate].filter((_, i) => i !== index),
    }));
  };

  const totalVotes =
    votes.Ramesh.length + votes.Suresh.length + votes.Deepak.length;

  return (
    <div className="container">
      <h1>Class Monitor Vote</h1>
      <p className="total-votes">Total Votes: {totalVotes}</p>

      <div className="vote-count">
        {candidates.map((name) => (
          <div key={name}>
            <strong>{name}:</strong> {votes[name].length} votes
          </div>
        ))}
      </div>

      <form onSubmit={handleVote} className="vote-form">
        <input
          type="text"
          placeholder="Enter your name"
          value={voterName}
          onChange={(e) => setVoterName(e.target.value)}
        />
        <select
          value={selectedCandidate}
          onChange={(e) => setSelectedCandidate(e.target.value)}
        >
          {candidates.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
        <button type="submit">Vote</button>
      </form>

      <div className="voter-lists">
        {candidates.map((candidate) => (
          <div key={candidate} className="candidate-block">
            <h3>{candidate}'s Voters:</h3>
            <ul>
              {votes[candidate].map((voter, index) => (
                <li key={index}>
                  {voter}
                  <button onClick={() => handleDelete(candidate, index)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <p><strong>Total: {votes[candidate].length}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonitorVote;
