import { FaFacebook, FaShopify, FaGlobe, FaMobileAlt } from "react-icons/fa";
import {
  AlertTriangle,
  Check,
  Clock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "../ui/button";
// import MiniNavbar from "./mini-navbar"; // Add back if needed

type Platform = "facebook" | "shopify" | "website" | "app";

interface StoreCardProps {
  name: string;
  logo?: string; // Kept for interface compatibility, though unused in the new minimalist design
  platform: Platform;
  category: string;
  allegation: string;
  joinedDate: string;
  location: string;
  isVerified: "verified" | "reviewing";
  caseStatus: "active" | "negotiate";
  lastUpdate: string;
}

const platformConfig = {
  facebook: { label: "Facebook business page", icon: FaFacebook },
  shopify: { label: "Shopify store", icon: FaShopify },
  website: { label: "Web domain", icon: FaGlobe },
  app: { label: "Mobile app", icon: FaMobileAlt },
};

export default function StoreCard({
  name,
  platform,
  category,
  allegation,
  joinedDate,
  location,
  isVerified,
  caseStatus,
  lastUpdate,
}: StoreCardProps) {
  const platformInfo = platformConfig[platform] || platformConfig.website;

  return (
    <div className="w-105 max-w-full overflow-hidden rounded-sm border border-[#DEDCD3] bg-white font-sans">
      {/* ---------- HEADER ---------- */}
      <div className="flex items-center justify-between bg-[#070F2B] px-4.5 py-3.5">
        <div className="flex items-center gap-1.75 text-[11px] font-semibold uppercase tracking-[0.06em] text-white">
          <AlertTriangle size={15} color="#FFFFFF" strokeWidth={2} />
          Incident record
        </div>
        <div className="text-[11px] text-white/55">Updated {lastUpdate}</div>
      </div>

      {/* ---------- SUBJECT SECTION ---------- */}
      <div className="border-b border-[#EEEDE7] px-4.5 pb-3.5 pt-4">
        <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.04em] text-[#98958A]">
          Suspect
        </div>
        <div className="text-[16px] font-semibold text-[#1F1E1B]">{name}</div>
        <div className="mt-0.5 text-[12px] text-[#6B6860]">
          {platformInfo.label} · {category}
        </div>
      </div>

      {/* ---------- INCIDENT SECTION ---------- */}
      <div className="border-b border-[#EEEDE7] px-4.5 pb-3.5 pt-4">
        <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.04em] text-[#98958A]">
          Incident
        </div>
        <div className="text-[15px] font-semibold text-[#D92243]">
          {allegation}
        </div>
        <div className="mt-0.5 text-[12px] text-[#6B6860]">
          Reported {joinedDate} · {location}
        </div>
      </div>

      {/* ---------- META STRIP ---------- */}
      <div className="flex items-center justify-between border-b border-[#EEEDE7] bg-[#FAFAF8] px-4.5 py-3">
        <div className="flex items-center gap-1.5 text-[13px] font-semibold leading-none text-[#1F1E1B]">
          {isVerified === "verified" ? (
            <>
              <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full ">
                <CheckCircle className="" color="#3B6D11" strokeWidth={3} />
              </span>
              <span>Verified</span>
            </>
          ) : (
            <>
              <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full  ">
                <Clock className="" color="#f18701" strokeWidth={3} />
              </span>
              <span>Reviewing</span>
            </>
          )}
        </div>

        <div
          className={`rounded-[6px] px-2.5 py-1 text-[11px] font-semibold capitalize leading-none ${
            caseStatus === "active"
              ? "bg-[#FAEEDA] text-[#854F0B]"
              : "bg-[#E7F6EC] text-[#166534]"
          }`}
        >
          {caseStatus}
        </div>
      </div>

      {/* ---------- ACTION ---------- */}
      <div className="p-4.5">
        <Button
          variant="outline"
          type="button"
          className="group flex w-full cursor-pointer items-center justify-center gap-1.5  border border-[#D7D5CB] bg-transparent p-2.5 text-[13px] font-semibold text-[#1F1E1B] rounded-sm transition-colors hover:bg-[#FAFAF8]"
        >
          Open case file
          <ArrowRight
            size={14}
            color="#1F1E1B"
            strokeWidth={2}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Button>
      </div>
    </div>
  );
}
