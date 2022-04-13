import axios from 'axios';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
const initialState = {
    fname: "",
    lname: "",
    dob: "",
    hid: "",
    hospitals: [],
    //pid:JSON.parse(localStorage.getItem("loggedinuser")),
    parent: JSON.parse(localStorage.getItem("loggedinuser")),

    fnameErr: "",
    lnameErr: "",
}

class ChildRegisterForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = initialState;
        // this.state = {
        //     fname: "",
        //     lname: "",
        //     dob: "",
        //     hid: "",
        //     hospitals: [],
        //     //pid:JSON.parse(localStorage.getItem("loggedinuser")),
        //     parent: JSON.parse(localStorage.getItem("loggedinuser")),

        //     // child: {}
        // }

    }
    validate = () => {
        let fnameErr = "";
        let lnameErr = "";
        if (this.state.fname.trim() == 0 || this.state.fname.length < 2) {
            fnameErr = "First Name cannot be empty and should contain at least 2 characters";
        }
        if (this.state.lname.trim() == 0 || this.state.lname.length < 2) {
            lnameErr = "Last Name cannot be empty and should contain at least 2 characters";
        }
        if (fnameErr || lnameErr) {
            this.setState({ fnameErr, lnameErr });
            return false;
        }
        return true;
    }

    handleChange = (e) => {
        const nm = e.target.name;
        const val = e.target.value;
        this.setState({ [nm]: val });
    }

    componentDidMount = () => {
        axios
            .get(`http://localhost:9090/admin/getallhospital`)
            .then(res => {
                // alert(res);
                this.setState({ hospitals: res.data });
            });
    }

    submitData = (e) => {
        e.preventDefault()
        const isValid = this.validate();
        if (isValid) {
            console.log("first name  " + this.state.fname + "   last name  " + this.state.lname + "   hid : " + this.state.hid + "  dob : " + this.state.dob)
            axios
                .post(`http://localhost:9090/parent/addchild/${this.state.parent.pid}`, this.state)
                .then(response => {
                    toast("Child added successfully...")
                    this.props.history.push("/parenthome");
                })
                .catch(error => {
                    toast.warning(error)
                    this.props.history.push("/childregister");
                })
            this.setState(initialState);
        } else {
            this.props.history.push("/childregister");
        }
    }

    backtoHome = (e) => {
        this.props.history.push("/parenthome");
    }

    render() {
        return (
            <>
                <div className="container form-center" >
                    <button class="btn btn-primary col-md-1" type="button" onClick={this.backtoHome} style={{ float: "right" }} >Back</button><br />



                    <h1 className="header">Child Registration</h1><br />
                    <form method='post'>
                        <div className="form-group" class="col-md-3">
                            <label className="lb" for="fname">Enter First Name :</label>
                            <input type="text" id="fname" className="form-control" name="fname" onChange={this.handleChange} required autofocus />
                        </div>
                        <div style={{ fontSize: 16, color: "red" }}>
                            {this.state.fnameErr}
                        </div>
                        <div className="form-group" class="col-md-3">
                            <label className="lb" for="lname">Enter Last Name :</label>
                            <input type="text" id="lname" className="form-control" name="lname" onChange={this.handleChange} required />
                        </div>
                        <div style={{ fontSize: 16, color: "red" }}>
                            {this.state.lnameErr}
                        </div>

                        <div className="form-group" class="col-md-3">
                            <label className="lb" for="dob">Enter Date of Birth :</label>
                            <input type="date" id="dob" max="2016-12-31" min="2000-01-01" className="form-control" name="dob" onChange={this.handleChange} required /><br />
                        </div>

                        <div className="form-group" class="col-md-3">
                            <label className="lb" for="hid">select hospital </label>

                            <select value={this.state.hid} name="hid" onChange={this.handleChange}>
                                {this.state.hospitals.map((hospital) => (
                                    <option key={hospital.hid} value={hospital.hid} name="hid">{hospital.hname}</option>
                                ))}
                            </select>

                        </div><br />



                        <div className="form-group" class="rows">
                            <button class="btn btn-primary col-md-1" type="submit" onClick={this.submitData}>SUBMIT</button>&nbsp;&nbsp;&nbsp;
                            <button class="btn btn-primary col-md-1" type="reset">RESET</button> <br /><br />
                            {/* <-- <button  class="btn btn-primary col-md-2">ADD CHILD</button> -->*/}

                        </div>

                    </form>

                </div>
                <ToastContainer />
            </>
        )
    }

}

export default ChildRegisterForm;