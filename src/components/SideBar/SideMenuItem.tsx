import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "./menu";

interface Props {
  menu: Menu;
}

const SideMenuItem = React.memo(({ menu }: Props) => {
  return (
    <Link
      to={menu.disabled ? "" : menu.path}
      className="w-full text-xs hover:bg-gray-200 flex justify-center flex-wrap text-center items-center text-gray-500 p-3"
    >
      <menu.icon fontSize={24} className="mb-2" />
      <span className="w-full">{menu.title}</span>
    </Link>
  );
});

export default SideMenuItem;
