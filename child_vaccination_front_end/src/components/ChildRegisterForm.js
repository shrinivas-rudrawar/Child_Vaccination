import axios from 'axios';
import React from 'react';



 class ChildRegisterForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            cfname :"",
            clname :"",
            dob :"",
            hid:"",
            //pid:JSON.parse(localStorage.getItem("loggedinuser")),
            parent: JSON.parse(localStorage.getItem("loggedinuser")),
            status : "PENDING",
            child:{}
        }
        
    }

 }

 export default ChildRegisterForm;