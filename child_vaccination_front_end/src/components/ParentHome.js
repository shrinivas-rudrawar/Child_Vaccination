import axios from 'axios';
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';



class ParentHome extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            parent: JSON.parse(localStorage.getItem("loggedinuser")),
            childs: [],
            // vaccineprogress: [],
            // cid: ""
        }
    }

    componentDidMount = () => {
        axios
            .get(`http://localhost:9090/parent/getallchilds/${this.state.parent.pid}`)
            .then(res => {
                //alert(res);
                this.setState({ childs: res.data });
            });
    }

    handleChange = (e) => {
        const nm = e.target.name;
        const val = e.target.value;
        this.setState({ [nm]: val });
    }


    logout = (e) => {
        e.preventDefault();
        //mystore.dispatch({type:'LOGGEDOUT'});
        localStorage.removeItem("loggedinuser");
        this.props.history.push("/");
    }

    getCertificate = (e,child) => {
        e.preventDefault();
        if(child.status==="VACCINATED"){
            this.props.history.push(`/getcertificate/${child.cid}`);
        }else{
            toast("Child is not vaccinated")
            this.props.history.push(`/parenthome`);
        }
       
    }

    render() {
        return (
            <>
            <div>
                <BrowserRouter>
                    <ul className="nav" style={{ marginLeft: "20%" }}>
                        <li className="nav-items"><a className="nav-link" href="/vaccinedetails"><b className="b">Vaccine Info</b> </a> </li>
                        <li className="nav-items"><a className="nav-link" href="/childregister"><b className="b">Add child</b></a></li>
                        <li className="nav-items"> <a className="nav-link" href="/editparentprofile"><b className="b">Edit profile</b></a></li>
                        <li className="nav-items"> <a className="nav-link" href="/logout"><b className="b">Logout</b></a></li>
                    </ul>
                </BrowserRouter>
                

                <br /><br />
                <h2 style={{ color: 'gold' }}>Welcome {JSON.parse(localStorage.getItem("loggedinuser")).fname} {JSON.parse(localStorage.getItem("loggedinuser")).lname}</h2>


                <div><br /><br />
                    <h3 style={{ color: 'wheat' }}>Child List</h3>


                    <table className="table table-bordered table-striped table-dark" style={{ width: "70%" }}>
        

                        <thead>
                            <th>Child ID</th>
                            <th>CHILD FIRST NAME</th>
                            <th>CHILD LAST NAME</th>
                            <th>DOB</th>
                            <th>STATUS</th>
                            <th>Certificate</th>

                        </thead>
                        {this.state.childs.map(child =>

                            <tbody>
                                <td>{child.cid}</td>
                                <td>{child.cname}</td>
                                <td>{child.clname}</td>
                                <td>{child.dob}</td>
                                <td>{child.status}</td>
                                <td><button type="button" className="btn  btn-info  rounded-pill" style={{color :"white"}} onClick={(e) => this.getCertificate(e,child)}>Get Certificate</button></td>
                            </tbody>)
                        }
                    </table>
                </div>
                <button type="submit" class="btn btn-info col-md-2 rounded-pill" onClick={this.logout}>Sign Out</button><br />

            </div>
            <ToastContainer/>
            </>
        )
    }
}

export default ParentHome;