"use client";

import { useAuth } from "@/providers/memory";

export default function Page() {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="p-4 space-y-4">
      <div>profile</div>
    </div>
  );
}
