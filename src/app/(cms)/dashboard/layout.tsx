import { Metadata } from "next";

import React from "react";

interface DashboardLayoutProps {
   children: React.ReactNode;
}

export const metadata: Metadata = {
   title: "Overview",
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
   return <>{children}</>;
}
