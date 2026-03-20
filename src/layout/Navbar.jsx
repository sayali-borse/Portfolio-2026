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
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          SAIBO
        </a>

        {/* --- Desktop navbar  */}
        <div className="flex items-center gap-1">
          <div className="glass px-2 py-1 rounded-full flex items-center gap-1 ">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground  hover:text-foreground hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {/* CTA button  */}
        <div>
          <Button></Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
