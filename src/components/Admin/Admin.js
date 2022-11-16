import React from "react"
import Cookie from 'js-cookie';


class Admin extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (

            <>
                {
                    Cookie.get("role") == "admin" ?
                        (
                            <div className="container-fluid">
                                <h1 className="text-center">Hello {Cookie.get("name")}</h1>
                                <a href="/admin/contacttable" className="Button btn btn-outline-primary">Contact Info</a>
                                <a href="/admin/usertable" className="Button btn btn-outline-primary">UserInfo</a>
                                <a href="/admin/movietable" className="Button btn btn-outline-primary">Movie Info</a>
                                <a href="/admin/addmovie" className="Button btn btn-outline-primary">Add a Movie</a>

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

export default Admin;