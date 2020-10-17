import React from 'react';
import ReactDOM from 'react-dom';

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
