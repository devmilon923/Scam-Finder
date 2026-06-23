"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useState } from "react";

function GoogleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default function Login() {
  const [isLoading, setIsloading] = useState(false);
  const handleGoogleLogin = () => {
    setIsloading(true);
    setTimeout(() => {
      window.location.href = "http://localhost:3000/google/auth";
    }, 100);
  };

  return (
    <main className="min-h-screen grid lg:grid-cols-2">
      {/* Left panel — brand / illustration */}
      <div className="hidden lg:flex flex-col justify-between bg-zinc-950 p-12 text-white">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
            <span className="text-zinc-950 text-sm font-bold">A</span>
          </div>
          <span className="font-medium text-sm tracking-tight">Acme Inc.</span>
        </div>

        {/* Quote / tagline */}
        <div className="space-y-4">
          <blockquote className="text-2xl font-light leading-snug text-zinc-100 max-w-xs">
            "The fastest way to bring your ideas to life."
          </blockquote>
          <p className="text-sm text-zinc-500">
            Join thousands of teams already building.
          </p>
        </div>
      </div>

      {/* Right panel — login */}
      <div className="flex items-center justify-center px-6 py-16 bg-white dark:bg-zinc-900">
        <div className="w-full max-w-85 space-y-8">
          {/* Mobile logo */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="w-7 h-7 rounded-md bg-zinc-950 dark:bg-white flex items-center justify-center">
              <span className="text-white dark:text-zinc-950 text-xs font-bold">
                A
              </span>
            </div>
            <span className="font-medium text-sm">Acme Inc.</span>
          </div>

          {/* Heading */}
          <div className="space-y-1.5">
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Welcome back
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Sign in to your account to continue
            </p>
          </div>

          {/* Google button */}
          <Button
            disabled={isLoading}
            variant="outline"
            className="w-full cursor-pointer h-11 gap-3 rounded-xl border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-100 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm"
            onClick={handleGoogleLogin}
          >
            {isLoading && <Spinner data-icon="inline-start" />}
            <GoogleIcon />
            Continue with Google
          </Button>

          {/* Footer */}
          <p className="text-xs text-center text-zinc-400 leading-relaxed">
            By continuing, you agree to our{" "}
            <a
              href="/terms"
              className="underline underline-offset-2 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
            >
              Terms
            </a>{" "}
            and{" "}
            <a
              href="/privacy"
              className="underline underline-offset-2 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
