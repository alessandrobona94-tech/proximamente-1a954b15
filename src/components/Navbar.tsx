import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";

const navItems = [
  { label: "Chi siamo", href: "/#chi-siamo" },
  { label: "Cosa facciamo", href: "/#cosa-facciamo" },
  { label: "Manifesto", href: "/manifesto" },
  { label: "Convenzioni", href: "/convenzioni" },
  { label: "Eventi", href: "/#eventi" },
  { label: "Contatti", href: "/#contatti" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return location.pathname === "/" && location.hash === href.slice(1);
    return location.pathname === href;
  };

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 flex justify-between items-center px-5 md:px-8 h-[68px]"
        style={{
          background: "rgba(251,249,246,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(175,40,1,0.08)",
        }}
      >
        <Link to="/" className="flex items-center gap-3 no-underline">
          <img alt="ProXimaMenTe Logo" className="h-9 md:h-10 w-auto" src="/assets/logo.svg" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors duration-200 min-h-[44px] flex items-center"
              style={{
                color: isActive(item.href) ? "#af2801" : "#5a413a",
                fontWeight: isActive(item.href) ? 700 : 500,
              }}
            >
              {item.label}
            </a>
          ))}
          <div style={{ width: 1, height: 20, background: "rgba(175,40,1,0.15)" }} />
          <a
            href="/#unisciti"
            className="px-5 py-2 rounded-full text-sm font-bold transition-opacity hover:opacity-90 min-h-[44px] flex items-center"
            style={{ background: "#af2801", color: "white", textDecoration: "none" }}
          >
            Unisciti a noi
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 min-w-[44px] min-h-[44px] items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: "#1b1c1a",
              transform: menuOpen ? "translateY(8px) rotate(45deg)" : "",
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: "#1b1c1a",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-0.5 transition-all duration-300"
            style={{
              background: "#1b1c1a",
              width: menuOpen ? "1.5rem" : "1rem",
              transform: menuOpen ? "translateY(-8px) rotate(-45deg)" : "",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed top-[68px] left-0 right-0 z-40 flex flex-col px-5 py-6 gap-4 md:hidden"
          style={{
            background: "rgba(251,249,246,0.98)",
            borderBottom: "1px solid rgba(175,40,1,0.1)",
            backdropFilter: "blur(12px)",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-medium text-lg min-h-[44px] flex items-center"
              style={{
                color: isActive(item.href) ? "#af2801" : "#1b1c1a",
                fontWeight: isActive(item.href) ? 700 : 500,
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#unisciti"
            onClick={() => setMenuOpen(false)}
            className="inline-block px-6 py-3 rounded-full font-bold text-center mt-2 min-h-[44px]"
            style={{ background: "#af2801", color: "white", textDecoration: "none" }}
          >
            Unisciti a noi
          </a>
        </div>
      )}
    </>
  );
}
