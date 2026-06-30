import MiniNavbar from "@/components/custom/mini-navbar";
import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="lg:pb-28 pb-24">
        <MiniNavbar />
      </div>
      {children}
    </div>
  );
}

export default layout;
