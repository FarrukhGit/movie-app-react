import React, { Component } from "react";
class App extends Component {
  render() {
    return (<div className='row'>
      <div className="col-1"><span className={this.getBadgeClasses()}>{this.formatCount()}</span></div>
      <div className="col">
        <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-danger btn-sm">+</button>
        <button onClick={() => this.props.onDecrement(this.props.counter)} disabled={this.props.counter.value == 0 ? "disables" : ""} className="btn btn-secondary btn-sm m-2">-</button>
      </div>
    </div>
    )
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-"
    classes += this.props.counter.value === 0 ? "primary  " : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
export default App;


