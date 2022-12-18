import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import DefaultLayout from "../../components/DefaultLayout";
import Documentsupload from "../../components/Documentsupload";
import LinkedinUpload from "../../components/LinkedinUpload";
import Github from "../../components/Github";
import Template1 from "./Template1";
import Template2 from "./Template2";
import { Button , Tabs} from "antd";
import SocialUpload from "../../components/SocialUpload";

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
    <DefaultLayout>
      <Tabs defaultActiveKey="1">
    <Tabs.TabPane tab="Resume" key="1">
    <div className="d-flex justify-content-end my-2 mx-10 pb-2">
        <Button className="back-btn" onClick={()=>navigate('/home')}>Back</Button>
        <Button className="mx-4" onClick={handlePrint}>Print</Button>
      </div>
      <div ref={componentRef}>{gettemplate()}</div>
    </Tabs.TabPane>
    <Tabs.TabPane tab="Documents" key="2">
    <Documentsupload />
    </Tabs.TabPane>
    <Tabs.TabPane tab="LinkedIn" key="3">
    <LinkedinUpload />
    </Tabs.TabPane>

    <Tabs.TabPane tab="Github" key="4">
    <Github />
    </Tabs.TabPane>
   
    <Tabs.TabPane tab="Social" key="5">
    <SocialUpload />
    </Tabs.TabPane>
    
    
  </Tabs>
      
    </DefaultLayout>
  );
  }

export default Templates;
