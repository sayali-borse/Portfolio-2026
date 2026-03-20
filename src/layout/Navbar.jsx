const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonial", label: "Testimonial" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  return (
    // -----------Header-section
    <header>
      <nav>
        <a>SAIBO</a>

        {/* --- Desktop navbar  */}
        <div>
          {navLinks.map((links) => {
            <a>{links}</a>;
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
