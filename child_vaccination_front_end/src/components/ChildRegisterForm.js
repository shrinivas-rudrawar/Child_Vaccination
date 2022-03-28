import axios from 'axios';
import React from 'react';



 class ChildRegisterForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            fname :"",
            lname :"",
            dob :"",
            hid:"",
            //pid:JSON.parse(localStorage.getItem("loggedinuser")),
            parent: JSON.parse(localStorage.getItem("loggedinuser")),
            child:{}
        }
        
    }

 }

 export default ChildRegisterForm;