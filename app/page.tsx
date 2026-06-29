"use client";
import { Button } from "@/components/ui/button";
import api from "@/hooks/axios";
import { useAuth } from "@/providers/memory";
import { useRouter } from "next/navigation";

export default function Home() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleProfile = async () => {
    return router.push("/user/profile");
  };
  const handleAuth = async () => {
    return router.push("/auth");
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button onClick={handleProfile}>Profile</Button>
      <Button
        variant={"secondary"}
        onClick={() => {
          logout();
          router.push("/auth");
        }}
      >
        Logout
      </Button>
      <Button onClick={handleAuth}>Auth</Button>
    </div>
  );
}
