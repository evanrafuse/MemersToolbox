import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch } from 'react-router-dom';
import CaseChanger from './CaseChanger/CaseChanger';
import CaseRandomizer from './CaseRandomizer/CaseRandomizer';
import LeetConverter from './LeetConverter/LeetConverter';

function App() {
  return (
    <div className="App">
      <CaseChanger/>
      <CaseRandomizer/>
      <LeetConverter/>
    </div>
  );
}

export default App;
