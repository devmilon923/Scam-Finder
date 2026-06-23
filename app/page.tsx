"use client";
import { Button } from "@/components/ui/button";
import api from "@/hooks/axios";

export default function Home() {
  const backendURL = process.env.NEXT_PUBLIC_Backend_URL;
  const handleLogout = async () => {
    try {
      await api.get(backendURL + "/logout");
    } catch (error: any) {}
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}
