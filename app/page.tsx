"use client";

import StoreCard from "@/components/custom/store-card";
import { Button } from "@/components/ui/button";
import api from "@/hooks/axios";
import { useAuth } from "@/providers/memory";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <StoreCard
        name="Maison & Co."
        category="Fashion & Apparel"
        logo="https://img.magnific.com/premium-vector/creative-elegant-abstract-minimalistic-logo-design-vector-any-brand-company_1253202-137644.jpg"
        platform="facebook"
        allegation="Money Scam"
        description="Multiple customers reported payment issues and delayed refunds. Click to see full details."
        joinedDate="Jan 15, 2024"
        location="New York, USA"
      />
      {/* <Button onClick={handleProfile}>Profile</Button>
      <Button
        variant={"secondary"}
        onClick={() => {
          logout();
          router.push("/auth");
        }}
      >
        Logout
      </Button>
      <Button onClick={handleAuth}>Auth</Button> */}
    </div>
  );
}
