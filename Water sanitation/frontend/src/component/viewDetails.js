import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link } from "react-router-dom";
import { Button} from "react-bootstrap";


const AllDetails = () => {
  
  const [person, setPerson] = useState([]);

  useEffect(() => {
    function getPerson() {
      axois
        .get("http://localhost:8069/person/get")
        .then((res) => {
          console.log(res.data.payload);
          setPerson(res.data.payload);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getPerson();
  }, [person]);

  const deleteEvent = (e) =>{
    var result = window.confirm("Are you sure?");
  if(result == true){
    axois
    .delete(`http://localhost:8069/person/delete/${e._id}`).then((res)=>{
      }).catch(e =>{
          alert(e)
      })
  }else{
      e.preventDefault();
  }

}


  return (

   <div style={{ backgroundSize:"container", width:'100%'}}> <br></br> 
                <div className="col" style={{display: 'flex',justifyContent: 'flex-end'}}>
                    <Button
                        variant="primary"
                        onClick={() => {
                        window.print();
                        }}
                    >
                        Print Report
                    </Button>
        </div>
            <center>
            <h2>All Details  </h2></center><br></br>
            
            
                <div><center>

                
                    
         
                    {person
                    .map(p => ( 
                        <div class="card"style={{width:'40rem'}}>
                <div class="card-header">
                    Name - {p.name}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Email - {p.email}</li>
                    <li class="list-group-item">Phone Number - {p.phone_number}</li>
                    <li class="list-group-item">Province - {p.province}</li>
                    <li class="list-group-item">District - {p.district}</li>
                    <li class="list-group-item">Postal Code - {p.postal_code}</li>
                    <li class="list-group-item">Address - {p.address}</li>
                    <li class="list-group-item">Age - {p.age}</li>
                    <li class="list-group-item">Gender  - {p.gender}</li>
                    <li class="list-group-item">Occupation  - {p.occupation}</li>
                    <li class="list-group-item">House Hold Size- {p.household_size}</li>
                    <li class="list-group-item">Any - {p.any}</li>
                    <li class="list-group-item"><Link to={`/survey1/${p.email}`}><button>Survey 01</button></Link></li>
                    <li class="list-group-item"><Link to={`/survey2/${p.email}`}><button>Survey 02</button></Link></li>

                </ul>
                <button onClick={() => {deleteEvent(p)}}>Delete</button>
                </div>
                        ))}
                 
                    </center>
                    <br></br>
                </div>
                    
           
        </div>
  );
};
export default AllDetails;
