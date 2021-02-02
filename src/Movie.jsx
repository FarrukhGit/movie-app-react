import React, { Component } from 'react'
import { getMovies, deleteMovie, getMovie } from './Components/fakeMovieService'
import { getGenres } from './Components/fakeGenreService'
import ListGroup from './Components/common/ListGroup'
import Like from './Like'
import Pagination from './Pagination'
import { paginate } from './utils/paginate';


class Movie extends Component {
    state = {
        movies: [],
        selectedGenre: [],
        currentPage: 1,
        genres: [],
        pageSize: 3,
    }

    componentDidMount() {
        this.setState({ movies: getMovies(), genres: getGenres() })
    }

    handleDelete = movie => {
        const n = this.state.movies.filter(a => a._id !== movie._id)
        this.setState({ movies: n })

    }
    handleLike = movie => {
        const movies = [...this.state.movies]
        const index = movies.indexOf(movie)
        movies[index] = { ...movies[index] }
        movies[index].liked = !movies[index].liked;
        this.setState({ movies })
        console.log(movies)
    }
    handlePageChange = page => {
        this.setState({ currentPage: page })
    }

    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre })
    }
    render() {
        const { currentPage, pageSize, selectedGenre, movies: allMovies } = this.state
        const count = this.state.movies.length;
        if (this.state.movies.length == 0) {
            return <h1>There are no movies</h1>
        }
        const filtered = selectedGenre ? allMovies.filter(movie => movie.genre._id === selectedGenre._id) : allMovies;
        const movies = paginate(filtered, currentPage, pageSize)
        return (
            <div className="row">
                <div className="col-3 m-3">
                    <ListGroup
                        items={this.state.genres}
                        onItemSelect={this.handleGenreSelect}
                        selectedGenre={this.state.selectedGenre} />

                </div>
                <div className="col">
                    <div>
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
                                {movies.map(movie => (
                                    <tr key={movie._id}>
                                        <td>{movie.title}</td>
                                        <td>{movie.genre.name}</td>
                                        <td>{movie.numberInStock}</td>
                                        <td>{movie.dailyRentalRate}</td>
                                        <Like liked={movie.liked} onClickw={() => this.handleLike(movie)} />
                                        <button className="btn btn-danger btn-sm" onClick={() => this.handleDelete(movie)}>Delete</button>
                                    </tr>

                                ))}


                            </tbody>
                        </table>
                        <Pagination
                            pageSize={pageSize}
                            items={this.state.movies}
                            itemsCount={filtered.length}
                            onPageChange={this.handlePageChange}
                            currentPage={currentPage} />
                    </div>
                </div>
            </div>
        )
    }
}
export default Movie;