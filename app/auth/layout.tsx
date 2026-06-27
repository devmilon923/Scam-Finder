import GuestRoute from "@/providers/route/guest";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return <GuestRoute>{children}</GuestRoute>;
}
