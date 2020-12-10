import React, { useState } from "react";
import "./GeneratePDFForm.modules.css";
import GetFields from "./GetFields";
import ConfigureFields from "./ConfigureFields";

interface Props {}

const GeneratePDFForm = (props: Props) => {
  const [step, setStep] = useState(1);
  return (
    <div className="py-6 h-screen">
      {step === 1 && <GetFields setStep={setStep} />}
      {step === 2 && <ConfigureFields setStep={setStep} />}
    </div>
  );
};

export default GeneratePDFForm;
