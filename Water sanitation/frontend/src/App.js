import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddPersonInfor from './component/Add_Person_Infor';
import Survey01 from './component/Survey_01';
import Survey02 from './component/Survey_02';
import Final from './component/Final';
import {Toaster} from 'react-hot-toast'
import AllDetails from './component/viewDetails';
import Survay01Details from './component/viewSurvey01';
import Survay02Details from './component/viewSurvey02';
import Header from './component/header';

function App() {
  return (
    <div className="App">
       <Toaster position="top-center" reverseOrder={true} />
      <BrowserRouter>
      <Header/>
        <Routes>
            <Route
              path="/person"
              element={<AddPersonInfor />}
            /> 
             <Route
              path="/survey01/:email"
              element={<Survey01 />}
            /> 
             <Route
              path="/survey02/:email"
              element={<Survey02 />}
            /> 
             <Route
              path="/final/:email"
              element={<Final />}
            />
            <Route
              path="/alldetails"
              element={<AllDetails />}
            /> 
            <Route
              path="/survey1/:email"
              element={<Survay01Details />}
            /> 
             <Route
              path="/survey2/:email"
              element={<Survay02Details />}
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
