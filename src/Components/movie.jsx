import React, { Component } from 'react'
import { getMovies, deleteMovie, getMovie } from './fakeMovieService'



class Movies extends Component {
    state = {
        movies: getMovies()
    }

    handleDelete = movie => {
        const n = this.state.movies.filter(a => a._id !== movie._id)
        this.setState({ movies: n })

    };
    render() {
        if (this.state.movies.length == 0) {
            return <h1>There are no movies</h1>
        }
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <button className="btn btn-danger btn-sm" onClick={() => this.handleDelete(movie)}>Delete</button>
                        </tr>

                    ))}


                </tbody>
            </table>)
    }
}

export default Movies;