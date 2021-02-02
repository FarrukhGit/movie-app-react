import React, { Component } from 'react'
import Like from './Like'
import TableHeader from './TableHeader'

class MoviesTable extends Component {
    columns = [
        { path: 'title', label: 'Title' },
        { path: 'genre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rate' },
        {},
        {},
    ]
    render() {
        const {
            onDelete,
            onLike,
            movies,
            sortColumn,
            onSort
        } = this.props
        return (
            <table className="table">
                <TableHeader
                    columns={this.columns}
                    sortColumn={sortColumn}
                    onSort={onSort}
                />
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
}
export default MoviesTable;