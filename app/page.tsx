"use client";
import { Button } from "@/components/ui/button";
import api from "@/hooks/axios";

export default function Home() {
  const handleLogout = async () => {
    try {
      await api.get("http://localhost:3000/google/logout");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}
