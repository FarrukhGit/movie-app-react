import React, { Component } from 'react'
import { getMovies } from './Components/fakeMovieService'
import { getGenres } from './Components/fakeGenreService'
import ListGroup from './Components/common/ListGroup'
import MoviesTable from './Components/common/MoviesTable'
import Pagination from './Pagination'
import { paginate } from './utils/paginate'
import _ from 'lodash'

class Movie extends Component {
    state = {
        movies: [],
        selectedGenre: [],
        currentPage: 1,
        genres: [],
        pageSize: 3,
        sortColumn: { path: 'title', order: 'asc' }
    }

    componentDidMount() {
        const genres = [{ _id: "", name: 'All Genres' }, ...getGenres()]
        this.setState({ movies: getMovies(), genres })
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

    handleSort = path => {
        const sortColumn = { ...this.state.sortColumn }
        if (sortColumn.path === path)
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        else {
            sortColumn.path = path;
            sortColumn.order = 'asc'
        }
        this.setState({ sortColumn })
    }

    handlePageChange = page => {
        this.setState({ currentPage: page })
    }

    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 })
    }
    render() {
        const {
            currentPage,
            pageSize,
            selectedGenre,
            genres,
            movies: allMovies,
            sortColumn,
        } = this.state

        if (allMovies.length == 0) {
            return <h1>There are no movies</h1>
        }

        const filtered = selectedGenre && selectedGenre._id ?
            allMovies.filter(movie =>
                movie.genre._id === selectedGenre._id) : allMovies;

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

        const movies = paginate(sorted, currentPage, pageSize)

        return (
            <div className="row">
                <div className="col-3 m-3">
                    <ListGroup
                        items={genres}
                        onItemSelect={this.handleGenreSelect}
                        selectedGenre={selectedGenre} />
                </div>
                <div className="col">
                    <div>
                        <MoviesTable
                            onDelete={this.handleDelete}
                            onLike={this.handleDelete}
                            movies={movies}
                            onSort={this.handleSort} />
                        <Pagination
                            pageSize={pageSize}
                            items={allMovies}
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