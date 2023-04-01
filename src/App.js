import React from 'react';
import Header from './components/Header';
import Card from './objects/Card';
import Player from './objects/Player';

function App() {
    return (
      <div>
      <Header />
      <Card>
      <Player player="o" />
      <Player player="x" />
      <Player player="x" />

      <Player player="x" />
      <Player player="o" />
      <Player player="x" />

      <Player player="o" />
      <Player player="x" />
      <Player player="o" />
      </Card>
      </div>
    );
}

export default App;
