import React from 'react';
import Header from './components/Header';
import Card from './objects/Card';
import Player from './objects/Player';

function App() {
    return (
      <div>
      <Header />
      <Card />
      <Player player="x" />
      </div>
    );
}

export default App;
