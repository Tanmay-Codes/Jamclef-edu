import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import SettingsIcon from "@mui/icons-material/Settings";
import SpeedIcon from "@mui/icons-material/Speed";
export const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: SpeedIcon,
    subMenu: false,
  },
  {
    title: "Students",
    path: "/students",
    icon: AvTimerIcon,
  },
  // {
  //   title: "Schedule",
  //   path: "/Schedule",
  //   icon: WorkHistoryIcon,
  //   subMenu: [
  //     {
  //       title: "Screenshots",
  //       path: "/activity/Screenshots",
  //       icon: ScreenshotMonitorIcon,
  //     },
  //     {
  //       title: "Apps",
  //       path: "/activity/apps",
  //       icon: AppsIcon,
  //     },
  //     {
  //       title: "Url",
  //       path: "/activity/urls",
  //       icon: AdsClickIcon,
  //     },
  //   ],
  // },
  // {
  //   title: "Projects",
  //   path: "/projects",
  //   icon: BusinessCenterIcon,
  //   subMenu: [
  //     {
  //       title: "Project Dashboard",
  //       path: "/project/dashboard",
  //       icon: DashboardIcon,
  //     },
  //     {
  //       title: "Taskboard",
  //       path: "/project/taskboard",
  //       icon: AssignmentIcon,
  //     },
  //     {
  //       title: "Projects",
  //       path: "/projects/projects-list",
  //       icon: ListAltIcon,
  //     },
  //   ],
  // },
  {
    title: "Finance",
    path: "/finance",
    icon: AccountBalanceWalletIcon,
    subMenu: false,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: AssignmentIndIcon,
    subMenu: false,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: SettingsIcon,
    subMenu: false,
  },
];
