import React from "react";
import GeneratePDFForm from "../../components/GeneratePDFForm";
import TemplatePreview from "../../components/TemplatePreview";

interface Props {}

const GeneratePdf = (props: Props) => {
  return (
    <div className="w-full flex">
      <div className="w-1/2 shadow-md bg-white p-6">
        <h4 className="text-primary font-semibold text-lg">
          Convert Excel Sheets to PDF templates
        </h4>
        <GeneratePDFForm />
        <TemplatePreview />
      </div>
    </div>
  );
};

export default GeneratePdf;
