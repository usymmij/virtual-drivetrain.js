import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      hello <br></br>
      test1
      <Spoop/>
      <setup />
    </div>
  );
}

function setup() {
  return (
    <div className="p5setup">
    <script src = "https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.js">
    createCanvas(400, 400); 
    </script>
    <h1>boo</h1>
    </div>
  );
}

class Spoop extends React.Component {
  render() {
    return <button >hello</button>
  };
}

//function draw() {
//  background(200);
//}

export default App;
