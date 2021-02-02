import React, { Component } from 'react'
import App from './App';
class Apps extends Component {
    render() {
        return (<div>
            <button onClick={this.props.onReset} className='btn btn-danger'>Reset</button>
            {this.props.counters.map(counter =>
                <App key={counter.id}
                    onDecrement={this.props.onDecrement}
                    onReset={this.props.onReset}
                    onIncrement={this.props.onIncrement}
                    counter={counter} />)}
        </div>);
    }
}
export default Apps;