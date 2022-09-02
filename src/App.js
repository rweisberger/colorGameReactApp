import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";

function App() {
  const [value, setValue] = useState(0);

  const [boxes, setBoxes] = useState([
                              {number: 1, isActive: false },
                              {number: 2, isActive: false },
                              {number: 3, isActive: false },
                              {number: 4, isActive: false },
                              {number: 5, isActive: false },
                              {number: 6, isActive: false },
                              {number: 7, isActive: false },
                              {number: 8, isActive: false },
                              {number: 9, isActive: false }
                            ]);


  const changeColor = () => {
    console.log(value);
    let selectedBox = boxes.find((box)=> box.number == value )
    selectedBox.isActive = !selectedBox.isActive;
    console.log(selectedBox);
    console.log(boxes)
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
            <div key={i} className= {element.isActive ? 'grid-box2' : 'grid-box1'}>{element.number}</div>
          ))}
        </div>
      </div> 
    </div>
  );
}

export default App;


