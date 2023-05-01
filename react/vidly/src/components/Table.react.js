import { getMovies } from '../services/fakeMovieService';
import React, { Component } from 'react';

class Table extends Component {
    state = {
        movies: getMovies(),
    }

    render() {
        return (
            <table className="table table-light">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <button>Delete</button>
            </tbody>
            </table>
        )
    }
}

export default Table;
