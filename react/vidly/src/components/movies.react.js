import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    state = { 
        movies: getMovies(),
     } 

     handleDelete = (movie) => {
         const movies = this.state.movies.filter( m => m._id !== movie._id);
         this.setState({ movies });
     }

    render() { 
        const { length: count } = this.state.movies;

        if ( count === 0 ) {
            return <p>No movies!</p>
        }

        return (
            <React.Fragment>
            <p>Showing {count} movies:</p>
            <table className="table table-light">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { this.state.movies.map( movie => {
                    return(
                        <tr key={movie._id}>
                            <th>{movie.title}</th>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <button 
                                    className="btn btn-primary"
                                    onClick={ () => this.handleDelete(movie) }
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
            </table>
            </React.Fragment>
        )
    }
}
 
export default Movies;