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
