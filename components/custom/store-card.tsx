import {
  FaFacebook,
  FaShopify,
  FaGlobe,
  FaMobileAlt,
  FaExclamationTriangle,
} from "react-icons/fa";
import { Button } from "../ui/button";
import MiniNavbar from "./mini-navbar";

type Platform = "facebook" | "shopify" | "website" | "app";

interface StoreCardProps {
  name: string;
  logo: string;
  platform: Platform;
  category: string;
  allegation: string;
  joinedDate: string;
  location: string;
}

const platformConfig = {
  facebook: { label: "Facebook", icon: FaFacebook },
  shopify: { label: "Shopify", icon: FaShopify },
  website: { label: "Web Domain", icon: FaGlobe },
  app: { label: "Mobile App", icon: FaMobileAlt },
};

export default function StoreCard({
  name,
  logo,
  platform,
  category,
  allegation,
  joinedDate,
  location,
}: StoreCardProps) {
  const platformInfo = platformConfig[platform];
  const PlatformIcon = platformInfo.icon;

  return (
    <div className="group relative flex w-full flex-col border border-zinc-300 bg-white p-4.5 transition-all duration-300 hover:border-zinc-800 hover:shadow-[0_4px_20px_rgb(0,0,0,0.08)]">
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 shrink-0 rounded-sm border border-zinc-200 bg-zinc-50 p-0.5">
          <img
            src={logo}
            alt={name}
            className="h-full w-full object-cover mix-blend-multiply grayscale-80 contrast-125"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h2
            className="truncate text-base font-bold tracking-tight text-zinc-950"
            title={name}
          >
            {name}
          </h2>

          <div className="mt-0.5 flex items-center gap-1.5 text-zinc-500">
            <PlatformIcon size={11} className="shrink-0" />
            <span className="truncate font-mono text-[10px] font-semibold uppercase tracking-wider">
              {platformInfo.label}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 border-l-[3px] border-red-700 pl-3">
        <span className="flex items-center gap-1.5 font-sans text-[10px] font-extrabold tracking-widest text-red-700 uppercase">
          <FaExclamationTriangle size={10} />
          Flagged Incident
        </span>

        <p className="mt-1 text-sm font-semibold leading-snug text-zinc-950 line-clamp-2">
          {allegation}
        </p>
      </div>

      <div className="flex-1" />

      <div className="mt-5 flex items-end justify-between border-t border-zinc-200 pt-3.5">
        <div className="flex flex-col font-sans text-[11px] leading-normal">
          <span className="font-bold text-zinc-900 truncate max-w-35">
            {category}
          </span>
          <span className="mt-0.5 font-mono text-[10px] font-medium text-zinc-500">
            {location} • {joinedDate}
          </span>
        </div>

        <Button
          variant={"outline"}
          type="button"
          className="flex cursor-pointer shrink-0 items-center gap-1 font-sans text-xs font-bold text-zinc-900 transition-colors hover:text-red-700"
        >
          Open Case{" "}
          <span className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Button>
      </div>
    </div>
  );
}
