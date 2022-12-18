import React, { useEffect, useState } from "react";
import {Route, Link, Routes, useParams} from 'react-router-dom';
import UserProfile from "./UserProfile";
import axios from "axios";
import { Form, Input, Button,Space, Checkbox, message, Spin } from "antd";
import {  useNavigate } from "react-router-dom";
import "./../resources/user.css";
var qs = require('qs');


  
export default function App() {
    
  const params = useParams();
  console.log(params); 
  const nm = params.username
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    
    const onFinish = async (values) => { {
      setLoading(true)
      try {
        console.log(values)
        const user =  await axios.post(`/api/user/${nm}`, params,{headers: {
          "Accept": "application/json, text/plain, /",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Authorization":"apiKey"
      }});
        localStorage.setItem("user", JSON.stringify(user.data));
        setLoading(false)
        navigate('/UserProfile')
      } catch (error) {
        message.error("No such user");
        setLoading(false)
      }
    };
    }
    // useEffect(()=>{
    //   if(localStorage.getItem('user'))
    //   {
    //     navigate('/UserProfile')
    //   }
    // })
    
  return (
    <div>
      <div className="layoutt">
       
        <div className="parent">
      {loading && <Spin size="large"/>}
        <Form layout="vertical" onFinish={onFinish} >
        <h1 style={{color:"#888888",fontSize:"20px",fontFamily:"Roboto"}}>{nm}'s Profile</h1>
        {/* <Form.Item name="username" label="Username" >
          <Input initialvalue={nm}/>
        </Form.Item> */}
        {/* <Form.Item name="password" label="Password">
          <Input type="password" />
        </Form.Item> */}

        <div className="d-flex align-items-center justify-content-between ">
          <Button type="primary" htmlType="submit" style={{margin:"auto" ,marginTop:"26%" ,padding:"5px 60px 35px 60px" ,borderRadius:"5px",fontSize:"20px",fontFamily:"Roboto" ,letterSpacing:"5px"}}>Enter</Button>
        </div>
      </Form>
      </div>
        <Routes>
 
          <Route path="/UserProfile" element={<UserProfile />} />
         
        </Routes>
      </div>
    </div>
  );
}



