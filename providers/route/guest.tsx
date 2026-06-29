"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { useAuth } from "../memory";

export default function GuestRoute({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [munted, setMunted] = useState(false);
  const { user, isLoading, isSuccess } = useAuth();
  useEffect(() => {
    setMunted(true);
  }, []);
  useEffect(() => {
    if (!isLoading && isSuccess && munted) {
      if (user) {
        router.push("/user/profile");
      }
    }
  }, [isLoading, isSuccess, munted]);
  if (!user && isLoading && munted)
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <div className="animate-pulse text-sm font-medium text-muted-foreground">
            Restoring session...
          </div>
        </div>
      </div>
    );
  if (!user) return children;
  return null;
}
