import axios from "axios";
import React from "react"
import Cookie from 'js-cookie';


class AdminMovie extends React.Component {
    constructor() {
        super();
        // axios.get()        

    }
    componentDidMount(){
        axios.get("http://localhost:4000/movies/movies")
            .then((res) => {
                this.setState({ movies: (res.data) }, () => {
                    // alert(this.state.contact);
                });
            })
    }

    render() {
        return (
            
            <>
            {
                Cookie.get("role") == "admin" ?
                    (
                        <div className="AdminMovieTable container-fluid" >

                <table className="table table-striped">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">Movie Name </th>
                            <th scope="col">Rating</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Language</th>
                            <th scope="col">Censor Board Rating</th>
                            <th scope="col">Category</th>
                            <th scope="col">Platform available</th>
                            <th scope="col">In Theatres</th>
                        </tr>
                    </thead>
                    <tbody>
                        <>
                        {
                                        this.state.contact.map((m)=>{
                                            return (
                                        
                                        <tr>
                                            <th scope="row">{m.title}</th>
                                            <td>{m.ratin}</td>
                                            <td>{m.genre}</td>
                                            <td>{m.language}</td>
                                            <td>{m.censorBoardRating}</td>
                                            <td>{m.summary}</td>
                                            <td>{m.cast}</td>
                                            <td>{m.platforms}</td>
                                            <td>{m.inTheaters}</td>

                                        </tr>

                                            )
                                            })
                                        }
                                        
                        </>
                        

                    </tbody>
                </table>

            </div>
                    ) :
                    (
                        <>
                            <h1>You don't have admin access</h1>
                        </>
                    )
            }
        </>
        )
    }
}

export default AdminMovie;