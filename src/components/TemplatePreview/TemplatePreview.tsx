import React from "react";

interface Props {}

const TemplatePreview = (props: Props) => {
  return (
    <div className="w-1/2 h-screen py-6 flex flex-col justify-between pb-0">
      <div className="w-full font-semibold text-lg text-center text-primary">
        Template Preview
      </div>
      <button className="self-end w-full font-semibold bg-primary text-white p-4">
        Download PDF
      </button>
    </div>
  );
};

export default TemplatePreview;
