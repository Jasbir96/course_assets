import React, { Component } from 'react'
import { getMovies } from './MovieService'
export default class MoviesPage extends Component {
    state = {
        movies: getMovies(),
        currSearchText:'',
        filtereMovies:getMovies()
    }
    deleteEntry = (id) => {
        let filtereMovies =this.state.movies.filter((movieObj) => {
                return movieObj._id != id;
            })
        this.setState({
            movies: filtereMovies
        })
    }
    setCurrentText = (e) => {
        let task = e.target.value;
// filter 

if(task=='')
{
    this.setState({filtereMovies:this.state.movies,currSearchText:''});
    return;
}

 let filteredArr = this.state.movies.filter((movieObj) => {
    let title = movieObj.title.trim().toLowerCase();
    console.log(title);
    return title.includes(task.toLowerCase());
})
        this.setState({
            filtereMovies:filteredArr,
            currSearchText:''
        })
    }
    render() {
        let filteredArr = this.state.filtereMovies
        return (
            <div className="row">
                {/* 12 part */}
                <div className="col-3">
                    hello
                </div>
                <div className="col-9">
                    <input type="search" 
                        onChange={this.setCurrentText} />
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredArr.map((movieObj) => {
                                return (<tr scope="row" key={movieObj._id}>
                                    <td>{movieObj.title} </td>
                                    <td>{movieObj.genre.name}</td>
                                    <td>{movieObj.numberInStock}</td>
                                    <td>{movieObj.dailyRentalRate}</td>
                                    <td><button type="button" className="btn btn-danger"
                                        onClick={() => {
                                            this.deleteEntry(movieObj._id);
                                        }}>Delete</button></td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}