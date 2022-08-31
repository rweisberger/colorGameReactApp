import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import GridBox from './component/grid';


function App() {
  const [boxNum, setBoxNum] = useState(0);
  let boxes= [1,2,3,4,5,6,7,8,9];
  const [value, setValue] = useState(0)

  const changeColor = () => {
    setBoxNum(value);
   }

  return (
    <div className="container">
      <h1>Color Game</h1>
      <div className="wrapper">
        <div>
          <input type="number" placeholder="Enter grid number" value= {value} onChange={(e)=>setValue(e.target.value)}/><br/>
          <button type="button" className="btn btn-outline-success" onClick={changeColor}>Click</button>
        </div>
        <div className='game-board'> 
        {boxes.map((box, i) => (
          <GridBox key={ i } id={i} box={ box } selectedBox= {boxNum} function={changeColor}/>
        ))}
        </div>
      </div> 
    </div>
  );
}

export default App;


        // {/* {boxes.map((box,i) => <div className={isActive ? "grid-box1" : "grid-box2"} key={i} id={boxes[i]}>{boxes[i]}</div>)} */}
