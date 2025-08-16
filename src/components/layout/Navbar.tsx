import {
  ResizeNavbar,
  ResizeNavbarButton,
  ResizeNavBody,
  ResizeNavItems,
} from "@/components/ui/resizable-navbar";
import { navItems } from "@/constants/navItems";
import MobileNav from "../client/MobileNav";
import { ThemeToggle } from "../ui/theme-toggle";
import WebsiteLogo from "../common/website-logo";

export const Navbar = () => {
  return (
    <ResizeNavbar>
      {/* Desktop Navigation */}
      <ResizeNavBody>
        <WebsiteLogo />
        <ResizeNavItems items={navItems} />
        <div className="flex items-center gap-2">
          <ResizeNavbarButton variant="secondary">Login</ResizeNavbarButton>
          <ThemeToggle />
        </div>
      </ResizeNavBody>

      {/* Mobile Navigation */}
      <MobileNav />
    </ResizeNavbar>
  );
};
