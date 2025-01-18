import { Outlet } from "react-router-dom";

import AppSidebar from "./Sidebar";

export default function SidebarLayout() {
  return <AppSidebar children={<Outlet />} />;
}
