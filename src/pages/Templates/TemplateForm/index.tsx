import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import Seo from "../../../components/Seo/Seo";
import { Datum } from "../../../interfaces";
import { titleCase } from "../../../utils/common.utils";

interface Props {
  mode: "view" | "edit" | "new";
  previewMode: boolean;
  setPreviewMode: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Params {
  [x: string]: string | undefined;
  [x: number]: string | undefined;
}

const TemplateForm = ({ mode, setPreviewMode, previewMode }: Props) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: Datum) => console.log(data);
  const { templateId } = useParams<Params>();
  return (
    <div className="py-6">
      <Seo
        title={`${titleCase(mode)} Template`}
        description={`${titleCase(mode)} PDF Template`}
      />
      <h4 className="text-primary font-semibold text-lg">
        {titleCase(mode)} PDF Template {!!templateId && `(${templateId})`}
      </h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6 w-full">
          <label className="form-label">Template name</label>
          <input
            id="template"
            name="template"
            type="text"
            className="w-full font-mono form-control"
            ref={register({ required: true })}
          />
          {errors.template && (
            <span className="text-xs text-primary">This field is required</span>
          )}
        </div>
        <div className="mb-6 w-full">
          <label className="form-label">Upload JS/HTML template</label>
          <input
            type="file"
            id="excelFile"
            name="excelFile"
            className="w-full form-control"
            ref={register({ required: true })}
          />
          {errors.excelFile && (
            <span className="text-xs text-primary">This field is required</span>
          )}
        </div>
        <div className="mb-6 w-full">
          <label className="form-label">Upload Sample JSON Data</label>
          <textarea
            id="sampledata"
            name="sampledata"
            rows={10}
            className="w-full font-mono form-control"
            ref={register({ required: true })}
          ></textarea>
          {errors.sampledata && (
            <span className="text-xs text-primary">This field is required</span>
          )}
        </div>
        <div className="w-full text-center mb-6 ">
          <button
            onClick={() => setPreviewMode(!previewMode)}
            className="btn-primary-outlined"
            type="button"
          >
            {previewMode ? "Close Preview" : "Preview Template"}
          </button>{" "}
          <button className="btn-primary" type="submit">
            Upload Template
          </button>
        </div>
      </form>
    </div>
  );
};

export default TemplateForm;
