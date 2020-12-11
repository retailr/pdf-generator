import React, { useState } from "react";
import { Route, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Seo from "../../components/Seo/Seo";
import TemplatePreview from "../../components/TemplatePreview";
import TemplatesList from "../../components/TemplatesList";
import TemplateForm from "./TemplateForm";

interface Props {}

const Templates = (props: Props) => {
  const [previewMode, setPreviewMode] = useState<boolean>(false);
  const match = useRouteMatch();
  return (
    <div className="w-full flex">
      <Seo title="Manage Templates" description="Manage PDF Templates" />
      {!previewMode && (
        <div
          className={`w-${
            match.isExact ? "full" : "1/2"
          } h-screen shadow-md bg-white p-6`}
        >
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
      )}
      {!match.isExact && (
        <div className={`w-1/2 p-6 ${previewMode && "shadow-md"}`}>
          <Route path={`${match.path}/add`}>
            <TemplateForm
              previewMode={previewMode}
              setPreviewMode={setPreviewMode}
              mode="new"
            />
          </Route>
          <Route path={`${match.path}/:templateId/view`}>
            <TemplateForm
              previewMode={previewMode}
              setPreviewMode={setPreviewMode}
              mode="view"
            />
          </Route>
          <Route path={`${match.path}/:templateId/edit`}>
            <TemplateForm
              previewMode={previewMode}
              setPreviewMode={setPreviewMode}
              mode="edit"
            />
          </Route>
        </div>
      )}

      {previewMode && <TemplatePreview />}
    </div>
  );
};

export default Templates;
