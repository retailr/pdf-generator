import React from "react";
import logo from "../../assets/retailr.png";
import { menu, Menu } from "./menu";
import SideMenuItem from "./SideMenuItem";

interface Props {}

const SideMenu = (props: Props) => {
  return (
    <div className="w-1/12 min-h-screen flex flex-wrap items-start justify-start flex-col border-r border-gray-100 bg-white z-0">
      <div className="w-full flex justify-center py-3">
        <img src={logo} alt="Retailr Logo" className="h-24" />
      </div>
      <div className="w-full flex-wrap flex">
        {menu.map(
          (menu: Menu) =>
            !menu.hide && <SideMenuItem key={menu.id} menu={menu} />
        )}
      </div>
    </div>
  );
};

export default SideMenu;
