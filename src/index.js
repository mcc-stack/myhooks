import React from 'react';
import ReactDOM from 'react-dom';

// var lastState;
// function useState(initialState) {
//   lastState = lastState || initialState;
//   function setState(newState) {
//     lastState = newState;
//     render();
//   }
//   return [lastState, setState];
// }

var hookStates = []; //保存状态的数组
var hookIndex = 0; //索引

function useState(initialState) {
  hookStates[hookIndex] = hookStates[hookIndex] || initialState;
  var currentIndex = hookIndex;
  function setState(newState) {
    hookStates[currentIndex] = newState;
    console.log(newState);
    console.log(hookStates);
    render();
  }
  return [hookStates[hookIndex++], setState];
}
function Index() {
  const [state, setState] = useState(0);
  const [state2, setState2] = useState(7);
  return (
    <div>
      <p> {state}</p>
      <button onClick={() => setState(state + 1)}>点我+1</button>
      <p> {state2}</p>
      <button onClick={() => setState2(state2 - 1)}>点我-1</button>
    </div>
  );
}

function render() {
  hookIndex = 0;
  ReactDOM.render(
    <>
      <Index />
    </>,
    document.getElementById('root')
  );
}
render();

// import React from 'react';
// import ReactDOM from 'react-dom';
// let hookStates = []; //保存状态的数组 [0,0]
// let hookIndex = 0; //索引
// function useState(initialState) {
//   hookStates[hookIndex] = hookStates[hookIndex] || initialState;
//   let currentIndex = hookIndex;
//   function setState(newState) {
//     if (typeof newState === 'function') {
//       newState = newState(hookStates[hookIndex]);
//     }
//     hookStates[currentIndex] = newState;
//     render();
//   }
//   return [hookStates[hookIndex++], setState];
// }
// function Counter() {
//   let [number1, setNumber1] = useState(0); //hookStates[0]=0 0
//   let [number2, setNumber2] = useState(0); //hookStates[1]=0 1
//   return (
//     <div>
//       <p>{number1}</p>
//       <button onClick={() => setNumber1(number1 + 1)}>+</button>
//       <hr />
//       <p>{number2}</p>
//       <button onClick={() => setNumber2(number2 + 1)}>+</button>
//     </div>
//   );
// }
// function render() {
//   hookIndex = 0;
//   ReactDOM.render(<Counter />, document.getElementById('root'));
// }
// render();
