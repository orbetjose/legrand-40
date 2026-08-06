import { useEffect, useState } from "react";
import { getMenuInfo } from "../helpers/wp";
import { type Menu } from "../types";

export default function Header() {
  const domain = import.meta.env.VITE_WP_DOMAIN;
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<Menu[]>([]);

  useEffect(() => {
    getMenuInfo("navbar")
      .then((data) => setMenuItems(data))
      .catch((error) => console.error("Error fetching menu:", error));
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      closeMenu();
    }
  };

  return (
    <header className="w-full md:pb-12 md:pt-4">
      <img
        src={`${domain}wp-content/uploads/2026/08/logo-header.png`}
        className="h-10 md:ml-auto mr-6 hidden md:block"
        alt=""
      />
      <div className="mx-auto max-w-3xl 2xl:max-w-4xl  md:box-shadow-custom rounded-full py-4 relative md:bg-white">
        <nav className="flex md:justify-between md:px-10 px-4 gap-18 md:gap-0  w-full z-50 ">
          <div className=" z-50">
            <a href="/" className="flex z-50">
              <img
                className={`h-24 logo mx-auto absolute -top-4 left-0 hidden md:block`}
                src={`${domain}wp-content/uploads/2026/08/logo_40_header.png`}
                alt=""
              />
            </a>
          </div>
          <div className="hidden md:flex justify-end">
            <ul
              id="desktop-menu"
              className="items-center justify-center hidden text-sm 2xl:text-base md:flex gap-10 fancy-menu font-light uppercase text-secondary-gray"
            >
              {menuItems.map((item, index) => {
                const namesSections = item.name
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "") // Elimina acentos
                  .replace(/\s+/g, "-") // Reemplaza uno o más espacios por un guion
                  .toLowerCase();
                if (item.permalink === "#") {
                  return (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(namesSections)}
                        className="uppercase pb-1 relative cursor-pointer "
                      >
                        {item.name}
                      </button>
                    </li>
                  );
                }
                let relativePath = new URL(item.permalink).pathname;
                if (relativePath.includes("wp")) {
                  relativePath = relativePath.replace("/wp", "");
                }

                return (
                  <li key={index}>
                    <button
                      className={` pb-1 relative cursor-pointer uppercase`}
                      onClick={() => scrollToSection(namesSections)}
                    >
                      {item.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="navbar md:hidden absolute">
            <div
              className={`${menuOpen ? "open" : ""} container nav-container`}
            >
              <img
                src={`${domain}wp-content/uploads/2026/08/logo-header.png`}
                className={`${menuOpen ? "opacity-100" : "opacity-0"} h-10 top-4 left-4 object-contain md:ml-auto mr-6 md:hidden absolute z-1000 transition-all duration-300`}
                alt=""
              />
              <div className="hamburger-lines" onClick={toggleMenu}>
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </div>
              <div className="menu-items">
                <ul
                  id="mobile-menu"
                  className="items-center justify-center md:hidden text-sm  gap-4 fancy-menu uppercase font-bold  text-black"
                >
                  {menuItems.map((item, index) => {
                    const namesSections = item.name
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "") // Elimina acentos
                      .replace(/\s+/g, "-") // Reemplaza uno o más espacios por un guion
                      .toLowerCase();
                    if (item.permalink === "#") {
                      return (
                        <li key={index}>
                          <button
                            onClick={() => scrollToSection(namesSections)}
                            className="uppercase pb-1 relative cursor-pointer "
                          >
                            {item.name}
                          </button>
                        </li>
                      );
                    }
                    let relativePath = new URL(item.permalink).pathname;
                    if (relativePath.includes("wp")) {
                      relativePath = relativePath.replace("/wp", "");
                    }
                    return (
                      <li key={index}>
                        <button
                          className={` pb-1 relative cursor-pointer uppercase`}
                          onClick={() => scrollToSection(namesSections)}
                        >
                          {item.name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="spacer-fixed md:hidden"></div>
      </div>
    </header>
  );
}
