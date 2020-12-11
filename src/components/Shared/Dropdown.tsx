import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import useComponentVisible from "../../hooks/useComponentVisible";
import "./Dropdown.modules.scss";

interface Props {
  children: React.ReactNode;
}

const Dropdown = ({ children }: Props) => {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false);

  return (
    <div ref={ref} className="w-full text-right relative">
      <button
        className="p-2 hover:bg-gray-200 rounded"
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      >
        <FiMoreVertical />
      </button>
      {isComponentVisible ? (
        <div className="absolute border-gray-100 border text-left right-0 top-full shadow-sm z-10 rounded bg-white w-40">
          {children}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
