import { useState } from 'react';
import './App.css';

import Expandable from './component/Expandable.jsx';

function App() {
  return (
    <div className="App">
      <h1>helkkk</h1>
      <Expandable>
        <Expandable.Header>React hooks</Expandable.Header>
        <Expandable.Icon />
        <Expandable.Body>Hooks are awesome</Expandable.Body>
      </Expandable>
    </div>
  );
}

export default App;
