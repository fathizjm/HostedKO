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



function Documents() {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
    const user = JSON.parse(localStorage.getItem("sheyresume-user"));
    console.log(user)
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
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <br />
      <button onClick={uploadFile}> Upload Image</button>
      <br /> <br /> <hr style={{height:'5px', Color:'#000'}}/>
      {imageUrls.map((url) => {
        return <img src={url} />;
      })}
    </div>
    </>
    
  )
}

export default Documents