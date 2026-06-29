import {
  FaFacebook,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaExclamationTriangle,
} from "react-icons/fa";
import { Button } from "../ui/button";

type Platform = "facebook" | "shopify" | "website" | "app";

interface StoreCardProps {
  name: string;
  logo: string;
  platform: Platform;
  category: string;
  allegation: string;
  description: string;
  joinedDate: string;
  location: string;
}

const platformConfig = {
  facebook: {
    label: "Facebook",
    icon: FaFacebook,
    bg: "bg-blue-50",
  },
  shopify: {
    label: "Shopify",
    icon: FaFacebook,
    bg: "bg-green-50",
  },
  website: {
    label: "Website",
    icon: FaFacebook,
    bg: "bg-orange-50",
  },
  app: {
    label: "Mobile App",
    icon: FaFacebook,
    bg: "bg-purple-50",
  },
};

export default function StoreCard({
  name,
  logo,
  platform,
  category,
  allegation,
  description,
  joinedDate,
  location,
}: StoreCardProps) {
  const platformInfo = platformConfig[platform];
  const PlatformIcon = platformInfo.icon;

  return (
    <div className="w-full max-w-md rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Header */}
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-4">
          <div className="h-20 w-20 overflow-hidden rounded-2xl bg-gray-100">
            <img src={logo} alt={name} className="h-full w-full object-cover" />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
            <p className="mt-1 text-sm font-medium text-gray-500">{category}</p>
            <div
              className={`mt-3 inline-flex items-center gap-2 rounded-full px-3 py-1.5 ${platformInfo.bg}`}
            >
              <PlatformIcon color="blue" size={14} />
              <span className="text-sm font-medium">{platformInfo.label}</span>
            </div>
          </div>
        </div>

        <Button
          type="button"
          variant={"secondary"}
          className="shrink-0 cursor-pointer rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-700 transition hover:bg-gray-50"
        >
          View Statement
        </Button>
      </div>

      {/* Allegation */}
      <div className="mt-5">
        <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5">
          <FaExclamationTriangle size={14} className="text-red-500" />
          <span className="text-sm font-medium text-red-600">{allegation}</span>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-600">
        {description}
      </p>

      {/* Divider */}
      <div className="my-5 h-px bg-gray-100" />

      {/* Footer */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <FaCalendarAlt size={14} className="text-gray-400" />
          <span className="text-sm text-gray-600">{joinedDate}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaMapMarkerAlt size={14} className="text-gray-400" />
          <span className="text-sm text-gray-600">{location}</span>
        </div>
      </div>
    </div>
  );
}
