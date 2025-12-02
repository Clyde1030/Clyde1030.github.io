import { NavLink } from "@/components/NavLink";
const Navigation = () => {
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
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto py-4 flex justify-between items-center px-px">
        <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-indigo-600">Crafting Intelligence from Data</div>
        <ul className="flex gap-8">
          {navItems.map(item => <li key={item.path}>
              <NavLink to={item.path} end={item.path === "/"} className="text-muted-foreground hover:text-foreground transition-colors" activeClassName="text-primary font-semibold">
                {item.name}
              </NavLink>
            </li>)}
        </ul>
      </div>
    </nav>;
};
export default Navigation;