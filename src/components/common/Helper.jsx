import {
  CatalogIcon,
  CommunticationIcon,
  DashboardIcon,
  MarketingIcon,
  PrivacyPoliceIcon,
  SIPsIcon,
  SettingsIcon,
  TermConditionIcon,
  TransactionIcon,
  UserIcon,
} from "./Icon";

export const sideBarData = [
  {
    icon: <DashboardIcon />,
    tabs: "Dashboard",
    path: "/",
  },
  {
    icon: <CatalogIcon />,
    tabs: "Catalog",
    path: "/catalogs",
    hasDropdown: true,
    subItems: [
      {
        tabs: "Campaigns",
        path: "/catalog/campaigns",
      },
      {
        tabs: "SEO",
        path: "/catalog/seo",
      },
    ],
  },
  {
    icon: <UserIcon />,
    tabs: "Users",
    path: "/users",
  },
  {
    icon: <SIPsIcon />,
    tabs: "SIPs",
    path: "/spis",
  },
  {
    icon: <MarketingIcon />,
    tabs: "Marketing",
    path: "/marketing",
    hasDropdown: true,
    subItems: [
      {
        tabs: "Campaigns",
        path: "/marketing/campaigns",
      },
      {
        tabs: "SEO",
        path: "/marketing/seo",
      },
    ],
  },
  {
    icon: <CommunticationIcon />,
    tabs: "Communications",
    path: "/communications",
  },
  {
    icon: <TransactionIcon />,
    tabs: "Transactions",
    path: "/transactions",
  },
  {
    icon: <PrivacyPoliceIcon />,
    tabs: "Privacy Policy",
    path: "/privacy-policy",
  },
  {
    icon: <TermConditionIcon />,
    tabs: "Terms and Conditions",
    path: "/term-conditions",
  },
  {
    icon: <SettingsIcon />,
    tabs: "Settings",
    path: "/settings",
    hasDropdown: true,
    subItems: [
      {
        tabs: "Profile",
        path: "/settings/profile",
      },
      {
        tabs: "Security",
        path: "/settings/security",
      },
    ],
  },
];

export const recentTranjections = [
  {
    name: "john doe",
    amount: "₹ 2,300.00",
  },
  {
    name: "john doe",
    amount: "₹ 2,300.00",
  },
  {
    name: "john doe",
    amount: "₹ 2,300.00",
  },
  {
    name: "morin",
    amount: "₹ 2,300.00",
  },
];

export const tableData = [
  {
    id: 1,
    name: "John Leo",
    registration: "01-01-2023",
    cityState: "Hisar / Haryana",
    memberStatus: "Active",
    totalInvestment: "₹ 5000",
  },
  {
    id: 2,
    name: "John Leo",
    registration: "01-01-2023",
    cityState: "Hisar / Haryana",
    memberStatus: "Active",
    totalInvestment: "₹ 5000",
  },
  {
    id: 3,
    name: "John Leo",
    registration: "01-01-2023",
    cityState: "Hisar / Haryana",
    memberStatus: "Active",
    totalInvestment: "₹ 5000",
  },
  {
    id: 3,
    name: "John Leo",
    registration: "01-01-2023",
    cityState: "Hisar / Haryana",
    memberStatus: "Active",
    totalInvestment: "₹ 5000",
  },
  {
    id: 3,
    name: "John Leo",
    registration: "01-01-2023",
    cityState: "Hisar / Haryana",
    memberStatus: "Active",
    totalInvestment: "₹ 5000",
  },
];
