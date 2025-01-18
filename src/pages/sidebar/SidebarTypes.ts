export interface AppSidebarProps {
  children: React.ReactNode;
}

export interface SidebarItemProps {
  icon?: React.ReactNode;
  title: string;
  url: string;
}

export interface SidebarGroupProps {
  items: SidebarItemProps[];
  title: string;
}
