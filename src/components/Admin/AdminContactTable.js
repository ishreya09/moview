import axios from "axios";
import React from "react"
import Cookie from 'js-cookie';

class AdminContact extends React.Component {
    constructor(){
        super();

    }
    render() {
        return (
            <>
                {
                    Cookie.get("role") == "admin" ?
                        (
                            < div className="AdminContactTable container-fluid" >

                                <table className="table table-striped">
                                    <thead class="table-dark">
                                        <tr>
                                            <th scope="col">Date</th>
                                            <th scope="col">Username</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Message</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">23rd Jan</th>
                                            <td>Mark Otto</td>
                                            <td>Otto@gmail.com</td>
                                            <td>@mshfefhsdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">23rd Jan</th>
                                            <td>Mark Otto</td>
                                            <td>Otto@gmail.com</td>
                                            <td>@mshfefhsdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">23rd Jan</th>
                                            <td>Mark Otto</td>
                                            <td>Otto@gmail.com</td>
                                            <td>@mshfefhsdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">23rd Jan</th>
                                            <td>Mark Otto</td>
                                            <td>Otto@gmail.com</td>
                                            <td>@mshfefhsdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">23rd Jan</th>
                                            <td>Mark Otto</td>
                                            <td>Otto@gmail.com</td>
                                            <td>@mshfefhsdo</td>
                                        </tr>

                                    </tbody>
                                </table>

                            </div >
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

export default AdminContact;

