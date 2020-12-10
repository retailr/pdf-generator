import React from "react";
import SideMenu from "../SideBar/SideMenu";

interface Props {
  component: React.ReactNode;
}

const Layout = ({ component }: Props) => {
  return (
    <div className="flex font-serif w-full">
      <SideMenu />
      <main className="w-11/12">
        <section>{component}</section>
      </main>
    </div>
  );
};

export default Layout;
