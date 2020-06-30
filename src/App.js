import React from "react";

import Header from "./Header.js";
import AddTaskLogic from "./AddTaskLogic.js";
import TasksListLogic from "./TasksListLogic.js";

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Header />
          </div>
        </div>
        <div className="row" >
          <div className="col" >
            <AddTaskLogic />
          </div>
        </div>
        <div className="row" >
          <div className="col" >
            <TasksListLogic />
          </div>
        </div>
      </div>
    );
  }
}

export default App;