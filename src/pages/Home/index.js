import { useEffect, useState, useRef } from "react";
import { API_GET_DATA } from "../../global/constants";

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

async function fetchData(setData) {
    const res = await fetch(API_GET_DATA);
    const {data} = await res.json();
    console.log(data)
    setData(data)
}

async function fetchSetData(data) {
    await fetch(API_GET_DATA,{
        method: "PUT",
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify({data})
    });
}

const Home = () => {
  const [data, setData] = useState([]);
  const submittingState = useRef(false);

  useEffect(()=> {
      if(!submittingState.current){
          return
      }
    fetchSetData(data)
    .then(data => submittingState.current = false)
  },[data])

  useEffect(()=>{
    fetchData(setData);
  },[])

  return (
    <div className="app">
      <Edit add={setData} submittingState={submittingState}/>
      <List listData={data} deleteData={setData} submittingState={submittingState}/>
    </div>
  );
};

export default Home;
