import {
  Monitor,
  LayoutDashboard,
  Smartphone,
  Globe,
  UtensilsCrossed,
  Bike,
  Store,
  ChefHat,
  type LucideIcon,
} from "lucide-react";

export interface Surface {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface UseCase {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Screenshot {
  /** path relative to /products/restaurant, without the theme suffix or extension */
  src: string;
  width: number;
  height: number;
  title: string;
  caption: string;
}

/** The four applications that make up the suite. */
export const surfaces: Surface[] = [
  {
    icon: Monitor,
    title: "POS Terminal",
    description:
      "The counter-side app staff use all day — take orders, take payment, run the till.",
    points: [
      "Dine-in, collection and delivery order types",
      "Staff PIN sign-in with manager authorisation",
      "Shift open, close and till reconciliation",
      "Keeps trading when the internet drops",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Admin Back Office",
    description:
      "The web console owners and managers use to run the business across every branch.",
    points: [
      "Menu, modifier and meal-deal management",
      "Inventory, suppliers and warehouses",
      "15+ report types with branch comparison",
      "Roles, permissions and audit logs",
    ],
  },
  {
    icon: Smartphone,
    title: "Customer App",
    description:
      "Native iOS and Android ordering, in both dark and light themes.",
    points: [
      "Branch selection by location or map",
      "Saved addresses and reorder",
      "Live order tracking and push notifications",
      "Loyalty coupons and promotions",
    ],
  },
  {
    icon: Globe,
    title: "Web Ordering",
    description:
      "A responsive online ordering site that shares the same menu and order pipeline.",
    points: [
      "Full menu browsing with allergen information",
      "Guest checkout or signed-in ordering",
      "Order history and downloadable receipts",
      "Cookie consent and data-request handling",
    ],
  },
];

/** Headline capabilities of the ordering and service flow. */
export const features: FeatureItem[] = [
  {
    title: "Every Order Type",
    description:
      "Dine-in with table assignment, collection, and delivery with address capture — all through one cart, with scheduling and urgent-order flags.",
  },
  {
    title: "Menus, Modifiers & Meal Deals",
    description:
      "Build items with modifier groups, upgrade any item to a meal, and assemble box meals and meal deals with their own category pricing.",
  },
  {
    title: "Flexible Payments",
    description:
      "Split the bill, take partial payments, handle cash and change, add tips, redeem vouchers, and issue refunds — pay now or pay later.",
  },
  {
    title: "Multi-Branch by Design",
    description:
      "Run any number of branches with per-branch menus, opening hours, pricing and staff, then compare their performance side by side.",
  },
  {
    title: "Delivery Zones & Pricing",
    description:
      "Draw delivery areas on a map and set pricing rules and order minimums per zone, enforced automatically at checkout.",
  },
  {
    title: "Offline-First Trading",
    description:
      "The POS keeps taking orders and payments when connectivity fails, then syncs everything automatically with a visible sync status.",
  },
];

/** Back-office depth — the part that separates this from a simple till app. */
export const backOffice: FeatureItem[] = [
  {
    title: "Inventory & Warehouses",
    description:
      "Stock levels and movements across multiple warehouses, with suppliers, inventory categories and low-stock alerts.",
  },
  {
    title: "Requisitions & Transfers",
    description:
      "Raise requisitions, record acquisitions from suppliers, and move stock between warehouses with a full paper trail.",
  },
  {
    title: "Waste & Spoilage",
    description:
      "Log waste against reasons and track spoilage cost, so shrinkage shows up in the numbers instead of disappearing.",
  },
  {
    title: "Expenses & Cost Control",
    description:
      "Record expenses against categories and see them flow through to cost breakdown and profitability reporting.",
  },
  {
    title: "Reporting Suite",
    description:
      "Sales, hourly, SKU, category, payments, fulfilment, stock usage, cost breakdown, profitability and branch comparison.",
  },
  {
    title: "Shift Close & Reconciliation",
    description:
      "Open and close shifts with a guided till count, so every session ends with cash reconciled against recorded takings.",
  },
];

/** Promotions and customer marketing. */
export const promotions: FeatureItem[] = [
  {
    title: "Promotions & Discounts",
    description:
      "Schedule promotional pricing and apply discounts at the till with manager authorisation where required.",
  },
  {
    title: "Vouchers & Coupons",
    description:
      "Issue voucher codes redeemable in the app, online or at checkout, with usage limits and expiry rules.",
  },
  {
    title: "Loyalty Club",
    description:
      "Run a members' club that issues personalised coupons to returning customers automatically.",
  },
  {
    title: "Customer Segments",
    description:
      "Group customers by behaviour and spend, then target each segment separately.",
  },
  {
    title: "Email & Push Campaigns",
    description:
      "Compose and send campaigns to a segment, then track delivery and engagement per campaign.",
  },
  {
    title: "Customer Display Ads",
    description:
      "Run idle advertisements on the customer-facing display while the till is between orders.",
  },
];

/** Staff management and access control. */
export const staffAndRoles: FeatureItem[] = [
  {
    title: "Roles & Permissions",
    description:
      "Define custom roles and grant each one only the screens and actions it needs.",
  },
  {
    title: "Manager PIN Authorisation",
    description:
      "Gate discounts, refunds, voids and other sensitive actions behind a manager PIN at the till.",
  },
  {
    title: "Attendance Tracking",
    description:
      "Clock staff in and out and review attendance per branch alongside shift records.",
  },
  {
    title: "Audit Logs",
    description:
      "Every significant change is recorded with the user who made it, so nothing happens anonymously.",
  },
];

export const stats: Stat[] = [
  { value: "4", label: "Connected Applications" },
  { value: "15+", label: "Built-in Report Types" },
  { value: "Unlimited", label: "Branches & Warehouses" },
  { value: "Offline", label: "Capable Point of Sale" },
];

export const useCases: UseCase[] = [
  {
    icon: UtensilsCrossed,
    title: "Quick Service",
    description:
      "High-volume counter service with meal deals, fast modifiers and a customer-facing display.",
  },
  {
    icon: Store,
    title: "Multi-Branch Groups",
    description:
      "Central menu and pricing control with per-branch overrides and comparison reporting.",
  },
  {
    icon: ChefHat,
    title: "Dine-In Restaurants",
    description:
      "Table assignment, split bills and partial payments for full table-service operations.",
  },
  {
    icon: Bike,
    title: "Delivery & Cloud Kitchens",
    description:
      "Map-drawn delivery zones, per-zone pricing and order minimums with live tracking.",
  },
];

/**
 * Showcase screenshots. Mobile and admin ship in both themes, so their `src`
 * gets a `-dark` / `-light` suffix appended at render time. Web ships in a
 * single theme, so its `src` is used as-is.
 */
export const webScreens: Screenshot[] = [
  {
    src: "web/home",
    width: 1600,
    height: 4080,
    title: "Storefront",
    caption: "Branded ordering site with featured items and branch selection",
  },
  {
    src: "web/menu",
    width: 1600,
    height: 1888,
    title: "Menu",
    caption: "Full menu browsing by category",
  },
  {
    src: "web/menu-details",
    width: 1600,
    height: 1236,
    title: "Item Details",
    caption: "Modifiers, meal upgrades and allergen information",
  },
  {
    src: "web/cart",
    width: 1600,
    height: 1948,
    title: "Cart",
    caption: "Line-item editing with special instructions",
  },
  {
    src: "web/checkout",
    width: 1600,
    height: 2704,
    title: "Checkout",
    caption: "Collection or delivery, scheduling and coupon redemption",
  },
  {
    src: "web/orders",
    width: 1600,
    height: 7252,
    title: "Order History",
    caption: "Past orders with status tracking and receipts",
  },
];

export const mobileScreens: Screenshot[] = [
  {
    src: "mobile/home",
    width: 800,
    height: 4039,
    title: "Home",
    caption: "Personalised menu for the customer's chosen branch",
  },
  {
    src: "mobile/item-details",
    width: 800,
    height: 3680,
    title: "Item Details",
    caption: "Options, meal upgrades and allergen details",
  },
  {
    src: "mobile/cart",
    width: 800,
    height: 1804,
    title: "Cart",
    caption: "Review and adjust before checkout",
  },
  {
    src: "mobile/active-orders",
    width: 800,
    height: 1804,
    title: "Active Orders",
    caption: "Live order status with push notifications",
  },
];

export const adminScreens: Screenshot[] = [
  {
    src: "admin/dashboard",
    width: 1600,
    height: 1617,
    title: "Dashboard",
    caption: "Trading at a glance across every branch",
  },
  {
    src: "admin/orders",
    width: 1600,
    height: 720,
    title: "Orders",
    caption: "Every order, filterable by branch, status, type and source",
  },
  {
    src: "admin/sales-report",
    width: 1600,
    height: 1531,
    title: "Sales Report",
    caption: "One of 15+ built-in report types",
  },
  {
    src: "admin/profitability",
    width: 1600,
    height: 1597,
    title: "Profitability",
    caption: "Margin analysis with cost breakdown",
  },
  {
    src: "admin/stock-levels",
    width: 1600,
    height: 918,
    title: "Stock Levels",
    caption: "Live inventory across warehouses",
  },
  {
    src: "admin/branches",
    width: 1600,
    height: 1567,
    title: "Branches",
    caption: "Per-branch configuration, hours and staff",
  },
  {
    src: "admin/delivery-pricing",
    width: 1600,
    height: 752,
    title: "Delivery Pricing",
    caption: "Zone-based pricing rules and order minimums",
  },
];

/** Admin screens captured in the dark theme only. */
export const adminDarkOnlyScreens: Screenshot[] = [
  {
    src: "admin/promotions",
    width: 1600,
    height: 1021,
    title: "Promotions",
    caption: "Scheduled promotional pricing",
  },
  {
    src: "admin/spice-club",
    width: 1600,
    height: 973,
    title: "Loyalty Club",
    caption: "Member coupons issued automatically",
  },
  {
    src: "admin/campaigns",
    width: 1600,
    height: 744,
    title: "Campaigns",
    caption: "Email and push campaigns by customer segment",
  },
];
