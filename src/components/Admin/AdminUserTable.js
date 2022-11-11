import axios from "axios";
import React, { Component, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

class AdminUser extends React.Component {
    constructor() {
        super();
        // axios.get()        

    }

    render() {
        return (
            <div className="AdminContactTable container-fluid" >

                <table className="table table-striped">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Role</th>
                            <th scope="col">Username</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
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

                    </tbody>
                </table>

            </div>
        )
    }
}

export default AdminUser;

