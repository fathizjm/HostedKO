import React from 'react'
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";
// import "./../resources/doc.css";



function Documents() {
    const user = JSON.parse(localStorage.getItem("sheyresume-user"));
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
  
    const imagesListRef = ref(storage, `images/${user.username}`);
    const uploadFile = () => {
      if (imageUpload == null) return;
      const imageRef = ref(storage, `images/${user.username}/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    };

useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);


const Documents = () => {};
  return (
    <>
    <div className="App" >
      {imageUrls.map((url) => {
        return <img src={url} style={{backgroundRepeat:'no-repeat',padding:'20px 10px',width: '100%',
        height: 'auto'}}  />;
      })}
    </div>
    </>
    
  )
}

export default Documents