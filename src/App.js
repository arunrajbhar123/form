import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form.jsx";
import TableItem from "./components/Table/TableItem.jsx";
import data from "./components/data/db.json";
import React,{ useState,useEffect } from "react";
import { v4 } from "uuid";
import axios from "axios";
function App() {
  const [infoData, setInfoData] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8080/username`).then((res)=>{
      setInfoData(data.username) 
    })
  }, [])
  
  const handlesheet = (newdata) => {
    axios.post("http://localhost:8080/username",newdata)
  .then((res)=>[...infoData,newdata])
};

    

  const handleDelete = (newid) => {
    setInfoData(infoData.filter((el,index) => index !== newid));
  };
  const handlefilterdepartment = (item) => {
    setInfoData(infoData.filter((el) => el.department == item));
   
  };
  
  const handlesalarysort = (item) => {
    if (item == "highlow") {
     return setInfoData( (infoData.sort((a, b) => b.salary - a.salary)));
    } 
    if(item == "lowhigh"){
     return setInfoData( (infoData.sort((a, b) => a.salary - b.salary)));
    }
   
  };
  return (
    <div className="App">
      <Form handlesheet={handlesheet} />
      <TableItem
        infoData={infoData}
        handleDelete={handleDelete}
        handlefilterdepartment={handlefilterdepartment}
        handlesalarysort={handlesalarysort}
      />
    </div>
  );
}

export default App;
