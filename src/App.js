import React from 'react';
import './App.css';

// Space phenomena data
const spacePhenomena = [
  { id: 1, name: "Aurora Borealis", emoji: "🌌" },
  { id: 2, name: "Solar Eclipse", emoji: "🌑" },
  { id: 3, name: "Meteor Shower", emoji: "🌠" },
  { id: 4, name: "Comet", emoji: "☄️" },
  { id: 5, name: "Nebula", emoji: "🌫️" },
  { id: 6, name: "Black Hole", emoji: "⚫" },
  { id: 7, name: "Supernova", emoji: "💥" },
  { id: 8, name: "Galaxy", emoji: "🌌" }
];

// Function to get random observation status
const getRandomStatus = () => {
  const statuses = ["Visible", "Faint", "Prime for Study"];
  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
};

// Phenomenon component
const Phenomenon = ({ name, emoji, status }) => {
  return (
    <div className={`phenomenon ${status === "Prime for Study" ? "prime" : ""}`}>
      <div className="phenomenon-header">
        <span className="phenomenon-emoji">{emoji}</span>
        <h3 className="phenomenon-name">{name}</h3>
      </div>
      <p className={`status status-${status.toLowerCase().replace(/\s+/g, '-')}`}>
        Observation Status: <strong>{status}</strong>
      </p>
      {status === "Prime for Study" && (
        <div className="prime-alert">
          <p>✨ This phenomenon is prime for study! Bring your advanced equipment! ✨</p>
        </div>
      )}
    </div>
  );
};

// Main App component
function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>🌌 Space Phenomena Tracker 🌠</h1>
        <p>Track and study celestial events and phenomena</p>
      </header>
      
      <main className="phenomena-container">
        <div className="phenomena-grid">
          {spacePhenomena.map(phenomenon => (
            <Phenomenon 
              key={phenomenon.id}
              name={phenomenon.name}
              emoji={phenomenon.emoji}
              status={getRandomStatus()}
            />
          ))}
        </div>
      </main>
      
      <footer className="app-footer">
        <p>Built with React and ❤️ for space exploration</p>
      </footer>
    </div>
  );
}

export default App;