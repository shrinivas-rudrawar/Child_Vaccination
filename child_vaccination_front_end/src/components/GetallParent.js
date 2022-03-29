import React from 'react';
import axios from 'axios';
import './mainmenu.css';

class GetallParent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            parentData :[]
        }
    }
    componentDidMount = () => {
        axios
            .get(`http://localhost:9090/admin/getallparent`)
            .then(res => {
                //alert(res);
                this.setState({ parentData: res.data });
            });
    }
    backtoHome  = (e) => {
        this.props.history.push("/adminhome");
    }

    render(){
        return(
            <div>
             <button class="btn btn-primary col-md-1" type="button" onClick={this.backtoHome} style={{ float: "right" }} >Back</button><br/>
                <div><br /><br />
                    <h3 style={{ color: 'wheat' }}>All Parents</h3>


                    <table className="table table-bordered table-striped table-dark" style={{ width: "70%" }} responsive="xl">

                        <thead>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Address</th>
                            <th>Aadhar No</th>
                            <th>Creation Date</th>
                            
                        </thead>
                        
                        {this.state.parentData.map(p =>

                            <tbody>
                                <td>{p.fname}</td>
                                <td>{p.lname}</td>
                                <td>{p.email}</td>
                                <td>{p.mobile}</td>
                                <td>{p.address}</td>
                                <td>{p.adharNo}</td>
                                <td>{p.creationDate}</td>                               
                            </tbody>)
                        }
                       
                    </table>
                </div>
            </div>
        )
    }


}
export default GetallParent;