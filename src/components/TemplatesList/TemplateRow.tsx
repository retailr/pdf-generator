import React from "react";
import Dropdown from "../Shared/Dropdown";
import { Column, Template } from "./template-data";

interface Props {
  template: Template;
  columns: Column[];
}

const TemplateRow = ({ template, columns }: Props) => {
  return (
    <div className="flex text-left text-sm w-full border-b p-2 border-gray-200">
      {columns.map((column: Column) => (
        <div key={column.id} className={`w-${column.colspan}/12 p-2`}>
          {(template as any)[column.key]}
        </div>
      ))}
      <Dropdown>Hello world</Dropdown>
    </div>
  );
};

export default TemplateRow;
