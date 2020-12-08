import React from "react";
import { history } from "../../redux/store";

interface ErrorPageProps {
  error: string;
  description: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error, description }) => {
  return (
    <div className="container mx-auto min-h-screen">
      <div className="flex w-full flex-col min-h-screen justify-center items-center">
        <h2 title={error} className="font-semibold text-8xl">
          {error}
        </h2>
        <p color="textSecondary">{description}</p>
        <button
          className="mt-10 bg-primary text-white p-2 rounded"
          onClick={() => history.push("/")}
        >
          Back to Overview
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
