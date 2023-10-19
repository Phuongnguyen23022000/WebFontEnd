import React, { useState } from "react";
import "./ToggleStyle.css";
//stateless functional component: component nhưng không sử dụng state
// function Toggle() {
//   return <div className="toggle"></div>
// }

// // stateful functional component: component có sử dụng state
// function ToggleTwo() {
//   // eslint-disable-next-line no-unused-vars
//   const [count, setCount] = useState('1');
//   return <div className="toggle-two"></div>
// }
function Toggle() {
  // 1. enabling state
  // 2. initialize state

  // const [on, setON] = useState(false);

  // return <div className="toggle" onClick={() => setON(true)}>
  //   Toggle {on ? 'On' : 'Of'}
  // </div>


  // const [count, setCount] = useState(0);
  // return <div className="toggle">
  //   <button onClick={() => setCount(count + 1)}>Submit!!</button>
  //   <div className="count">{count}</div>
  // </div>

  const handleToggle = () => {
    setOn((on) => !on);
  }
  const [on, setOn] = useState(false);
  return <div>
    <div className={`toggle ${on ? 'active' : ''}`} onClick={handleToggle}>
      <div className={`spinner ${on ? 'active' : ''}`}>

      </div>
    </div>
    {/* {on}
    <div className="toggle-control">
      <div className="toggle-on" onClick={() => setOn(true)}>On</div>
      <div className="toggle-off" onClick={() => setOn(false)}>Off</div>
    </div> */}
  </div>
}
export default Toggle;