"use client";

import { useAuth } from "@/app/memory/memory";

export default function Page() {
  // const { data } = useProfile();
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="p-4 space-y-4">
      <div>profile</div>
    </div>
  );
}
