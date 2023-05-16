import React, {useState} from "react";
import axios from "axios";
import { Link,useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function Survey02(){

    const {email} = useParams();
    const [water_supply, setwater_supply] = useState("");
    const [use, setuse] = useState("");
    const [clean, setclean] = useState("");
    const [steps, setsteps] = useState("");
    const [tested, settested] = useState("");
    const [improvements, setimprovements] = useState("");
    const [satisfied, setsatisfied] = useState("");
    
    const navigate = useNavigate();

    function sendData(e){

        e.preventDefault();
        
        const newPerson = {
            email,
            water_supply, 
            use,
            clean,
            steps,
            tested,
            improvements,
            satisfied,
        }
        console.log(newPerson)
        axios.post("http://localhost:8069/survey02/add",newPerson).then(() => {
            toast.success("Success");
            navigate(`/final/${email}`);

        }).catch((err) => {
            toast.success("UnSuccess");
        })

        setwater_supply('')
        setuse('')
        setclean('')
        setsteps('')
        settested('')
        setimprovements('')
        setsatisfied('')
}


    return (
        <div style={{background: "linear-gradient(to bottom, #ffffff, #add8e6, #378cab)",
        minHeight: "100vh",}}>
        <div className="form-style-5"> 
        <form onSubmit={sendData} >
            <div className="container"> <br/>
            <center><h1>Survey 02</h1></center>
            <br></br><br></br>
            <div></div>
           
            <div className="form-group row">
                <label htmlFor="detils" className="col-sm-2 col-form-label">Where does your household get its water supply?</label>
                <div className="col-sm-8">
                <textarea type="text" rows={10} cols={10} className="form-control"  onChange={(e)=>{
                    setwater_supply(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div cclassName="form-group row">
            <label htmlFor="hourse" className="col-sm-2 col-form-label">Is the water you use for drinking, cooking, and bathing treated in any way? </label>  
            
            <select onChange={(e)=>{
                    setuse(e.target.value);
                }} className="col-sm-1"> 
       
          <option value = "Not Select"> Select   
            </option> 
            <option value = "Yes"> Yes   
            </option> 
            <option value = "No"> No 
            </option>  
            </select>
            </div>  <br/>

            <div className="form-group row">
                <label htmlFor="detils" className="col-sm-2 col-form-label">How often do you clean and maintain your water storage containers?</label>
                <div className="col-sm-8">
                <textarea type="text" rows={10} cols={10} className="form-control"  onChange={(e)=>{
                    setclean(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div className="form-group row">
                <label htmlFor="detils" className="col-sm-2 col-form-label">What steps do you take to ensure that your water source is safe and clean?</label>
                <div className="col-sm-8">
                <textarea type="text" rows={10} cols={10} className="form-control"  onChange={(e)=>{
                    setsteps(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div cclassName="form-group row">
            <label htmlFor="hourse" className="col-sm-2 col-form-label">Have you ever tested your water for contaminants, and if so, what were the results? </label>  
            
            <select onChange={(e)=>{
                    settested(e.target.value);
                }} className="col-sm-1"> 
       
       <option value = "Not Select"> Select   
            </option> 
            <option value = "Yes"> Yes   
            </option> 
            <option value = "No"> No 
            </option>  
            </select>
            </div>  <br/>

            <div className="form-group row">
                <label htmlFor="detils" className="col-sm-2 col-form-label">What improvements would you like to see in your community's water sanitation infrastructure?</label>
                <div className="col-sm-8">
                <textarea type="text" rows={10} cols={10} className="form-control"  onChange={(e)=>{
                    setimprovements(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div cclassName="form-group row">
            <label htmlFor="hourse" className="col-sm-2 col-form-label">How satisfied are you with the overall water quality and sanitation in your area? </label>  
            
            <select onChange={(e)=>{
                    setsatisfied(e.target.value);
                }} className="col-sm-1"> 
       
       <option value = "Not Select"> Select   
            </option> 
            <option value = "poor"> poor   
            </option> 
            <option value = "Fair"> Fair 
            </option>  
            <option value = "Good"> Good   
            </option> 
            <option value = "Very good"> Very good 
            </option>
            <option value = "Excelent"> Excelent
            </option>
            </select>
            </div>  <br/>


            <center><button type="submit" className="btn btn-dark" >Next</button></center><br/>
            
            </div>
            </form><br></br>
            </div>
            </div>
    )

}