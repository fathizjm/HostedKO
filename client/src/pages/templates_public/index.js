import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Documentsupload_public from "../../components/Documentsupload_public";
import DefaultLayout_public from "../../components/DefaultLayout_public";
import LinkedinUpload_public from "../../components/LinkedinUpload_public";
import Github_public from "../../components/Github_public";
import Template1 from "./Template1";
import Template2 from "./Template2";
import { Button , Tabs} from "antd";
import SocialUpload_public from "../../components/SocialUpload_public";

function Templates() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const params = useParams();
  const navigate = useNavigate()
  const gettemplate = () => {
    switch (params.id) {
      case "1": {
        return <Template1 />;
      }
      case "2": {
        return <Template2 />;
      }
    }
  };
  return (
    <DefaultLayout_public>
      <Tabs defaultActiveKey="1">
    <Tabs.TabPane tab="Resume" key="1">
    <div className="d-flex justify-content-end my-2 mx-10 pb-2">
        <Button className="back-btn" onClick={()=>navigate('/UserProfile')}>Back</Button>
        <Button className="mx-4" onClick={handlePrint}>Print</Button>
      </div>
      <div ref={componentRef}>{gettemplate()}</div>
    </Tabs.TabPane>
    <Tabs.TabPane tab="Documents" key="2">
    <Documentsupload_public />
    </Tabs.TabPane>
    <Tabs.TabPane tab="LinkedIn" key="3">
    <LinkedinUpload_public />
    </Tabs.TabPane>

    <Tabs.TabPane tab="Github" key="4">
    <Github_public />
    </Tabs.TabPane>
   
    <Tabs.TabPane tab="Social" key="5">
    <SocialUpload_public />
    </Tabs.TabPane>
    
    
  </Tabs>
  </DefaultLayout_public>
  );
  }

export default Templates;
