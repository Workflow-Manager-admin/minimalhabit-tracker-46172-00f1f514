import React from 'react';
import './App.css';
import TopNavBar from './TopNavBar';

// Note: Ensure no direct reference to PUBLIC_URL (should be process.env.PUBLIC_URL if used)
// No usage found here, so leaving as is

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="app">
      <TopNavBar />
      <main>
        <div className="container">
          <div className="hero">
            <div className="subtitle">AI Workflow Manager Template</div>
            <h1 className="title">streakflow_frontend</h1>
            <div className="description">
              Start building your application.
            </div>
            <button className="btn btn-large">Button</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;