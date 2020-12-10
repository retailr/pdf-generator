import React from "react";
import { Route, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Seo from "../../components/Seo/Seo";
import TemplatesList from "../../components/TemplatesList";

interface Props {}

const Templates = (props: Props) => {
  const match = useRouteMatch();
  return (
    <div className="w-full flex">
      <Seo title="Manage Templates" description="Manage PDF Templates" />
      <div className="w-1/2 h-screen shadow-md bg-white p-6">
        <h4 className="text-primary font-semibold text-lg">
          Manage PDF Templates
        </h4>
        <div className="w-full my-8 text-right">
          <Link className="btn-primary text-sm" to={`${match.url}/add`}>
            Add Template
          </Link>
        </div>
        <div className="w-full my-8">
          <TemplatesList />
        </div>
      </div>
      <div className="w-1/2 p-6">
        <Route path={`${match.path}/add`}>
          <div>Add</div>
        </Route>
        <Route path={`${match.path}/:topicId/view`}>
          <div>View</div>
        </Route>
        <Route path={`${match.path}/:topicId/edit`}>
          <div>Edit</div>
        </Route>
      </div>
    </div>
  );
};

export default Templates;
