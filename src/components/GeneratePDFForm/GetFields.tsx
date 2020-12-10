import React from "react";
import { useForm } from "react-hook-form";
import { Datum } from "../../interfaces";
import "./GeneratePDFForm.modules.css";

interface Props {}

const GetFields = (props: Props) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: Datum) => console.log(data);

  return (
    <div className="py-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6 w-full">
          <label className="form-label">Upload Excel template</label>
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
          <label className="form-label">Select PDF template</label>
          <select
            id="template"
            name="template"
            className="w-full form-control"
            ref={register({ required: true })}
          >
            <option value="2">VTL Pricing Template</option>
          </select>
          {errors.template && (
            <span className="text-xs text-primary">This field is required</span>
          )}
        </div>
        <div className="w-full text-center mb-6 ">
          <button className="btn-primary" type="submit">
            Proceed to PDF Configuration
          </button>
        </div>
      </form>
    </div>
  );
};

export default GetFields;
