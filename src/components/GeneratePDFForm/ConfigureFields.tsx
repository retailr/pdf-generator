import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Datum } from "../../interfaces";

import "./GeneratePDFForm.modules.css";

interface Props {}

const ConfigureFields = (props: Props) => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      configuration: [],
    },
  });
  const { fields } = useFieldArray({
    control,
    name: "configuration",
  });
  const onSubmit = (data: Datum) => console.log("data", data);

  return (
    <div className="py-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form-label">Map excel fields to template fields</h1>
        <div className="w-full flex">
          <div className="w-1/2 font-bold p-4">Excel Field</div>
          <div className="w-1/2 font-bold p-4">Template Field</div>
        </div>
        <ul>
          {fields.map((item, index) => {
            return (
              <li className="w-full flex" key={item.id}>
                <span className="w-1/2 px-4 py-2">
                  <select
                    id={`configuration[${index}].excelField`}
                    name={`configuration[${index}].excelField`}
                    className="w-full form-control"
                    defaultValue={`${item.excelField}`} // make sure to set up defaultValue
                    ref={register({ required: true })}
                  >
                    <option value="2">VTL Pricing Template</option>
                  </select>
                </span>
                <span className="w-1/2 px-4 py-2">
                  <select
                    id={`configuration[${index}].pdfField`}
                    name={`configuration[${index}].pdfField`}
                    className="w-full form-control"
                    defaultValue={`${item.pdfField}`} // make sure to set up defaultValue
                    ref={register({ required: true })}
                  >
                    <option value="2">VTL Pricing Template</option>
                  </select>
                </span>
              </li>
            );
          })}
        </ul>
        <div className="w-full text-center">
          <input value="Generate PDF" className="btn-primary" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default ConfigureFields;
