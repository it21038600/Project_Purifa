import React, {useState} from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function Final(){

    const navigate = useNavigate();

    function sendData(e){

        e.preventDefault();
      
        navigate('/alldetails');
}
function checkAgreement() {
    var checkbox = document.getElementById("agree-checkbox");
    if (checkbox.checked) {
      alert("Agreement is checked!");
      
      navigate('/alldetails');
    } else {
      alert("Agreement is not checked!");
    }
  }


    return (
        <div style={{background: "linear-gradient(to bottom, #ffffff, #add8e6, #378cab)",
        minHeight: "100vh",}}>
        <div className="form-style-5"> 
        <form  >
            <div className="container"> <br/>
            <center><h1> Terms and Conditions for Water Sanitation Survey</h1></center>
            <br></br><br></br>
            <div></div>
            <br/>

1. Introduction
By participating in this water sanitation survey ("Survey"), you agree to be bound by these Terms and Conditions. The purpose of this Survey is to gather information about water sanitation practices and perceptions. Your participation is voluntary and anonymous. Please read these Terms and Conditions carefully before proceeding.
<br/>
2. Eligibility
The Survey is open to individuals of legal age or with the consent of a legal guardian. By participating, you confirm that you meet the eligibility requirements.
<br/>
3. Survey Purpose and Confidentiality
The purpose of this Survey is to collect data for research and informational purposes only. Your responses will remain strictly confidential, and any information gathered will be used in an aggregated and anonymized manner. Your personal information will not be disclosed or shared with any third parties without your explicit consent.
<br/>
4. Voluntary Participation
Participation in the Survey is entirely voluntary, and you have the right to withdraw at any time without providing a reason. If you choose to withdraw, your incomplete responses will not be included in the final analysis.
<br/>
5. Accuracy and Truthfulness
By participating in the Survey, you agree to provide accurate and truthful information to the best of your knowledge. Deliberately providing false or misleading responses is strictly prohibited and may result in your exclusion from the Survey.
<br/>
6. Data Collection and Storage
The information collected during the Survey will be securely stored and protected in accordance with applicable data protection laws. All reasonable efforts will be made to ensure the confidentiality and integrity of the data collected.
<br/>
7. Intellectual Property
All intellectual property rights related to the Survey, including the questions, content, and analysis, shall remain the sole property of the survey administrators.
<br/>
8. Limitation of Liability
To the extent permitted by law, the survey administrators and any affiliated parties shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your participation in the Survey or the use of the collected data.
<br/>
9. Governing Law
These Terms and Conditions shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising from or in connection with the Survey or these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts of [Jurisdiction].
<br/>
10. Modifications and Termination
The survey administrators reserve the right to modify or terminate the Survey at any time without prior notice. In the event of any modifications or termination, reasonable efforts will be made to communicate such changes to the participants.
<br/>
By participating in the Survey, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
<br/>
<input type="checkbox" id="agree-checkbox"/>
 I agree 


Note: After gathering this information, we will collaborate with the Sri Lankan Water Department and provide you with further updates via phone or email. Thank you.



            <center> <br></br><button onClick={()=>{checkAgreement()}} type="submit" className="btn btn-dark" >Submit</button></center><br/>
            
            </div>
            </form><br></br>
            </div>
            </div>
    )

}