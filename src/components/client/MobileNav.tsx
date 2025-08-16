"use client";
import React from "react";
import {
  ResizeMobileNav,
  ResizeMobileNavHeader,
  ResizeMobileNavMenu,
  ResizeMobileNavToggle,
  ResizeNavbarButton,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { navItems } from "@/constants/navItems";
import WebsiteLogo from "../common/website-logo";

const MobileNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <ResizeMobileNav>
      <ResizeMobileNavHeader>
        <WebsiteLogo />
        <ResizeMobileNavToggle
          isOpen={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </ResizeMobileNavHeader>

      <ResizeMobileNavMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      >
        {navItems.map((item, idx) => (
          <a
            key={`mobile-link-${idx}`}
            href={item.link}
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative text-neutral-600 dark:text-neutral-300"
          >
            <span className="block">{item.name}</span>
          </a>
        ))}
        <div className="flex w-full flex-col gap-4">
          <ResizeNavbarButton
            onClick={() => setIsMobileMenuOpen(false)}
            variant="primary"
            className="w-full"
          >
            Login
          </ResizeNavbarButton>
          <ResizeNavbarButton
            onClick={() => setIsMobileMenuOpen(false)}
            variant="primary"
            className="w-full"
          >
            Book a call
          </ResizeNavbarButton>
        </div>
      </ResizeMobileNavMenu>
    </ResizeMobileNav>
  );
};

export default MobileNav;
