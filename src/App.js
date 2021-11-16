import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';

function App() {
  return (
    <div className="App">
      
      <IdCard lastName='Doe' firstName='John' gender='male' height='178' birth='1992-07-14' picture={<img 
      src="https://randomuser.me/api/portraits/men/44.jpg" alt="person portait" />} />
      
      <IdCard lastName='Obrien' firstName='Delores' gender='female' height='172' birth='1988-05-11' picture={<img 
      src="https://randomuser.me/api/portraits/women/44.jpg" alt="person portait"/>} />

      <Greetings lang='de'>Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
    </div>
  );
}

export default App;
