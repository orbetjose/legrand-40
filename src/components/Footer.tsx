import { useEffect, useState } from "react";
import { getMenuInfo } from "../helpers/wp";
import { type Menu } from "../types";

export default function Footer() {
  const [menuItems, setMenuItems] = useState<Menu[]>([]);
  const domain = import.meta.env.VITE_WP_DOMAIN;

  useEffect(() => {
    getMenuInfo("navbar")
      .then((data) => setMenuItems(data))
      .catch((error) => console.error("Error fetching menu:", error));
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <footer>
      <section
        className="bg-center bg-cover"
        style={{
          backgroundImage: `url(${domain}wp-content/uploads/2026/08/bg-footer.png)`,
        }}
      >
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 pt-8 pb-14 text-white md:max-w-6xl 3xl:max-w-7xl mx-auto relative px-4 md:px-0">
          <div className="flex items-center h-full">
            <img
              src={`${domain}wp-content/uploads/2026/08/logo-footer.png`}
              className="h-12 md:h-16"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-lg uppercase pb-4">
              NAVEGACIÓN
            </span>
            <ul className="font-light">
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
          <div className="flex flex-col">
            <span className="font-semibold text-lg uppercase pb-4">
              SÍGUENOS
            </span>
            <div className="flex items-center gap-4">
              <a
                href="https://www.youtube.com/@LaboratoriosLegrand"
                target="_blank"
              >
                <img
                  src={`${domain}wp-content/uploads/2026/08/yt-icon.png`}
                  className="h-7"
                  alt=""
                />
              </a>
              <a href="https://www.facebook.com/people/Laboratorios-Legrand/100076492012197/">
                <img
                  src={`${domain}wp-content/uploads/2026/08/icono-face.png`}
                  className="h-7"
                  alt=""
                />
              </a>
              <a href="https://www.tiktok.com/@lablegrand_">
                <img
                  src={`${domain}wp-content/uploads/2026/08/icono-tik.png`}
                  className="h-7"
                  alt=""
                />
              </a>
              <a
                href="https://www.linkedin.com/company/laboratorios-legrand-s.a"
                target="_blank"
              >
                <img
                  src={`${domain}wp-content/uploads/2026/08/linkedin-icon.png`}
                  className="h-7"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-lg uppercase pb-4">
              Contacto
            </span>
            <div className="flex flex-col font-light text-sm">
              <span>dvergara@laboratorioslegrand.com</span>
              <span>+57 300 486 0661</span>
              <span>Bogotá - Colombia</span>
            </div>
          </div>
          <p className="absolute right-1/2 translate-x-1/2 md:translate-x-0 md:right-0 bottom-2 font-light text-right text-sm leading-5">
            <span className="font-semibold">40 Años innovando</span> <br />
            para un mejor mañana.
          </p>
        </div>
      </section>
    </footer>
  );
}
