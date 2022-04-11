import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route } from 'react-router';
import Home from './Home';
import mystore from './store';
import ParentRegistrationForm from './ParentRegistrationForm';
import  ParentRegistrationForm1 from './ParentRegistrationForm1';

import Loginpage from './Loginpage';
import HospitalRegisterForm from './HospitalRegisterForm';
import HospitalRegisterForm1 from './HospitalRegisterForm1';
import ParentHome from './ParentHome';
import ChildRegisterForm from './ChildRegisterForm';
import ChildRegisterForm1 from './ChildRegisterForm1';
import Vaccinedetails from './Vaccinedetails';
import Updateparent1 from './Updateparent1';
import Logout from './Logout';

import UpdateHospital from './UpdateHospital';
import UpdateHospital1 from './UpdateHospital1';
import HospitalHome from './HospitalHome';
import AddVaccine from './AddVaccine';
import UpdateVaccine from './UpdateVaccine';




import AdminHome from './AdminHome';
import GetallParent from './GetallParent';
import GetallHospital from './GetallHospital';
import GetparentHistory from './GetparentHistory';
import GethospitalHistory from './GethospitalHistory';

import ForgotPassword from './ForgotPassword';
import Certificate from './Certificate';
import GetAllVaccines from './GetAllVaccines';


class MainMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: false
        }
    }

    render() {
        mystore.subscribe(() => { this.setState({ flag: mystore.getState().loggedin }) })
        return (

            <div className="container">
                <BrowserRouter>
                    <div className="main" style={{ display: this.state.flag ? 'none' : 'block' }}>
                        <ul className="nav" style={{ marginLeft: "20%" }}>
                            <li className="nav-items"><Link className="nav-link" to="/"><b className="b">Home</b> </Link> </li>
                            <li className="nav-items"><Link className="nav-link" to="/login"><b className="b">SignIn</b></Link></li>
                            <li className="nav-items"> <Link className="nav-link" to="/parentregister"><b className="b">Parent Register</b></Link></li>
                            <li className="nav-items"> <Link className="nav-link" to="/hospitalregister"><b className="b">Hospital Register</b></Link></li>

                        </ul>
                        <div>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/login" component={Loginpage}></Route>
                            <Route exact path="/parentregister" component={ParentRegistrationForm1}></Route>
                            <Route exact path="/hospitalregister" component={HospitalRegisterForm1}></Route>
                            <Route exact path="/childregister" component={ChildRegisterForm1}></Route>
                            <Route exact path="/vaccinedetails" component={Vaccinedetails}></Route>
                            <Route exact path="/editparentprofile" component={Updateparent1}></Route>
                            <Route exact path="/logout" component={Logout}></Route>



                            <Route exact path="/edithospital" component={UpdateHospital1}></Route>
                            <Route exact path="/updatevaccines/:vid" component={UpdateVaccine}></Route>
                            <Route exact path="/addvaccine" component={AddVaccine}></Route>
                            <Route exact path="/getallhospitalvaccine" component={GetAllVaccines}></Route>

                            


                            <Route path="/adminhome" component={AdminHome}></Route>
                            <Route path="/getallparent" component={GetallParent}></Route>
                            <Route path="/getallhospital" component={GetallHospital}></Route>
                            <Route path="/getparenthistory" component={GetparentHistory}></Route>
                            <Route path="/gethospitalhistory" component={GethospitalHistory}></Route>

                            <Route path="/forgotpassword" component={ForgotPassword}></Route>

                            <Route path="/getcertificate/:cid" component={Certificate}></Route>

                        </div>

                    </div>
                    <Route path="/parenthome" component={ParentHome}></Route>
                    <Route path="/hospitalhome" component={HospitalHome}></Route>
                    <div>

                    </div>

                </BrowserRouter>
            </div>
        )
    }

}

export default MainMenu;