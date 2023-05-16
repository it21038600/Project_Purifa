import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link } from "react-router-dom";
import { Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Survay01Details = () => {
  
    
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
    
    const {email} = useParams();
    
    const getAttendance = () => {
        axois.get("http://localhost:8069/survey01/get/"+email)
        .then((res) => {
            const updateAttendnce = {
                source: res.data.payload.source,
                treated: res.data.payload.treated,
                issues: res.data.payload.issues,
                access: res.data.payload.access,
                sewage: res.data.payload.sewage,
                waterborne: res.data.payload.waterborne,
                quality:res.data.payload.quality,
                resources: res.data.payload.resources,
                treatment: res.data.payload.treatment
            }

            // console.log(res.data);
            setsource(updateAttendnce.source);
            settreated(updateAttendnce.treated);
            setissues(updateAttendnce.issues);
            setaccess(updateAttendnce.access);
            setsewage(updateAttendnce.sewage);
            setwaterborne(updateAttendnce.waterborne);
            setquality(updateAttendnce.quality);
            setresources(updateAttendnce.resources);
            settreatment(updateAttendnce.treatment);
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
            <h2>Survey 01 Details </h2></center><br></br>
            
            
                <div><center>

                What is the source of your drinking water? - {source} <br/>
                Is your drinking water treated or filtered in any way? - {treated} <br/>
                Are there any issues with the taste, odor, or color of your drinking water?  - {issues} <br/>
                Do you have access to clean and safe water for cooking and bathing?- {access} <br/>  
                Do you dispose of waste and sewage properly? - {sewage} <br/>
                Are there any waterborne diseases or health concerns related to the water in your area? - {waterborne} <br/>
                Are there any ongoing water quality monitoring programs or initiatives in your community?- {quality} <br/>
                Do you have access to any resources or organizations that provide information or assistance with water sanitation?  - {resources} <br/>
                Are there any water treatment facilities or infrastructure in your vicinity? - {treatment} <br/>  
                    
                    </center>
                    <br></br>
                </div>
                    
           
        </div>
  );
};
export default Survay01Details;
