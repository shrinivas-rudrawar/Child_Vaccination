import React from 'react';
import axios from 'axios';
import "./mainmenu.css"



class HospitalRegisterForm extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
         
            hname: "",
          email: "",
          contactNo: "",
          regNo:"",
          address: "",
          username: "",
          password: "",
          pincode:"",
          hospital:{}
        }
      }

      handleChange = (e) =>{
        const nm = e.target.name;
        const val = e.target.value;
        this.setState({[nm]:val});

      }

      submitData = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios
          .post('http://localhost:9090/hospital/hospitalregister', this.state)
          .then(response => {
            alert("Registration Successful!")
            this.props.history.push("/login");
          })
          .catch(error => {
            alert("Duplicate Username/Password")
            this.props.history.push("/hospitalregister");
          })
      }

      render(){
        return(
          <div>
            <div className="container"><br/>
              <h1 className="header2">Hospital Registration</h1>
              
              
              <form className="hospital">
                <div className="form-group">
                <label className="lb" for="hname">Enter Hospital Name :</label>
                <input type="text" id="hname" className="form-control" name="hname"onChange={this.handleChange} />
                </div>
                
                <div className="form-group" >
                    <label className="lb" for="email">Enter EmailID :</label>
                    <input type="text" id="email" className="form-control" name="email" onChange={this.handleChange} />
                    </div>
                    <div className="form-group" >
                    <label className="lb" for="contactNo">Enter Contact No. :</label>
                    <input type="number" id="contactNo" className="form-control" name="contactNo" onChange={this.handleChange} />
                    </div>

                    <div className="form-group"  >
                    <label className="lb" for="regNo">Enter Register No. :</label>
                    <input type="text" id="regNo" className="form-control" name="regNo" onChange={this.handleChange} />
                    </div>

                    <div className="form-group" >
                    <label className="lb"  for="address">Enter Address :</label>
                    <input type="text"  id="address" className="form-control" name="address" onChange={this.handleChange} />
                    </div>

                    <div className="form-group" >
                    <label className="lb" for="pincode">Enter Pincode:</label>
                    <input type="number" id="pincode" className="form-control" name="pincode" onChange={this.handleChange}/>
                    </div>

                    <div className="form-group" >
                    <label className="lb" for="username">Enter Username  :</label>
                    <input type="text" id="username" className="form-control" name="username" onChange={this.handleChange}/>
                    </div>

                <div className="form-group">
                <label className="lb" for="password"> Enter Password :</label>
                <input type="password" id="password" className="form-control" name="password"onChange={this.handleChange} /><br/>
                </div>
                <div className="form-group"class="rows">
                <button type="button"onClick={this.submitData}  class="btn btn-primary col-md-5" style={{marginLeft:"25px"}}>SUBMIT</button>  
                <button  class="btn btn-primary col-md-5" style={{marginLeft:"20px"}}>RESET</button> 
               
                </div>
            </form>
            </div>
        
        </div>
        )
    }

}

export default HospitalRegisterForm;