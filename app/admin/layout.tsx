import AdminRoute from "@/providers/route/admin";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return <AdminRoute>{children}</AdminRoute>;
}
