import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import "./Dropdown.modules.scss";

interface Props {
  children: React.ReactNode;
}

const Dropdown = ({ children }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="w-full text-right relative">
      <button onClick={() => setOpen(!open)}>
        <FiMoreVertical />
      </button>
      {open && <div>{children}</div>}
    </div>
  );
};

export default Dropdown;
