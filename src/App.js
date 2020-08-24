import React, { useState } from 'react';
import './App.css';
import keyboard from './keyboard-finger-map.png';
import { Affirmation, Typer } from './components';
import { getAffirmation } from './components/affirmation/helpers';

const App = () => {
  const [ affirmation, setAffirmation ] = useState(getAffirmation())
  const [ typedString, setTypedString ] = useState('')
  return (
    <div className="App">
      <header className="App-header">
        <Affirmation affirmation={affirmation} typedString={typedString}/>
        <Typer
          value={typedString}
          onChange={e => setTypedString(e.target.value)}
          onEnter={() => {
            setTypedString('')
            setAffirmation(getAffirmation())
          }}
        />
        <img src={keyboard} alt="" />
      </header>
    </div>
  );
}

export default App;
