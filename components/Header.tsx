"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, Home, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "#accueil", label: "Accueil", icon: Home },
  { href: "#contact", label: "Contact", icon: Mail },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md shadow-lg shadow-primary-100/50 border-b border-primary-100"
          : "bg-white/80 backdrop-blur-sm border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo + Name */}
          <a
            href="#accueil"
            className="flex items-center gap-3 group transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
              <Image
                src="/images/ad-majoribus.webp"
                alt="Blason Mobutu Zemanga"
                width={48}
                height={48}
                className="relative w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full ring-2 ring-primary-200/50 group-hover:ring-primary-400 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-base sm:text-lg font-bold bg-gradient-to-r from-primary-700 via-accent-600 to-primary-700 bg-clip-text text-transparent tracking-wide">
                MOBUTU ZEMANGA
              </span>
              <span className="hidden sm:block font-motto text-[10px] italic text-primary-600/70">
                Ad majoribus dei auxilio
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative px-4 py-2 text-sm font-semibold text-gray-700 hover:text-primary-700 transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-300" />
                    <span>{link.label}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
                </a>
              );
            })}
            <Button
              asChild
              className="ml-2 bg-gradient-to-r from-purple-300 to-orange-400 hover:from-orange-800 hover:to-orange-900 text-white shadow-lg hover:shadow-xl hover:shadow-primary-300/50 hover:scale-105 transition-all duration-300 gap-2 font-bold"
            >
              <a href="#contact" className="text-white font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Nous contacter</span>
              </a>
            </Button>
          </nav>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden hover:bg-primary-50 transition-colors">
                <Menu className="h-6 w-6 text-primary-600" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              aria-describedby={undefined}
              className="flex flex-col p-0 w-[300px] sm:w-[350px]"
            >
              {/* Header with branding */}
              <SheetHeader className="border-b border-gray-100 bg-gradient-to-br from-primary-100 via-accent-50 to-white p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10"></div>
                <div className="relative flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full blur opacity-40"></div>
                    <Image
                      src="/images/ad-majoribus.webp"
                      alt="Blason"
                      width={56}
                      height={56}
                      className="relative w-14 h-14 object-contain rounded-full bg-white p-1 shadow-lg"
                    />
                  </div>
                  <div>
                    <SheetTitle className="font-heading text-lg tracking-wide bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                      MOBUTU ZEMANGA
                    </SheetTitle>
                    <p className="font-motto text-xs italic text-primary-600/80 mt-0.5">
                      Ad majoribus dei auxilio
                    </p>
                  </div>
                </div>
              </SheetHeader>

              {/* Navigation links */}
              <nav className="flex-1 px-4 py-6 bg-gradient-to-b from-white to-gray-50">
                <div className="space-y-2">
                  {navLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <SheetClose asChild key={link.href}>
                        <a
                          href={link.href}
                          className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 hover:text-primary-700 transition-all duration-300 group border border-transparent hover:border-primary-200 hover:shadow-md hover:scale-[1.02]"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center group-hover:from-primary-200 group-hover:to-accent-200 transition-all duration-300 group-hover:scale-110">
                            <Icon className="w-5 h-5 text-primary-600 group-hover:text-accent-600 transition-colors" />
                          </div>
                          <span className="text-base font-semibold flex-1">
                            {link.label}
                          </span>
                        </a>
                      </SheetClose>
                    );
                  })}
                </div>

                <div className="my-6 relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                  </div>
                </div>

                <SheetClose asChild>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                    size="lg"
                  >
                    <a
                      href="#contact"
                    >
                      <Mail className="w-4 h-4" />
                      Nous contacter
                    </a>
                  </Button>
                </SheetClose>
              </nav>

              {/* Footer */}
              <SheetFooter className="border-t border-gray-200 bg-gradient-to-br from-gray-50 to-primary-50/30 px-6 py-5">
                <div className="w-full text-center">
                  <p className="text-xs font-medium bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                    Mobutu Zemanga
                  </p>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
