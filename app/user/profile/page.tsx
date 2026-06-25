"use client";

import { useProfile } from "@/hooks/axios";

export default function Page() {
  const { data } = useProfile();
  console.log(data);
  return (
    <div className="p-4 space-y-4">
      <div>profile</div>
    </div>
  );
}
