import { Icons } from "../../components/Icon";

export const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: <Icons.dashboard size={20} />,
  },
  {
    id: "user",
    label: "Manage users",
    href: "/admin/users",
    icon: <Icons.user size={20} />,
  },
  {
    id: "team",
    label: "Manage team",
    href: "/admin/teams",
    icon: <Icons.userCircle size={20} />,
  },
  {
    id: "activity",
    label: "Activities",
    href: "/admin/activities",
    icon: <Icons.chartBar size={20} />,
  },
  {
    id: "reports",
    label: "Reports",
    href: "/admin/reports",
    icon: <Icons.report size={20} />,
  },
  {
    id: "settings",
    label: "Settings",
    href: "/admin/settings",
    icon: <Icons.settings size={20} />,
  },
];
