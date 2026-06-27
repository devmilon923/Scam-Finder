import UserRoute from "@/providers/route/user";
import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return <UserRoute>{children}</UserRoute>;
}
