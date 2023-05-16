import React, {useState} from "react";
import axios from "axios";
import { Link,useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function Survey01(){

    const {email} = useParams();
    const [source, setsource] = useState("");
    const [treated, settreated] = useState("");
    const [issues, setissues] = useState("");
    const [access, setaccess] = useState("");
    const [sewage, setsewage] = useState("");
    const [waterborne, setwaterborne] = useState("");
    const [quality, setquality] = useState("");
    const [resources, setresources] = useState("");
    const [treatment, settreatment] = useState("");

    const navigate = useNavigate();

    function sendData(e){

        e.preventDefault();
        
        const newPerson = {
            email,
            source, 
            treated,
            issues,
            access,
            sewage,
            waterborne,
            quality,
            resources,
            treatment
        }
        console.log(newPerson)
        axios.post("http://localhost:8069/survey01/add",newPerson).then(() => {
            toast.success("Success");
            navigate(`/survey02/${email}`);

        }).catch((err) => {
            toast.success("UnSuccess");
        })

        navigate('/survey02');

}


    return (
        <div style={{background: "linear-gradient(to bottom, #ffffff, #add8e6, #378cab)",
        minHeight: "100vh",}}>
        <div > 
        <form onSubmit={sendData} >
            <div className="container"> <br/>
            <center><h1>Survey 01</h1></center>
            <br></br><br></br>
            <div></div>
           
            <div cclassName="form-group row">
            <label htmlFor="hourse" className="col-sm-2 col-form-label">What is the source of your drinking water? </label>  
            
            <select onChange={(e)=>{
                    setsource(e.target.value);
                }} className="col-sm-1"> 
       
       <option value = "Not Select"> Select   
            </option> 
            <option value = "Water"> Water   
            </option> 
            <option value = "Wells"> Wells 
            </option>  
            <option value = "Springs"> Springs  
            </option>   
            <option value = "Rainwater"> Rainwater  
            </option>  
            <option value = "Harvesting"> Harvesting  
            </option>  
            <option value = "Rivers"> Rivers  
            </option>  
            <option value = "Streams"> Streams  
            </option>  
            <option value = "other"> other  
            </option>  
            
            </select>
            </div>  <br/>

            <div cclassName="form-group row">
            <label htmlFor="hourse" className="col-sm-2 col-form-label">Is your drinking water treated or filtered in any way? </label>  
            
            <select onChange={(e)=>{
                    settreated(e.target.value);
                }} className="col-sm-1"> 
       
       <option value = "Not Select"> Select   
            </option> 
            <option value = "Yes"> Yes   
            </option> 
            <option value = "No"> No 
            </option>  
            </select>
            </div>  <br/>

            <div cclassName="form-group row">
            <label htmlFor="hourse" className="col-sm-2 col-form-label">Are there any issues with the taste, odor, or color of your drinking water? </label>  
            
            <select onChange={(e)=>{
                    setissues(e.target.value);
                }} className="col-sm-1"> 
       
       <option value = "Not Select"> Select   
            </option> 
            <option value = "Yes"> Yes   
            </option> 
            <option value = "No"> No 
            </option>  
            </select>
            </div>  <br/>

            <div cclassName="form-group row">
            <label htmlFor="hourse" className="col-sm-2 col-form-label">Do you have access to clean and safe water for cooking and bathing?</label>  
            
            <select onChange={(e)=>{
                    setaccess(e.target.value);
                }} className="col-sm-1"> 
       
       <option value = "Not Select"> Select   
            </option> 
            <option value = "Yes"> Yes   
            </option> 
            <option value = "No"> No 
            </option>  
            </select>
            </div>  <br/>

            <div cclassName="form-group row">
            <label htmlFor="hourse" className="col-sm-2 col-form-label">Do you dispose of waste and sewage properly</label>  
            
            <select onChange={(e)=>{
                    setsewage(e.target.value);
                }} className="col-sm-1"> 
       
       <option value = "Not Select"> Select   
            </option> 
            <option value = "Yes"> Yes   
            </option> 
            <option value = "No"> No 
            </option>  
            </select>
            </div>  <br/>

            <div cclassName="form-group row">
            <label htmlFor="hourse" className="col-sm-2 col-form-label">Are there any waterborne diseases or health concerns related to the water in your area?</label>  
            
            <select onChange={(e)=>{
                    setwaterborne(e.target.value);
                }} className="col-sm-1"> 
       
       <option value = "Not Select"> Select   
            </option> 
            <option value = "Yes"> Yes   
            </option> 
            <option value = "No"> No 
            </option>  
            </select>
            </div>  <br/>

            <div cclassName="form-group row">
            <label htmlFor="hourse" className="col-sm-2 col-form-label">Are there any ongoing water quality monitoring programs or initiatives in your community?</label>  
            
            <select onChange={(e)=>{
                    setquality(e.target.value);
                }} className="col-sm-1"> 
       
       <option value = "Not Select"> Select   
            </option> 
            <option value = "Yes"> Yes   
            </option> 
            <option value = "No"> No 
            </option>  
            </select>
            </div>  <br/>

            <div cclassName="form-group row">
            <label htmlFor="hourse" className="col-sm-2 col-form-label">Do you have access to any resources or organizations that provide information or assistance with water sanitation?</label>  
            
            <select onChange={(e)=>{
                    setresources(e.target.value);
                }} className="col-sm-1"> 
       
       <option value = "Not Select"> Select   
            </option> 
            <option value = "Yes"> Yes   
            </option> 
            <option value = "No"> No 
            </option>  
            </select>
            </div>  <br/>

            <div cclassName="form-group row">
            <label htmlFor="hourse" className="col-sm-2 col-form-label">Are there any water treatment facilities or infrastructure in your vicinity? </label>  
            
            <select onChange={(e)=>{
                    settreatment(e.target.value);
                }} className="col-sm-1"> 
       
       <option value = "Not Select"> Select   
            </option> 
            <option value = "Yes"> Yes   
            </option> 
            <option value = "No"> No 
            </option>  
            </select>
            </div>  <br/>


            <center><button type="submit" className="btn btn-dark" >Let's go to survey 02</button></center><br/>
            
            </div>
            </form><br></br>
            </div>
            </div>
    )

}