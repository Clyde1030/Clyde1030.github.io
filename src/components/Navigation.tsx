import { NavLink } from "@/components/NavLink";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [{
    name: "Home",
    path: "/"
  }, {
    name: "About",
    path: "/about"
  }, {
    name: "Projects",
    path: "/projects"
  }, {
    name: "Contact",
    path: "/contact"
  }];

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    if (path === "/about") {
      e.preventDefault();
      if (location.pathname === "/" || location.pathname === "/about") {
        // Already on home page, scroll to about section
        const aboutSection = document.getElementById('about-section');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
          navigate("/about", { replace: true });
        }
      } else {
        // Navigate to home and scroll to about
        navigate("/");
        setTimeout(() => {
          const aboutSection = document.getElementById('about-section');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
            navigate("/about", { replace: true });
          }
        }, 100);
      }
    }
  };

  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto py-4 flex justify-between items-center px-px">
        <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-indigo-600">Crafting Intelligence from Data</div>
        <ul className="flex gap-8">
          {navItems.map(item => <li key={item.path}>
              <NavLink 
                to={item.path} 
                end={item.path === "/"} 
                className="text-muted-foreground hover:text-foreground transition-colors" 
                activeClassName="text-primary font-semibold"
                onClick={(e) => handleNavClick(e, item.path)}
              >
                {item.name}
              </NavLink>
            </li>)}
        </ul>
      </div>
    </nav>;
};
export default Navigation;