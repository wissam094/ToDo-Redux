
import './App.css';

import React from "react";
import TodoInputs from './Components/TodoInputs';

import TodoList from './Components/TodoList';
import 'bootstrap/dist/css/bootstrap.css'
function App() {



  return (
    <div className="App m-5">
  <TodoInputs/>
  <TodoList/>

      
    </div>
  );
}






export default App;
