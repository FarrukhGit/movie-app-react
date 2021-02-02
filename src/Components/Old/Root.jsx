import React, { Component } from 'react'
import Navbar from './Navbar'
import App from './App'
import Apps from './Apps';

class Root extends Component {
    state = {
        apps: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 9 },
            { id: 4, value: 0 }
        ]
    };
    handleDelete = (id) => {
        const apps = this.state.apps.filter(i => i.id !== id)
        this.setState({ apps })
    }
    handleReset = () => {
        const apps = this.state.apps.map(a => { a.value = 0; return a })
        this.setState({ apps })
    }
    handleClick = counter => {
        const counters = [...this.state.apps]
        const index = counters.indexOf(counter)
        counters[index].value++;
        this.setState({ counters })
        console.log(counters[index])
    }
    handleDecrement = counter => {
        const counters = [...this.state.apps]
        const index = counters.indexOf(counter)
        if (counters[index].value === 0) {

        } else {
            counters[index].value--;
            this.setState({ counters })
            console.log(counters[index])
        }
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <main className="container">
                    <Apps
                        counters={this.state.apps}
                        onDecrement={this.handleDecrement}
                        onReset={this.handleReset}
                        onIncrement={this.handleClick} />
                </main>
            </React.Fragment>
        );
    }
}
export default Root;