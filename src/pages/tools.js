

import ReactDOM from "react-dom";
import React, { useState } from "react";
import List from "./List";



export default function Tools(){
    
    const [input, setInput] = useState("");
    const calcBtns = [];
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach((item) => {
      calcBtns.push(
        <button
          onClick={(e) => {
            setInput(input + e.target.value);
          }}
          value={item}
          key={item}
        >
          {" "}
          {item}
        </button>
      );
    });
  
    return (
      <div className="wrapper">
        {" "}
        <div className="show-input">{input}</div>
        <div className="digits flex">{calcBtns}</div>
        <div className="modifiers subgrid">
          {/* clear button */}
  
          <button onClick={() => setInput(input.substr(0, input.length - 1))}>
            Clear
          </button>
  
          {/* clear all */}
          <button onClick={() => setInput("")} value="">
            AC
          </button>
        </div>
        <div className="operations subgrid">
          {/* add button */}
          <button onClick={(e) => setInput(input + e.target.value)} value="+">
            +
          </button>
  
          {/* minus btn */}
          <button onClick={(e) => setInput(input + e.target.value)} value="-">
            {" "}
            -{" "}
          </button>
  
          <button onClick={(e) => setInput(input + e.target.value)} value="*">
            {" "}
            *
          </button>
  
          <button onClick={(e) => setInput(input + e.target.value)} value="/">
            {" "}
            /
          </button>
          {/* "=" btn */}
          <button
            onClick={(e) => {
              try {
                setInput(
                  String(eval(input)).length > 3 &&
                    String(eval(input)).includes(".")
                    ? String(eval(input).toFixed(4))
                    : String(eval(input))
                );
              } catch (e) {
                console.log(e);
              }
            }}
            value="="
          >
            =
          </button>
        </div>
      </div>
    );
  }
  class App extends React.Component {
    state = {
      term: "",
      items: []
    };
  
    onChangeHandler = e => {
      this.setState({
        term: e.target.value
      });
    };
  
    onFormSubmitHandler = e => {
      e.preventDefault();
      this.setState({
        term: "",
        items: [...this.state.items, this.state.term]
      });
    };
  
    onDeleteHandler = index => {
      const deleteTask = [...this.state.items];
      deleteTask.splice(index, 1);
      this.setState({
        items: deleteTask
      });
    };
    render() {
      return (
        <div className="App">
          <div className="ui search">
            <form onSubmit={this.onFormSubmitHandler}>
              <div className="ui icon input">
                <input
                  onChange={this.onChangeHandler}
                  value={this.state.term}
                  type="text"
                  className="prompt"
                  placeholder="Add Task Here..."
                />
                <button className="circular ui icon button">
                  <i onClick={this.onFormSubmitHandler} className="plus icon" />
                </button>
              </div>
            </form>
          </div>
  
          <List deleteTask={this.onDeleteHandler} items={this.state.items} />
        </div>
      );
    }
  }
  
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<Tools />, rootElement);
  



