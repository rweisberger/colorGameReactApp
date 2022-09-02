import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";

function App() {
  const [value, setValue] = useState(0);

  const [boxes, setBoxes] = useState([
                              {number: 1, isActive: false, color: null },
                              {number: 2, isActive: false, color: null },
                              {number: 3, isActive: false, color: null },
                              {number: 4, isActive: false, color: null },
                              {number: 5, isActive: false, color: null },
                              {number: 6, isActive: false, color: null },
                              {number: 7, isActive: false, color: null },
                              {number: 8, isActive: false, color: null },
                              {number: 9, isActive: false, color: null }
                            ]);
  function randomRGB(){ 
      var r = Math.floor(255*(Math.random()));
      var g = Math.floor(255*(Math.random()));
      var b = Math.floor(255*(Math.random()));        
      return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }

  const changeColor = () => {
    let selectedBox = boxes.find((box)=> box.number == value )
    selectedBox.isActive = !selectedBox.isActive;
    selectedBox.color = randomRGB()
    setBoxes([...boxes]);
  }

  return (
    <div className="container">
      <h1>Color Game</h1>
      <div className="wrapper">
        <div>
          <input type="number" placeholder="Enter grid number" value={value} onChange={(e)=>setValue(e.target.value)}/><br/>
          <button type="button" className="btn btn-outline-success" onClick={changeColor}>Click</button>
        </div>
        <div className='game-board'> 
          {boxes.map((element, i) => (
            // <div key={i} className= {element.isActive ? 'grid-box2' : 'grid-box1'}>{element.number}</div>
            <div key={i} className="grid-box1" style = {{background: element.isActive ? element.color : 'white'}}>{element.number}</div>

          ))}
        </div>
      </div> 
    </div>
  );
}

export default App;


