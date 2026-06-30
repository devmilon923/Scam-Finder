"use client";

import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Search,
  Users,
  Clock,
  Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "./../assets/images/hero.png";

function HeroIllustration() {
  return (
    <div className="relative">
      <div className="relative rounded-lg overflow-hidden border border-zinc-100/50 bg-zinc-50">
        <img
          src={heroImage.src}
          alt="ScamFinder intelligence dashboard"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className=" relative selection:bg-zinc-200 selection:text-zinc-900  overflow-hidden">
      {/* Very faint, compact background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-size-[1.5rem_1.5rem] opacity-50 -z-20" />

      <section className="relative z-10 px-4 py-10 md:py-16 lg:py-20">
        <div className="">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 items-center">
            {/* Left Column: Text & CTA */}
          <div className="w-full grid gap-6">
  {/* Header Content */}
  <div className="space-y-4">
    <div className="inline-flex items-center gap-2 rounded-md border border-red-100 bg-red-50/50 px-2.5 py-1 text-xs font-medium text-red-600">
      <div className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
      </div>
      Live Conflict Resolution
    </div>

    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900 leading-[1.15]">
      Validated evidence. <br className="hidden sm:block" />
      <span className="text-zinc-400">Fair resolution.</span>
    </h1>

    <p className="text-base text-zinc-500 leading-relaxed max-w-lg">
      We don’t just track fraud—we mediate it. File a case, and our team will verify your evidence before exposing the threat to our community to ensure accountability.
    </p>
  </div>

  {/* Compact Information Box - The "Middleman" Process */}
  <div className="rounded-lg border border-zinc-200/70 bg-zinc-50/50 p-4">
    <div className="flex items-start gap-3">
      <ShieldCheck className="h-5 w-5 text-zinc-400 shrink-0 mt-0.5" />
      <div>
        <h3 className="text-sm font-semibold text-zinc-900">
          How Arbitration Works
        </h3>
        <p className="mt-1 text-sm text-zinc-500 leading-relaxed">
          Once we verify your claim, we broadcast the alert to force negotiation. When a store provides a full refund, the case is marked resolved and the alert is cleared.
        </p>
      </div>
    </div>
  </div>

  {/* Tight Feature Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg">
    {[
      { icon: Search, label: "Rigorous case verification" },
      { icon: Users, label: "Public awareness campaigns" },
      { icon: Clock, label: "Direct negotiation support" },
      { icon: Database, label: "Refund-based closure" },
    ].map((item, index) => (
      <div
        key={index}
        className="flex items-center gap-3 rounded-md border border-zinc-200/60 bg-white p-2.5 shadow-sm"
      >
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-zinc-100/50">
          <item.icon size={14} className="text-zinc-600" />
        </div>
        <span className="text-sm font-medium text-zinc-700">
          {item.label}
        </span>
      </div>
    ))}
  </div>

  {/* Action Buttons */}
  <div className="flex flex-col sm:flex-row gap-3 pt-2">
    <Link href="/cases" className="w-full sm:w-auto">
      <Button className="w-full h-10 bg-zinc-900 text-white hover:bg-zinc-800 px-6 text-sm font-medium rounded-md shadow-sm transition-colors">
        View Active Cases
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </Link>
    <Link href="/auth" className="w-full sm:w-auto">
      <Button
        variant="outline"
        className="w-full h-10 border-zinc-200 text-zinc-700 bg-white hover:bg-zinc-50 hover:text-zinc-900 px-6 text-sm font-medium rounded-md transition-colors"
      >
        File a Dispute
      </Button>
    </Link>
  </div>
</div>

            {/* Right Column: Dashboard Frame */}
            <div className="w-fit">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
