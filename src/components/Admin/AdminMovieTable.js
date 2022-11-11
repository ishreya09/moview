import axios from "axios";
import React from "react"
import Cookie from 'js-cookie';


class AdminMovie extends React.Component {
    constructor() {
        super();
        // axios.get()        

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
                            <th scope="col">Now Playing</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Harry Potter</th>
                            <td>9</td>
                            <td>Children/Fantasy</td>
                            <td>English</td>
                            <td>U/A</td>
                            <td>Popular</td>
                            <td>On Amazon Prime</td>
                            <td>False</td>
                        </tr>
                        <tr>
                            <th scope="row">Minions</th>
                            <td>8.2</td>
                            <td>Animation</td>
                            <td>English</td>
                            <td>U</td>
                            <td>Popular</td>
                            <td>On Netflix</td>
                            <td>False</td>
                        </tr>
                        <tr>
                            <th scope="row">KGF</th>
                            <td>8.2</td>
                            <td>Animation</td>
                            <td>English</td>
                            <td>U</td>
                            <td>Popular</td>
                            <td>On Netflix</td>
                            <td>False</td>
                        </tr>
                        <tr>
                            <th scope="row">Minions</th>
                            <td>8.2</td>
                            <td>Animation</td>
                            <td>English</td>
                            <td>U</td>
                            <td>Popular</td>
                            <td>On Netflix</td>
                            <td>False</td>
                        </tr>
                        

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