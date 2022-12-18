import { Button, Dropdown, Menu,Image } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../resources/defaultlayout.css";
import { UserOutlined  } from "@ant-design/icons";
function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("sheyresume-user"));
  const navigate = useNavigate();

  return (
        <div className="layout">
          
          <div className="header">
      
          <Image  width={100} src="/logo.png" alt="alt"/>
        <h1 onClick={()=>navigate('/UserProfile')} style={{cursor:'pointer'}}>Kia Ora</h1>
        
      </div>
      <div className="content" style={{overflow:'scroll'}}>{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
