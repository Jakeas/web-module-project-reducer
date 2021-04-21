import React, { useReducer } from 'react';

import './App.css';

import reducer from './reducers/index'
import { initialState } from './reducers/index'
import { applyNumber, changeOperation, clearDisplay, memoryClear, memoryPlus, memoryR } from './actions/index'
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={()=> dispatch(memoryPlus())}/>
              <CalcButton value={"MR"} onClick={()=> dispatch(memoryR())}/>
              <CalcButton value={"MC"} onClick={()=> dispatch(memoryClear(0))}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={(num)=> dispatch(applyNumber(1))}/>
              <CalcButton value={2} onClick={(num)=> dispatch(applyNumber(2))}/>
              <CalcButton value={3} onClick={(num)=> dispatch(applyNumber(3))}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={(num)=> dispatch(applyNumber(4))}/>
              <CalcButton value={5} onClick={(num)=> dispatch(applyNumber(5))}/>
              <CalcButton value={6}onClick={(num)=> dispatch(applyNumber(6))}/>
            </div>

            <div className="row">
              <CalcButton value={7}onClick={(num)=> dispatch(applyNumber(7))}/>
              <CalcButton value={8} onClick={(num)=> dispatch(applyNumber(8))}/>
              <CalcButton value={9} onClick={(num)=> dispatch(applyNumber(9))}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=> dispatch(changeOperation("+"))}/>
              <CalcButton value={"*"} onClick={()=> dispatch(changeOperation("*"))}/>
              <CalcButton value={"-"} onClick={()=> dispatch(changeOperation("-"))}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={()=> dispatch(clearDisplay(0))}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
