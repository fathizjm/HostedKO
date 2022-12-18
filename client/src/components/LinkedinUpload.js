import React, { useEffect } from 'react';
import Parser from 'html-react-parser';

export default function App() {
    const user = JSON.parse(localStorage.getItem("sheyresume-user"));

  useEffect(() => {
    const script = document.createElement('script');
    

    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
    

  return (
   <>
   <div >{Parser(user.linkedinlink)}</div>
  </>
  
  );
}

