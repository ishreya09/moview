import axios from "axios";
import React from "react"
import Cookie from 'js-cookie';


class AdminUser extends React.Component {
    constructor() {
        super();
        // axios.get()        

    }
    componentDidMount(){
        axios.get("http://localhost:3000/admin/usertable")
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
                    <>
                                        {
                                        this.state.contact.map((u)=>{
                                            return (
                                        
                                        <tr>
                                            <th scope="row">{u.date}</th>
                                            <td>{u.role}</td>
                                            <td>{u.username}</td>
                                            <td>{u.message}</td>
                                            <td>{u._id}</td>
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

export default AdminUser;

