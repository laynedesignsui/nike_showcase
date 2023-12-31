//! IMAGE IMPORT
import { headerLogo } from "../assets/images";
//! ICON IMPORT
import { hamburger } from "../assets/icons";
//! CONSTANTS IMPORT
import { navLinks } from "../../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex -translate-x-8 justify-end items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="fonts-monts errat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
            <img src={hamburger} alt="" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
