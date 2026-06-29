"use client";

import { ReactNode, useEffect, useState } from "react";
import { useAuth } from "../memory";
import { useRouter } from "next/navigation";

function UserRoute({ children }: { children: ReactNode }) {
  const { user, isLoading, isSuccess } = useAuth();
  const [munted, setMunted] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setMunted(true);
  }, []);

  useEffect(() => {
    if (!isLoading && isSuccess && munted) {
      if (!user) {
        router.push("/auth");
      } else if (user.role !== "user") {
        router.push("/unauthorized");
      }
    }
  }, [isLoading, isSuccess, user, munted]);
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
  if (user?.role === "user" && isSuccess) {
    return <>{children}</>;
  }
  return null;
}

export default UserRoute;
