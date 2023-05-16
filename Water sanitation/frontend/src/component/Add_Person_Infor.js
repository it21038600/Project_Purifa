import React, {useState} from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function AddPersonInfor(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");
    const [postal_code, setPostalCode] = useState("");
    const [address, setAddress] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [occupation, setOccuption] = useState("");
    const [household_size, setHouseSIde] = useState("");
    const [any, setAny] = useState("");

    const navigate = useNavigate();

    function sendData(e){
        console.log('1')

        if (name === '') {
            toast.error("Please Enter User Name..", {
                id: 'name'
            })
        }else if (email === '') {
            toast.error("Please Enter Your Email..", {
                id: 'name'
            })
        }else if (phone_number === '') {
            toast.error("Please Enter Your Phone number..", {
                id: 'name'
            })
        }else if (province === '') {
            toast.error("Please Enter Your Provice.", {
                id: 'name'
            })
        }else if (gender === '') {
            toast.error("Please select your gender..", {
                id: 'name'
            })
        }
        
        
        else if(name !== '' && email !== '' && phone_number !== '' && province !== '' && district !== '' && gender !=='' ){

          
      
        const newPerson = {
            name, 
            email,
            phone_number,
            province,
            district,
            postal_code,
            address,
            age, 
            gender,
            occupation,
            household_size,
            any
        }
        console.log(newPerson)
        axios.post("http://localhost:8069/person/add",newPerson).then(() => {
            console.log('2')
            toast.success("Success");
            navigate(`/survey01/${email}`);
    

        }).catch((err) => {
            toast.success("UnSuccess");
        })
    } 

        navigate(`/survey01/${email}`);
    
}


    return (
        <div style={{background: "linear-gradient(to bottom, #ffffff, #add8e6, #378cab)",
        minHeight: "100vh",}}>
        <div className="form-style-5"> 
        <form onSubmit={sendData} >
            <div className="container"> <br/>
            <center><h1>Personal Information</h1></center>
            <br></br><br></br>
            <div></div>
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" placeholder="Enter your name " onChange={(e) => setName(e.target.value)} />
                </div>
            </div><br/>

           

            <div className="form-group row">
                <label htmlFor="attendace" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-8">
                <input type="email" className="form-control" placeholder="Enter ypur email " onChange={(e)=>{
                    setEmail(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div className="form-group row">
                <label htmlFor="inTime" className="col-sm-2 col-form-label">Phone Number</label>
                <div className="col-sm-8">
                <input type="number" className="form-control"  placeholder="Enter your phone number" onChange={(e)=>{
                    setPhoneNumber(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div className="form-group row">
                <label htmlFor="outTime" className="col-sm-2 col-form-label">Province</label>
                <div className="col-sm-8">
                <input type="text" className="form-control" placeholder="Enter your province" onChange={(e)=>{
                    setProvince(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div className="form-group row">
                <label htmlFor="detils" className="col-sm-2 col-form-label">District</label>
                <div className="col-sm-8">
                <input type="text" className="form-control" placeholder="Enter you district" onChange={(e)=>{
                    setDistrict(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div className="form-group row">
                <label htmlFor="detils" className="col-sm-2 col-form-label">Postal Code</label>
                <div className="col-sm-8">
                <input type="Number" className="form-control" placeholder="Enter your postal code" onChange={(e)=>{
                    setPostalCode(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div className="form-group row">
                <label htmlFor="detils" className="col-sm-2 col-form-label">Address</label>
                <div className="col-sm-8">
                <textarea type="text" rows={10} cols={10} className="form-control" placeholder="Enter your address" onChange={(e)=>{
                    setAddress(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div className="form-group row">
                <label htmlFor="detils" className="col-sm-2 col-form-label">Age</label>
                <div className="col-sm-8">
                <input type="Number" className="form-control" placeholder="Enter your age" onChange={(e)=>{
                    setAge(e.target.value);
                }}/>
                </div>
            </div><br/>

           
            <div cclassName="form-group row">
            <label htmlFor="hourse" className="col-sm-2 col-form-label">Gender </label>  
            
            <select onChange={(e)=>{
                    setGender(e.target.value);
                }} className="col-sm-1"> 
       
       <option value = "Male"> Select    
            </option> 
            <option value = "Male"> Male   
            </option> 
            <option value = "Female"> Female 
            </option>  
            </select>
            </div>  <br/>

            <div className="form-group row">
                <label htmlFor="detils" className="col-sm-2 col-form-label">Occupation</label>
                <div className="col-sm-8">
                <input type="text" className="form-control" placeholder="Enter your occupation" onChange={(e)=>{
                    setOccuption(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div className="form-group row">
                <label htmlFor="detils" className="col-sm-2 col-form-label">House Hold Size</label>
                <div className="col-sm-8">
                <input type="text" className="form-control" placeholder="Enter your house hold size" onChange={(e)=>{
                    setHouseSIde(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div className="form-group row">
                <label htmlFor="detils" className="col-sm-2 col-form-label">Any Thing else</label>
                <div className="col-sm-8">
                <textarea type="text" rows={10} cols={10} className="form-control" placeholder="Type anything in your mind" onChange={(e)=>{
                    setAny(e.target.value);
                }}/>
                </div>
            </div><br/>


            <center><button type="submit" className="btn btn-dark" >Let's go to survey 01</button></center><br/>
            
            </div>
            </form><br></br>
            </div>
            </div>
    )

}