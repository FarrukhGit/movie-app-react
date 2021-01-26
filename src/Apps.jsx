import React, { Component } from 'react'
import App from './App';

class Apps extends Component {
    state = {
        apps: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 9 },
            { id: 4, value: 0 },
            { id: 5, value: 0 }
        ]
    };
    handleDelete = (id) => {
        this.setState({ apps: this.state.apps.pop(id) })

    }

    render() {
        return (<div>
            {this.state.apps.map(
                a => <App key={a.id} value={a.value} onDelete={this.handleDelete} selected />
            )}
        </div>);
    }
}

export default Apps;