import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="elevator_frame">
        <div className="elevator_door left"></div>
        <div className="elevator_door right"></div>
      </div>
      <div className="stage stage_first"></div>
      <div className="stage stage_second"></div>
      <div className="stage stage_third"></div>
      <div className="stage stage_fourth"></div>
      <div className="stage stage_fifth"></div>
    </div>
  );
}

export default App;
