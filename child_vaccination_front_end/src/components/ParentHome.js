import axios from 'axios';
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

 class ParentHome extends React.Component {

    // "pid": 1,
    // "fname": "shri",
    // "lname": "rudrawar",
    // "email": "shri@gmail.com",
    // "mobile": 7841892752,
    // "address": "nanded",
    // "adharNo": 803435099394,
    // "pChilds": [
    //     {
    //         "cid": 1,
    //         "cname": "shreyas",
    //         "clname": "shinde",
    //         "dob": "2003-06-22",
    //         "status": "VACCINATED"
    //     }
    // ],
    constructor(props) {
        super(props)
        this.state = {
            parent: JSON.parse(localStorage.getItem("loggedinuser")),
            childs: []
            // vaccineprogress: [],
            // cid: ""
        }
    }

    render() {
        return (
            
            <div>
                <BrowserRouter>
                <ul className="nav" style={{marginLeft:"20%"}}>
                       <li className="nav-items"><Link className="nav-link" to="/vaccinedetails"><b className="b">Vaccine Info</b> </Link> </li>
                       <li className="nav-items"><Link  className="nav-link" to="/addchild"><b className="b">Add child</b></Link></li>
                       <li className="nav-items"> <Link  className="nav-link" to="/editparentprofile"><b className="b">Edit profile</b></Link></li>
                       <li className="nav-items"> <Link  className="nav-link" to="/logout"><b className="b">Logout</b></Link></li>

                </ul>
                </BrowserRouter>
                   
            </div>
            // console.log(this.state.parent.pChilds)
          
            
        )

    }

}

export default ParentHome;