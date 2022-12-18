import React from "react";
import templateimg from "../resources/templates/template1.png";
import template2img from "../resources/templates/template2.png";
import "../resources/templates.css";
import { useNavigate } from "react-router-dom";
import "./../resources/user.css";
import DefaultLayout_public from "./DefaultLayout_public";

function ABC() {
  const navigate = useNavigate();
  const templates = [
    {
      title: "Simple Resume",
      image: template2img,
    },
    {
      title: "Highlighted Sections Resume",
      image: templateimg,
    },
  ];
  return(
    <DefaultLayout_public>
    <div className="layouttt">
      <div className="row home">
        {templates.map((template, index) => {
          return (
            <div className="col-md-4" >
              {/* style={{ display:'flex',justifyContent:'center',margin:'auto', paddingTop:'8%'}} */}
              <div className="template">
                <img
                  src={template.image}
                  height="400"
                  alt=""
                  style={{ width: "100%"}}
                />
                <div className="text">
                  <p>{template.title}</p>
                  <button onClick={() => navigate(`/templates_public/${index + 1}`)}>
                    TRY
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
      </DefaultLayout_public>
);
}

export default ABC