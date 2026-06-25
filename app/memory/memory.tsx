"use client";
import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface UserType {
  name: string;
  email: string;
  oauthid: string;
  id: string;
}

interface ContextPayload {
  user: UserType | null;
  setUser: Dispatch<SetStateAction<UserType | null>>;
}

// Initialize the context
export const AuthContext = createContext<ContextPayload | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null);
  

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
