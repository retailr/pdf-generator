import React from "react";
import Dropdown from "../Shared/Dropdown";
import { Column, RowAction, Template } from "./template-data";

interface Props {
  template: Template;
  columns: Column[];
  actions: RowAction[];
}

const TemplateRow = ({ template, columns, actions }: Props) => {
  return (
    <div className="flex text-left text-sm w-full border-b p-2 border-gray-200">
      {columns.map((column: Column) => (
        <div key={column.id} className={`w-${column.colspan}/12 p-2`}>
          {(template as any)[column.key]}
        </div>
      ))}
      <div className="w-1/12 text-sm flex items-center">
        <Dropdown>
          {actions.map((action: RowAction) => (
            <button
              key={action.id}
              onClick={() => action.action(template)}
              className="text-left p-2 px-4 w-full flex items-center hover:text-primary"
            >
              <action.icon className="mr-2" />
              {action.title}
            </button>
          ))}
        </Dropdown>
      </div>
    </div>
  );
};

export default TemplateRow;
