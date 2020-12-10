import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "./menu";

interface Props {
  menu: Menu;
}

const SideMenuItem = React.memo(({ menu }: Props) => {
  return (
    <NavLink
      activeClassName="bg-gray-200"
      to={menu.disabled ? "" : menu.path}
      className="w-full text-xs hover:bg-gray-200 flex justify-center flex-wrap text-center items-center text-gray-500 p-3"
    >
      <menu.icon fontSize={24} className="mb-2" />
      <span className="w-full">{menu.title}</span>
    </NavLink>
  );
});

export default SideMenuItem;
