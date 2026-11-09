"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#programme", label: "Programme" },
  { href: "/register", label: "Register" },
  { href: "/#partners", label: "Partners" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="flex justify-between items-center p-2 max-w-[1000px] 2xl:p-4 mx-auto w-full 2xl:max-w-7xl">
      <div className="relative flex justify-between rounded-2xl lg:rounded-sm items-center w-full bg-[#050B06] text-white! p-2 2xl:p-3">
        {" "}
        <Link
          className="wordmark"
          href="/"
          aria-label="Ogbor Youth Tech Fest home"
        >
          <Image
            src="/l.png"
            alt=""
            width={1586}
            height={518}
            className="h-10 2xl:h-12 w-auto"
            priority
          />
        </Link>
        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className={
            menuOpen
              ? "absolute top-full left-0 right-0 z-50 mt-2 flex flex-col items-start gap-3 rounded-sm border border-white/10 bg-[#050B06] p-4 font-rounded tracking-tight shadow-2xl lg:static lg:mt-0 lg:flex-row lg:items-center lg:gap-8 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
              : "hidden gap-8 font-rounded tracking-tight lg:flex lg:items-center"
          }
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative inline-block w-full py-1 text-sm font-semibold after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100 lg:w-auto lg:py-0 2xl:text-[15px]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/#get-involved"
            onClick={() => setMenuOpen(false)}
            className="mt-1 inline-flex w-full items-center justify-center rounded-sm bg-white px-4 py-2.5 font-rounded font-bold tracking-tight text-black lg:hidden"
          >
            Register Now
          </Link>
        </nav>
        <Link
          href="/#get-involved"
          className="hidden rounded-sm cursor-pointer p-2 px-4 bg-white 2xl:px-5 2xl:py-2.5 font-rounded font-bold tracking-tight text-black lg:block"
        >
          Register Now
        </Link>
        <button
          type="button"
          className="relative flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-sm text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-current transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>
    </header>
  );
}
