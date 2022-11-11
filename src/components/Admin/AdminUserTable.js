import axios from "axios";
import React from "react"
import Cookie from 'js-cookie';


class AdminUser extends React.Component {
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
                        <div className="AdminUserTable container-fluid" >

                <table className="table table-striped">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Role</th>
                            <th scope="col">Username</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">23rd Jan</th>
                            <td>admin</td>
                            <td>username</td>
                            <td>Mark Otto</td>
                            <td>Otto@gmail.com</td>
                            <td>@mshfefhsdo</td>
                        </tr>
                        <tr>
                            <th scope="row">23rd Jan</th>
                            <td>admin</td>
                            <td>username</td>
                            <td>Mark Otto</td>
                            <td>Otto@gmail.com</td>
                            <td>@mshfefhsdo</td>
                        </tr>
                        <tr>
                            <th scope="row">23rd Jan</th>
                            <td>admin</td>
                            <td>username</td>
                            <td>Mark Otto</td>
                            <td>Otto@gmail.com</td>
                            <td>@mshfefhsdo</td>
                        </tr>
                        <tr>
                            <th scope="row">23rd Jan</th>
                            <td>admin</td>
                            <td>username</td>
                            <td>Mark Otto</td>
                            <td>Otto@gmail.com</td>
                            <td>@mshfefhsdo</td>
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

export default AdminUser;

