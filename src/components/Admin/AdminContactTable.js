import React, { Component, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

class AdminContact extends React.Component {
    constructor() {
        super();


    }

    render() {
        return (
            <div className="AdminContactTable container-fluid" >

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
                            <th scope="row">1</th>
                            <td>23rd Jan</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>

                    </tbody>
                </table>

            </div>
        )
    }
}

export default AdminContact;

