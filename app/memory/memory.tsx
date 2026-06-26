"use client";
import { useProfile } from "@/hooks/axios";
import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
  useContext,
} from "react";

interface UserType {
  name: string;
  email: string;
  oauthid: string;
  id: string;
}

interface ContextPayload {
  user: UserType | undefined;
  setUser: Dispatch<SetStateAction<UserType | undefined>>;
}

// Initialize the context
export const AuthContext = createContext<ContextPayload | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserType | undefined>(undefined);

  const { data } = useProfile();
  useEffect(() => {
    if (data) {
      setUser(data.data.user);
    }
  }, [data]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
