export function StickyMobileCTA() {
  return (
    <div className="sticky-mobile-cta md:hidden">
      <a
        href="https://docs.google.com/forms/d/1HbzfMYDhiGR4uB10tASxELkjv7biyipcS0WEFqY5uVo/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center py-3.5 rounded-full font-bold text-base pulse-cta"
        style={{ background: "#af2801", color: "white", textDecoration: "none" }}
      >
        Unisciti a noi
      </a>
    </div>
  );
}
