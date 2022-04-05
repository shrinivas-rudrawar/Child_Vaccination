import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';


export default function UpdateHospital1() {

    const [hospital, setHospital] = useState(JSON.parse(localStorage.getItem("loggedinhosp")));
    const [address, setAddress] = useState('');
    const [contactNo, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();
    const location = useLocation()
    const data = location.state


    useEffect(() => {
        setAddress(hospital.address)
        setEmail(hospital.email)
        setMobile(hospital.contactNo)

    }, [])


    function handleUpdateProfile(event) {
        event.preventDefault();

        try {
            const data = {
                address: address,
                email: email,
                contactNo: contactNo
            }
            alert(address+"        "+email+"       "+contactNo)

            axios
                .post(`http://localhost:9090/hospital/updatehospital/${hospital.hid}`, data)
                .then(response => {
                    alert("Updated  Successful!")
                    history.push("/hospitalhome");
                })

        } catch (error) {
            alert(`Couldn't Update User Profile. Please try again. Error: ${error}.`);
        }
    }
    function backtoHome (e) {
        e.preventDefault();
        history.push("/hospitalhome");
    }

    return (
        <div>
            <button class="btn btn-primary col-md-1" type="button" onClick={backtoHome} style={{ float: "right" }} >Back</button><br />
            <div className="container"><br />
                <h1 className="header2">Hospital Updation</h1>
                <form>
                    <div className="form-group" class="col-md-3">
                        <label className="lb" for="email"> EmailID :</label>
                        <input type="text" id="email" className="form-control"
                            value={email}
                            onChange={event => setEmail(event.target.value)} />
                    </div>
                    <div className="form-group" class="col-md-3">
                        <label className="lb" for="contactNo">Enter Contact No. :</label>
                        <input type="number" id="contactNo" className="form-control" name="contactNo"
                            value={contactNo}
                            onChange={event => setMobile(event.target.value)} />
                    </div>


                    <div className="form-group" class="col-md-3">
                        <label className="lb" for="address">Enter Address :</label>
                        <input type="text" id="address" className="form-control"
                            value={address} name="address"
                            onChange={event => setAddress(event.target.value)} />
                    </div>

                    <br></br>
                    <div className="form-group" class="col-md-3">
                        <button type="button" onClick={handleUpdateProfile} class="btn btn-primary col-md-5" style={{ marginLeft: "25px" }}>Update</button>
                    </div>
                </form>
            </div>

        </div>
    )

}