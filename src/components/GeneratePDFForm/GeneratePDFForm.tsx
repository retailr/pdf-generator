import React from "react";
import "./GeneratePDFForm.modules.css";
import GetFields from "./GetFields";
import ConfigureFields from "./ConfigureFields";

interface Props {}

const GeneratePDFForm = (props: Props) => {
  return (
    <div className="py-6 min-h-screen">
      <GetFields />
      <ConfigureFields />
    </div>
  );
};

export default GeneratePDFForm;
