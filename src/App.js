import Header from "./component/Header";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  // const [detail,setDetail] = useState({});
  const [data,setData] = useState([]);

  const addData = ()=>{
    if(name !== "" || email !== ""){
    setData([...data,{name,email}]);
    }
    setName("");
    setEmail("");
    // setDetail(detail);
  }

  const deleteData = (i)=>{
    let tempArr = data;
    tempArr.splice(i,1);
    setData([...tempArr]);
  }

  let handlePress = (e)=>{
    if(e.key === "Enter" && (name !== "" || email !== "")){
      addData();
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="input">
        <Stack direction="row" spacing={2}>
          <TextField
            onKeyPress={(e)=>{handlePress(e)}}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
          onKeyPress={(e)=>{handlePress(e)}}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button onClick={addData} variant="contained" color="success">
            ADD
          </Button>
        </Stack>
      </div>
      
      <div className="data">
        <div className="datatitle" style={{color:"rgb(4, 182, 114)"}}>
          <h2>Name</h2>
          <h2>Email</h2>
          <h2>Remove</h2>
        </div>
        {
        data.map((el,i)=>{
          return(
            <div key={i} className="datatitle">
            <h3>{el.name}</h3>
            <h3>{el.email}</h3>
            <Stack>
            <Button onClick={() => deleteData(i)} variant="contained" color="error"><DeleteIcon /></Button>
            </Stack>
      </div>
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
