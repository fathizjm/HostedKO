import { Button, Dropdown, Menu,Image } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../resources/defaultlayout.css";
import { UserOutlined  } from "@ant-design/icons";
import logoimg from "./logo.png";


function DefaultLayout(props) {
  
  const user = JSON.parse(localStorage.getItem("sheyresume-user"));


  const navigate = useNavigate();
  const menu = (
    <Menu>
      <Menu.Item>
      <Link to="/home">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/Vcard" >Print Card</Link>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          localStorage.removeItem("sheyresume-user");
          navigate("/login");
        }}
      >
        <span>Logout</span>
      </Menu.Item>
    </Menu>
  );
  return (
        <div className="layout">
         
          <div className="header">
      
          <img  width={100} src={logoimg} alt="alt"/>
        <h1 onClick={()=>navigate('/home')} style={{cursor:'pointer'}}>Kia Ora</h1>
        
        

        <Dropdown overlay={menu} placement="bottomLeft">
          <Button icon={<UserOutlined />}>{user.username}</Button>
        </Dropdown>
      </div>
      <div className="content" style={{overflow:'scroll'}}>{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
