import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link } from "react-router-dom";
import { Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Survay02Details = () => {
  
    
    const [water_supply, setwatersupply] = useState("");
    const [use, setUse] = useState("");
    const [clean, setclean] = useState("");
    const [steps, setsteps] = useState("");
    const [tested, settested] = useState("");
    const [improvements, setimprovements] = useState("");
    const [satisfied, setsatisfied] = useState("");
 
    const navigate = useNavigate();
    
    const {email} = useParams();
    
    const getAttendance = () => {
        axois.get("http://localhost:8069/survey02/get/"+email)
        .then((res) => {
            const updateAttendnce = {
                water_supply: res.data.payload.water_supply,
                use: res.data.payload.use,
                clean: res.data.payload.clean,
                steps: res.data.payload.steps,
                tested: res.data.payload.tested,
                improvements: res.data.payload.improvements,
                satisfied: res.data.payload.satisfied
            }

            // console.log(res.data);
            setwatersupply(updateAttendnce.water_supply);
            setUse(updateAttendnce.use);
            setclean(updateAttendnce.clean);
            setsteps(updateAttendnce.steps);
            settested(updateAttendnce.tested);
            setimprovements(updateAttendnce.improvements);
            setsatisfied(updateAttendnce.satisfied);
        })
        .catch((err) => {
            alert(err.message);
        });
    }

    useEffect(() => getAttendance(), []);

  return (

   <div style={{ backgroundSize:"container", width:'100%'}}> <br></br> 
                <div className="col" style={{display: 'flex',justifyContent: 'flex-end'}}>
                   
        </div>
            <center>
            <h2>Survey 02 Details </h2></center><br></br>
            
            
                <div><center>

                Where does your household get its water supply? - {water_supply} <br/>
                Is the water you use for drinking, cooking, and bathing treated in any way? - {use} <br/>
                How often do you clean and maintain your water storage containers?  - {clean} <br/>
                What steps do you take to ensure that your water source is safe and clean?- {steps} <br/>  
                Have you ever tested your water for contaminants, and if so, what were the results? - {tested} <br/>
                What improvements would you like to see in your community's water sanitation infrastructure?- {improvements} <br/>
                How satisfied are you with the overall water quality and sanitation in your area?- {satisfied} <br/>
 
                    
                    </center>
                    <br></br>
                </div>
                    
           
        </div>
  );
};
export default Survay02Details;
