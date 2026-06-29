"use client";

import { useState, useEffect, useRef } from "react";
import {
  FaSearch,
  FaFilter,
  FaShieldAlt,
  FaClipboardList,
  FaBars,
  FaTimes,
  FaCheck,
  FaChevronDown,
} from "react-icons/fa";

export default function MiniNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktopFilterOpen, setIsDesktopFilterOpen] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // State for filter selections
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filterRef = useRef<HTMLDivElement>(null);

  // Handler to toggle selection
  const toggleFilter = (platform: string) => {
    setSelectedFilters((prev) => {
      const next = prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform];

      console.log("Current Active Filters:", next);
      return next;
    });
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setIsDesktopFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter component that accepts state and handler
  const FilterOptions = () => (
    <div className="flex flex-col">
      <div className="px-3 py-2 text-[10px] font-bold uppercase text-zinc-400">
        Platform
      </div>
      {["Facebook", "Shopify", "Website", "Mobile"].map((item) => {
        const isSelected = selectedFilters.includes(item);
        return (
          <button
            key={item}
            onClick={() => toggleFilter(item)}
            className={`flex items-center justify-between px-3 py-2 text-xs font-medium hover:bg-zinc-100 ${
              isSelected ? "text-black" : "text-zinc-700"
            }`}
          >
            {item}
            {isSelected && <FaCheck size={10} className="text-zinc-950" />}
          </button>
        );
      })}
    </div>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white transition-all duration-300 ${isScrolled ? "h-16 shadow-sm" : "h-20"}`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
          {/* LEFT: Logo + Search */}
          <div className="flex items-center gap-3 flex-1 overflow-hidden">
            <div className="flex items-center gap-2 shrink-0">
              <div className="flex h-8 w-8 items-center justify-center bg-zinc-950 text-white">
                <FaShieldAlt size={16} />
              </div>
              <span className="hidden sm:block font-sans text-sm font-black uppercase tracking-tighter text-zinc-950">
                INTEL<span className="text-red-600">SCAN</span>
              </span>
            </div>

            <div className="flex-1 max-w-xl px-3 mx-auto sm:w-fit">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaSearch
                    className="text-zinc-400 group-focus-within:text-zinc-950 transition-colors"
                    size={12}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Search records..."
                  className="w-full bg-zinc-100 border border-transparent hover:bg-zinc-200 text-sm py-2 pl-9 pr-3 rounded transition-all duration-200 focus:bg-white focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 focus:outline-none placeholder:text-zinc-400"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Actions */}
          <div className="hidden md:flex items-center gap-6 shrink-0">
            <div className="relative" ref={filterRef}>
              <button
                onClick={() => setIsDesktopFilterOpen(!isDesktopFilterOpen)}
                className={`flex items-center gap-2 border-2 px-4 py-2 text-xs font-bold uppercase transition-colors ${
                  isDesktopFilterOpen
                    ? "border-zinc-950 text-zinc-950"
                    : "border-zinc-200 text-zinc-600 hover:border-zinc-950"
                }`}
              >
                <FaFilter size={10} /> Filter{" "}
                {selectedFilters.length > 0 && `(${selectedFilters.length})`}{" "}
                <FaChevronDown size={8} />
              </button>
              {isDesktopFilterOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-zinc-200 shadow-xl p-2 z-50">
                  <FilterOptions />
                </div>
              )}
            </div>
            <button className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-950">
              Portal
            </button>
            <button className="bg-zinc-950 px-5 py-2.5 text-[11px] font-bold uppercase text-white hover:bg-red-600 transition-colors">
              Submit
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div
          className={`fixed inset-0 z-40 bg-white p-6 md:hidden overflow-y-auto shadow-xl transition-all duration-300 ${isScrolled ? "top-16" : "top-20"}`}
        >
          <div className="flex flex-col gap-6">
            <div className="border-b border-zinc-100 pb-4">
              <button
                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                className="flex w-full items-center justify-between text-sm font-bold uppercase text-zinc-900"
              >
                Filters{" "}
                {selectedFilters.length > 0 && `(${selectedFilters.length})`}
                <FaChevronDown
                  size={12}
                  className={`transition-transform ${isMobileFilterOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isMobileFilterOpen && (
                <div className="mt-4 bg-zinc-50 p-2">
                  <FilterOptions />
                </div>
              )}
            </div>
            <button className="flex items-center gap-3 py-3 border-b border-zinc-100 text-sm font-bold uppercase text-zinc-900">
              <FaClipboardList /> My Portal
            </button>
            <button className="w-full bg-zinc-950 py-4 text-sm font-bold uppercase text-white tracking-widest mt-4">
              Submit Case
            </button>
          </div>
        </div>
      )}
    </>
  );
}
