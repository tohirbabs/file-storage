import { Outlet } from "@remix-run/react";
import { ClientOnly } from "remix-utils"

import SideNav from "../utils/components/SideNav";

import layout_positioning from "../styles/dashboard/layout_positioning.css";

export const links = () => {
  return [
    { rel: "stylesheet", href: layout_positioning }
  ];
};

export default function App() {
  return (
    <div>
      <div className="flex bg-nova-grey">
        <ClientOnly>{() => <SideNav />}</ClientOnly>
        <Outlet />
      </div>
    </div>
  );
  }