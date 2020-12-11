import React from "react";
import { useRouteMatch } from "react-router";
import {
  actions,
  Column,
  dataColumns,
  Template,
  templates,
} from "./template-data";
import TemplateRow from "./TemplateRow";

interface Props {}

const Templates = (props: Props) => {
  const { url } = useRouteMatch();
  const handlers = {};
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
              actions={actions(url, handlers)}
              key={template.id}
              columns={dataColumns}
              template={template}
            />
          ))}
        </div>
        <div className="w-full text-center my-8">
          <button className="p-2 border text-sm border-gray-200 hover:bg-gray-200 rounded">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Templates;
