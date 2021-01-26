import './App.css';
import React, { Component } from "react";


class App extends Component {
  state = {
    count: this.props.value,
  };

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  }



  render() {
    return (<div>
      <h1>{this.state.count}</h1>
      <button className="btn btn-danger btn-sm" onClick={this.handleClick}>Increment</button>
      <button onClick={() => this.props.onDelete(this.props.id)} className="btn m-2">Delete</button>
    </div>
    )
  }
}

export default App;


