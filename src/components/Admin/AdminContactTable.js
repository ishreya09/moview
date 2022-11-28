import axios from "axios";
import React from "react"
import Cookie from 'js-cookie';

class AdminContact extends React.Component {
    constructor(){
        super();
        this.state={
            contact:[]
        }

    }
    componentDidMount(){
        axios.get("http://localhost:4000/admin/contact")
            .then((res) => {
                this.setState({ contact: (res.data) }, () => {
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
                            < div className="AdminContactTable container-fluid" >

                                <table className="table table-striped">
                                    <thead class="table-dark">
                                        <tr>
                                            <th scope="col">Date</th>
                                            <th scope="col">Username</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Message</th>
                                            <td scope="col">ID</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <>
                                        {
                                        this.state.contact.map((c)=>{
                                            return (
                                        
                                        <tr>
                                            <th scope="row">{c.date}</th>
                                            <td>{c.name}</td>
                                            <td>{c.email}</td>
                                            <td>{c.message}</td>
                                            <td>{c._id}</td>
                                        </tr>

                                            )
                                            })
                                        }
                                        
                                        </>
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

