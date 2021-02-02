import React, { Component } from 'react'
import Like from './Like'


const MoviesTable = props => {
    const {
        onDelete,
        onLike,
        onSort,
        movies
    } = props
    return (
        <table className="table">
            <thead>
                <tr>
                    <th onClick={() => onSort("title")}>Title</th>
                    <th onClick={() => onSort("genre.name")}>Genre</th>
                    <th onClick={() => onSort("numberInStock")}>Stock</th>
                    <th onClick={() => onSort("dailyRentalRate")}>Rate</th>
                </tr>
            </thead>
            <tbody>
                {movies.map(movie => (
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <Like
                            liked={movie.liked}
                            onClick={() => onLike(movie)} />
                        <button className="btn btn-danger btn-sm"
                            onClick={() => onDelete(movie)}>Delete</button>
                    </tr>

                ))}


            </tbody>
        </table>
    );
}

export default MoviesTable;