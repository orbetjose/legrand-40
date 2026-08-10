import { useState, useEffect } from "react";

export default function Home() {
  const info = [
    {
      image: "wp-content/uploads/2026/08/tiquetes-image.png",
      title: "TIQUETES",
      link: "#",
    },
    {
      image: "wp-content/uploads/2026/08/vestimenta-image.png",
      title: "CÓDIGO DE VESTIMENTA",
      link: "codigo-de-vestimenta",
    },
    {
      image: "wp-content/uploads/2026/08/horarios-image.png",
      title: "HORARIOS",
      link: "#",
    },
  ];
  const faqs = [
    {
      title: "¿El hospedaje está incluido?",
      description: "Sí. El hospedaje está incluido durante las fechas correspondientes al evento.",
    },
    {
      title: "¿Puedo llevar un acompañante?",
      description: "El acceso al evento es exclusivo para la persona invitada, por lo que no es posible asistir al evento con un acompañante. Sin embargo, tu acompañante puede viajar contigo y disfrutar de la ciudad sin ningún inconveniente a partir de la noche del 5 de [mes]. Además, contará con una tarifa especial en el hotel durante su estadía.",
    },
    {
      title: "¿Habrá transporte desde el aeropuerto hasta el hotel?",
      description: "Sí. El transporte está incluido y contempla el traslado de ida y regreso entre el aeropuerto y el hotel: Aeropuerto → Hotel → Aeropuerto.",
    }
  ];
  const cardsPrimary = [
    {
      image: "wp-content/uploads/2026/08/tecnologica-image.png",
      icon: "wp-content/uploads/2026/08/icon-tecnologia.png",
      title: "Calidad",
      title_red: "Tecnológica",
      description: "Innovación y excelencia integradas en nuestro ADN.",
    },
    {
      image: "wp-content/uploads/2026/08/humana-image.png",
      icon: "wp-content/uploads/2026/08/icon-humana.png",
      title: "Calidad Humana",
      title_red: "Humana",
      description: "Empatia, respeto y colaboración que nos fortalecen.",
    },
    {
      image: "wp-content/uploads/2026/08/vida-image.png",
      icon: "wp-content/uploads/2026/08/icon-vida.png",
      title: "Calidad DE",
      title_red: "VIDA",
      description: "Compromiso integral con el bienestar de las personas.",
    },
  ];

  const cardsSecondary = [
    {
      image: "wp-content/uploads/2026/08/emocion-image.png",
      title: "EMOCIÓN",
      subtitle: "El latido que nos conecta",
      description: "La base inquebrantable de nuestro legado.",
    },
    {
      image: "wp-content/uploads/2026/08/tecnologia-image.png",
      title: "TECNOLOGÍA",
      subtitle: "La capacidad que nos impulsa",
      description:
        "La infraestructura que nos sostiene y garantiza la experiencia.",
    },
    {
      image: "wp-content/uploads/2026/08/innovacion-image.png",
      title: "INNOVACIÓN",
      subtitle: "Crear soluciones para el mañana.",
      description:
        "El circulo Legrand en acción. Adaptarnos, crear y abrir nuevos horizontes.",
    },
    {
      image: "wp-content/uploads/2026/08/ciencia-image.png",
      title: "CIENCIA",
      subtitle: "Un legado que continúa escribiéndose.",
      description:
        "El origen y la calidad humana. La ciencia conectada con el corazón.",
    },
  ];
  const domain = import.meta.env.VITE_WP_DOMAIN;

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const handleToggle = (id: number) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");

    const update = () => setIsMobile(media.matches);

    update(); // Estado inicial

    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <>
      <section className="relative ">
        <div className="flex justify-between items-center md:max-w-5xl mx-auto md:min-h-90 3xl:h-120 px-4 md:px-0">
          <div className="md:w-2/5 text-primary-gray pb-4 md:pb-0">
            <img
              src={`${domain}wp-content/uploads/2026/08/legado-image.png`}
              className="h-12 md:h-18"
              alt=""
            />
            <h2 className="uppercase pt-4 pb-8 font-light text-lg">
              Una historia que{" "}
              <span className="text-primary-red font-montgar capitalize text-xl">
                trasciende
              </span>
            </h2>
            <p className="font-light">
              <span className="font-semibold">40 Años</span> de innovación,
              ciencia y compromiso con el bienestar de las personas. Un legado
              que seguimos construyendo juntos.
            </p>
          </div>

          <img
            src={`${domain}wp-content/uploads/2026/08/imagen-principal.png`}
            className="md:max-h-90 3xl:max-h-120 absolute right-0 3xl:min-w-200 3xl:object-cover hidden md:block"
            alt="Imagen principal"
          />
          <img
            src={`${domain}wp-content/uploads/2026/08/legrand-40years.png`}
            className="absolute right-0 md:right-16 bottom-4 max-h-18 md:max-h-40"
            alt=""
          />
        </div>
        <img
          src={`${domain}wp-content/uploads/2026/08/linea-image.png`}
          className="w-full"
          alt=""
        />
        <img
          src={`${domain}wp-content/uploads/2026/08/arco-image.png`}
          className="mx-auto"
          alt=""
        />
      </section>
      <section className="pt-14 pb-20" id="informacion">
        <div className="md:max-w-6xl mx-auto ps-4 md:ps-0">
          <h2 className="text-center uppercase pb-8 font-light text-primary-gray text-xl">
            Informacion{" "}
            <span className="text-primary-red font-semibold">importante</span>
          </h2>
          <div className="flex gap-4 md:gap-0 justify-evenly items-center h-full overflow-x-auto md:overflow-visible scrollbar-hide">
            {info.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="relative w-72 h-96 shrink-0 md:w-1/4 md:h-100 flex items-end justify-center hover:scale-101 transition-all duration-200 cursor-pointer"
              >
                <img
                  src={domain + item.image}
                  alt=""
                  className="absolute h-96 md:h-100 w-full object-cover rounded-xl"
                />
                <span className="text-center text-white relative pb-4 font-semibold text-xl">
                  {item.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="md:max-w-2xl mx-auto px-4 md:px-0">
          <div className="border border-[#eaeaea] rounded-xl">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  id={String(index)}
                  key={index}
                  className={`${index + 1 < faqs.length ? "border-b border-[#eaeaea]" : ""} px-6 py-2 overflow-hidden cursor-pointer accordion duration-200`}
                  onClick={() => handleToggle(index)}
                >
                  <div className="flex items-center justify-between font-light">
                    <p className="text-lg text-primary-gray">{faq.title}</p>
                    <img
                      src={`${domain}wp-content/uploads/2026/08/arrow-down.png`}
                      className={`${isOpen ? "rotate-180" : ""} h-3 transition-all duration-100`}
                      alt=""
                    />
                  </div>

                  <p
                    className={`description-accordion text-primary-gray ${isOpen ? "active" : ""}`}
                  >
                    {faq.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-14" id="evento">
        <div className="relative h-100 md:h-70">
          <img
            src={`${domain}wp-content/uploads/2026/08/banner-sofitel.png`}
            className="absolute w-full h-full object-cover object-right md:object-center"
            alt=""
          />
          <div className="md:max-w-6xl 3xl:max-w-7xl mx-auto relative flex flex-col md:flex-row justify-evenly md:justify-between text-white items-center h-full">
            <div className="md:w-1/3">
              <h4 className="text-4xl font-minion text-center md:text-left">
                SOFITEL BARÚ CALABLANCA
              </h4>
              <p className="font-minion text-xl text-center md:text-left">
                Cartagena de Indias, Colombia
              </p>
              <div className="flex justify-center md:justify-start gap-4 pt-4">
                <div className="flex bg-primary-red rounded-md px-3 py-1 font-semibold gap-4 items-center hover:bg-primary-red/70 transition-all duration-200 cursor-pointer">
                  <a href="" className="">
                    Ver ubicación
                  </a>
                  <img
                    src={`${domain}wp-content/uploads/2026/08/location-icon.png`}
                    className="h-4"
                    alt=""
                  />
                </div>

                <a
                  target="_blank"
                  href="https://share.google/ElJ24UuUzREIapt4S"
                  className="px-3 py-1 border rounded-md font-light"
                >
                  ¿Cómo llegar?
                </a>
              </div>
            </div>
            <div className="md:min-w-100">
              <p className="text-center text-5xl md:text-6xl font-semibold">
                3 al 5
              </p>
              <p className="font-light rounded-md border px-2 py-1 mt-2 w-fit mx-auto text-lg">
                Septiembre de 2026
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="md:max-w-5xl 3xl:max-w-6xl mx-auto">
          <h4 className="uppercase text-center font-light text-xl text-primary-gray">
            nuestro{" "}
            <span className="text-primary-red font-semibold">proposito</span>{" "}
            <br />
            <span className="md:text-2xl">
              LAS <span className="text-primary-red font-semibold">3C</span> QUE
              NOS DEFINEN
            </span>
          </h4>

          <div className="flex md:grid grid-cols-3 gap-4 md:gap-12 pt-8 overflow-x-auto md:overflow-visible scrollbar-hide">
            {cardsPrimary.map((item, index) => (
              <div
                key={index}
                className=" overflow-hidden w-72 md:w-auto h-auto shrink-0"
              >
                <div className="relative">
                  <img src={domain + item.image} className="" alt="" />
                  <img
                    className="w-full"
                    src={`${domain}wp-content/uploads/2026/08/separator-card.png`}
                    alt=""
                  />
                  <img
                    className="absolute left-2 -bottom-6 h-14"
                    src={domain + item.icon}
                    alt=""
                  />
                </div>
                <div className="p-4 border-l border-b border-r border-[#eaeaea] rounded-b-2xl text-primary-gray">
                  <p className="uppercase py-4 font-light">
                    {item.title}{" "}
                    <span className="text-primary-red font-semibold">
                      {item.title_red}
                    </span>
                  </p>
                  <p className="pb-4 font-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-3xl md:rounded-full flex flex-col md:flex-row items-center justify-center md:justify-evenly box-shadow-custom mt-4 py-3 max-w-55 px-4 md:px-0 mx-auto md:max-w-full">
            <div className="flex flex-col items-center">
              <img
                src={`${domain}wp-content/uploads/2026/08/innovacion.png`}
                className="h-12"
                alt=""
              />
              <p className="pt-2 font-light text-primary-gray text-center md:text-left">
                Innovación con respaldo
              </p>
            </div>
            <img
              src={`${domain}wp-content/uploads/2026/08/separator-vertical.png`}
              className="h-20 rotate-90 md:rotate-0"
              alt=""
            />
            <div className="flex flex-col items-center">
              <img
                src={`${domain}wp-content/uploads/2026/08/relaciones.png`}
                className="h-10"
                alt=""
              />
              <p className="pt-2 font-light text-primary-gray text-center md:text-left">
                Tejiendo relaciones solidas
              </p>
            </div>
            <img
              src={`${domain}wp-content/uploads/2026/08/separator-vertical.png`}
              className="h-20 rotate-90 md:rotate-0"
              alt=""
            />
            <div className="flex flex-col items-center">
              <img
                src={`${domain}wp-content/uploads/2026/08/bienestar.png`}
                className="h-8"
                alt=""
              />
              <p className="pt-2 font-light text-primary-gray text-center md:text-left">
                Mejorando el bienestar de las personas
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="md:max-w-6xl 3xl:max-w-7xl mx-auto">
          <h4 className="uppercase text-center font-light text-primary-gray text-xl">
            EL LEGADO EN{" "}
            <span className="text-primary-red font-semibold">ACCIÓN</span>{" "}
            <br />
            <span className="md:text-2xl">LOS 4 MOMENTOS DEL EVENTO</span>
          </h4>
          <div className="flex md:grid grid-cols-4 gap-4 md:gap-12 pt-8 overflow-x-auto md:overflow-visible scrollbar-hide">
            {cardsSecondary.map((item, index) => (
              <div
                key={index}
                className=" overflow-hidden w-72 md:w-auto h-auto shrink-0"
              >
                <div className="relative">
                  <img src={domain + item.image} className="" alt="" />
                  <img
                    className="w-full"
                    src={`${domain}wp-content/uploads/2026/08/separator-card.png`}
                    alt=""
                  />
                </div>
                <div className="p-4 border-l border-b border-r border-[#eaeaea] rounded-b-2xl min-h-52 text-primary-gray">
                  <p className="uppercase py-2 font-semibold text-primary-red">
                    {item.title}{" "}
                  </p>
                  <p className="py-2 font-semibold leading-4">
                    {item.subtitle}
                  </p>
                  <p className="pb-4 font-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10" id="contacto">
        <div
          className=" bg-no-repeat bg-center  bg-size-[100%_102%] md:bg-contain h-90 md:h-45 mx-4 md:mx-0"
          style={
            isMobile
              ? {
                  backgroundImage: `url(${domain}wp-content/uploads/2026/08/bg-mobile.png)`,
                }
              : {
                  backgroundImage: `url(${domain}wp-content/uploads/2026/08/bg-white.png)`,
                }
          }
        >
          <div className="md:max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-0 md:justify-between relative h-full">
            <div className="md:pb-6 pt-4 md:pt-0">
              <img
                src={`${domain}wp-content/uploads/2026/08/legrand-40years.png`}
                className="h-24 md:h-55"
                alt=""
              />
            </div>
            <div className="md:max-w-110">
              <p className="md:w-4/5 font-light text-primary-gray text-center md:text-left text-lg md:text-xl">
                CELEBREMOS JUNTOS CUATRO DÉCADAS DE{" "}
                <span className="font-semibold">
                  CIENCIA, PASIÓN Y COMPROMISO
                </span>
                .
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="bg-primary-red rounded px-4 w-fit text-white py-1 flex items-center gap-4 hover:bg-primary-red/70 transition-all duration-200 cursor-pointer">
                <a href="#" className="font-semibold">
                  CONTÁCTANOS
                </a>
                <img
                  src={`${domain}wp-content/uploads/2026/08/arrow-right.png`}
                  className="h-4"
                  alt=""
                />
              </div>
              <div className="text-primary-gray font-light">
                <p>dvergara@laboratorioslegrand.com</p>
                <p>+57 300 486 0661</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
