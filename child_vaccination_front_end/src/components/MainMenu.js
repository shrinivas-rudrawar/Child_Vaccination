import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route } from 'react-router';
import Home from './Home';
import mystore from './store';
import ParentRegistrationForm from './ParentRegistrationForm';
import Loginpage from './Loginpage';
import HospitalRegisterForm from './HospitalRegisterForm';



class MainMenu extends React.Component{
    constructor(props){
        super(props)
        this.state={
            flag: false
        }
    }

    render(){
        mystore.subscribe(()=> {this.setState({flag:mystore.getState().loggedin})})
        return(

        <div className="container">
            <BrowserRouter>
            <div className="main"style={{display:this.state.flag?'none':'block'}}>
                    <ul className="nav" style={{marginLeft:"20%"}}>
                       <li className="nav-items"><Link className="nav-link" to="/"><b className="b">Home</b> </Link> </li>
                       <li className="nav-items"><Link  className="nav-link" to="/login"><b className="b">SignIn</b></Link></li>
                       <li className="nav-items"> <Link  className="nav-link" to="/parentregister"><b className="b">Parent Register</b></Link></li>
                       <li className="nav-items"> <Link  className="nav-link" to="/hospitalregister"><b className="b">Hospital Register</b></Link></li>

                    </ul>
                    <div>
                        <Route  exact path="/" component={Home} /> 
                        <Route path="/login" component={Loginpage}></Route>
                        <Route  exact path="/parentregister" component={ParentRegistrationForm}></Route>
                        <Route path="/hospitalregister" component={HospitalRegisterForm}></Route>
                         <Route path="/parenthome" component={ParentHome}></Route> {/* revise */}
                    </div>

                </div>

            </BrowserRouter>
        </div>
        )
    }

}

export default MainMenu;