import React from "react";
import { Column, dataColumns, Template, templates } from "./template-data";
import TemplateRow from "./TemplateRow";

interface Props {}

const Templates = (props: Props) => {
  return (
    <div>
      <div className="flex flex-wrap w-full">
        <div className="w-full flex">
          {dataColumns.map((column: Column) => (
            <div
              key={column.id}
              className={`w-${column.colspan}/12 font-semibold p-2`}
            >
              {column.title}
            </div>
          ))}
        </div>
        <div className="w-full">
          {templates.map((template: Template) => (
            <TemplateRow
              key={template.id}
              columns={dataColumns}
              template={template}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Templates;
