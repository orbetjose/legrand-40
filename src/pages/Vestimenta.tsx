export default function Vestimenta() {
  const domain = import.meta.env.VITE_WP_DOMAIN;

  return (
    <>
      <section>
        <div className="md:max-w-6xl mx-auto px-6 md:px-0">
          <img
            src={`${domain}wp-content/uploads/2026/08/legrand-40years.png`}
            className="max-h-18 md:max-h-32 mx-auto pb-4"
            alt=""
          />
          <p className="text-center font-light text-primary-gray md:text-2xl">
            AGENDA PRELIMINAR Y CÓDIGOS DE VESTIMENTA
          </p>
          <p className="text-primary-gray font-semibold text-center">
            Convención 40 Años Laboratorios Legrand - Sofitel Barú
          </p>
        </div>
      </section>
      <section className="py-8">
        <div className="md:max-w-xl mx-auto">
          <div className="flex items-center gap-4 md:max-w-md mx-auto px-4 md:px-0">
            <div className="md:w-50 w-65 h-25 md:h-20 bg-size-[100%_100%] bg-no-repeat relative">
              <img
                className="absolute"
                src={`${domain}wp-content/uploads/2026/08/bg-gold.png`}
                alt=""
              />
              <p className="text-primary-gold font-semibold leading-5 absolute top-1/2 left-1/2 translate-middle w-full pb-7 ps-3 md:pb-0">
                DÍA 1: 3 DE SEP
              </p>
            </div>
            <p className="font-semibold text-primary-gray leading-5">
              Iniciaremos nuestro viaje conectándonos como equipo antes de
              sumergirnos en la historia de nuestra compañía.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 pt-8 ">
            <div className=" overflow-hidden bg-white box-shadow-custom w-72 md:w-auto h-auto mx-auto">
              <div className="relative">
                <img
                  src={`${domain}wp-content/uploads/2026/08/card-1.png`}
                  className=""
                  alt=""
                />
              </div>
              <div className="p-4 border-l border-b border-r border-[#eaeaea] rounded-b-2xl md:min-h-114">
                <p className=" py-2 font-semibold ">Mañana y Mediodía:</p>
                <p className="pb-4 font-light">
                  La Ruta: Experiencia náutica de bienvenida al aire libre,
                  seguida del check-in y almuerzo en el hotel.
                </p>
                <p className=" py-2 font-semibold ">Código de vestimenta</p>
                <p className="pb-4 font-light">
                  (Ropa de Playa / Resort): Prendas muy frescas, ligeras y
                  transpirables (lino, algodón).
                </p>
                <p className="pb-4 font-light">
                  Es indispensable el uso de sombrero, gafas de sol, protección
                  solar y calzado muy cómodo (sandalias o zapatos planos).
                </p>
              </div>
            </div>
            <div className=" overflow-hidden bg-white box-shadow-custom w-72 md:w-auto h-auto  mx-auto">
              <div className="relative">
                <img
                  src={`${domain}wp-content/uploads/2026/08/card-2.png`}
                  className=""
                  alt=""
                />
              </div>
              <div className="p-4 border-l border-b border-r border-[#eaeaea] rounded-b-2xl md:min-h-114">
                <p className=" py-2 font-semibold ">Noche:</p>
                <p className="pb-4 font-light">
                  La Ruta: Apertura oficial del evento, recorrido inmersivo y
                  una cena de celebración muy especial a varios tiempos.
                </p>
                <p className=" py-2 font-semibold ">Código de vestimenta</p>
                <p className="pb-4 font-light">
                  (Tropical Chic - Elegancia de clima cálido):
                </p>
                <p className="pb-4 font-light">
                  “Usa calzado apto para caminar sobre la arena”.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4">
        <div className="md:max-w-4xl mx-auto">
          <div className="flex items-center gap-4 md:max-w-md mx-auto px-4 md:px-0">
            <div className="w-50 h-26 bg-size-[100%_100%] bg-no-repeat  relative">
              <img
                className="absolute"
                src={`${domain}wp-content/uploads/2026/08/bg-gold.png`}
                alt=""
              />
              <p className="text-primary-gold font-semibold leading-5 absolute top-1/2 left-1/2 translate-middle w-full ps-5 pe-3 pb-4 md:pb-0">
                DÍA 2: 4 DE SEP
              </p>
            </div>
            <p className="font-semibold text-primary-gray leading-5">
              Un día de inspiración, donde descubriremos hacia dónde va el
              futuro de la salud.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 pt-8 ">
            <div className=" overflow-hidden bg-white box-shadow-custom w-72 md:w-auto h-auto  mx-auto">
              <div className="relative">
                <img
                  src={`${domain}wp-content/uploads/2026/08/card-3.png`}
                  className=""
                  alt=""
                />
              </div>
              <div className="p-4 border-l border-b border-r border-[#eaeaea] rounded-b-2xl md:min-h-118">
                <p className=" py-2 font-semibold ">Mañana</p>
                <p className="pb-4 font-light">
                  La Ruta: Sesión central inmersiva en nuestro Salón Principal.
                  Tendremos invitados especiales y grandes revelaciones.
                </p>
                <p className=" py-2 font-semibold ">Código de vestimenta</p>
                <p className="pb-4 font-light">
                  Smart Casual / Business Casual de clima cálido): Nota
                  importante: Esta jornada será en salón cerrado con aire
                  acondicionado.
                </p>
                <p className="pb-4 font-light">
                  Te sugerimos llevar una prenda de abrigo ligera (blazer,
                  suéter delgado o pashmina).
                </p>
              </div>
            </div>
            <div className=" overflow-hidden bg-white box-shadow-custom w-72 md:w-auto h-auto  mx-auto">
              <div className="relative">
                <img
                  src={`${domain}wp-content/uploads/2026/08/card-4.png`}
                  className=""
                  alt=""
                />
              </div>
              <div className="p-4 border-l border-b border-r border-[#eaeaea] rounded-b-2xl md:min-h-118">
                <p className=" py-2 font-semibold ">Tarde:</p>
                <p className="pb-4 font-light">
                  La Ruta: Almuerzo, sesiones dinámicas y tiempo libre para
                  disfrutar del hotel.
                </p>
                <p className=" py-2 font-semibold ">Código de vestimenta</p>
                <p className="pb-4 font-light">
                  Casual Resort (Ropa cómoda de día).
                </p>
              </div>
            </div>
            <div className=" overflow-hidden bg-white box-shadow-custom w-72 md:w-auto h-auto  mx-auto">
              <div className="relative">
                <img
                  src={`${domain}wp-content/uploads/2026/08/card-5.png`}
                  className=""
                  alt=""
                />
              </div>
              <div className="p-4 border-l border-b border-r border-[#eaeaea] rounded-b-2xl md:min-h-118">
                <p className=" py-2 font-semibold ">Noche:</p>
                <p className="pb-4 font-light">
                  La Ruta: Cierre de la jornada con un encuentro bajo las
                  estrellas y frente al mar.
                </p>
                <p className=" py-2 font-semibold ">Código de vestimenta</p>
                <p className="pb-4 font-light">
                  (Fiesta Blanca): Prendas blancas, doradas o beige, Ropa
                  ligera, Elegante y completamente blanca (lino, algodón). Usa
                  accesorios dorados y rojos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="md:max-w-sm mx-auto">
          <div className="flex items-center gap-4 md:max-w-md mx-auto px-4 md:px-0">
            <div className="w-50 h-22 bg-size-[100%_100%] bg-no-repeat relative">
              <img
                className="absolute"
                src={`${domain}wp-content/uploads/2026/08/bg-gold.png`}
                alt=""
              />
              <p className="text-primary-gold font-semibold leading-5 absolute top-1/2 left-1/2 translate-middle w-full ps-3 md:ps-4">
                DÍA 3: 5 DE SEP
              </p>
            </div>
            <p className="font-semibold text-primary-gray leading-5">
              Un día de inspiración, donde descubriremos hacia dónde va el
              futuro de la salud.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:gap-12 pt-8 ">
            <div className=" overflow-hidden bg-white box-shadow-custom w-72 md:w-auto h-auto mx-auto">
              <div className="relative">
                <img
                  src={`${domain}wp-content/uploads/2026/08/card-3.png`}
                  className=""
                  alt=""
                />
              </div>
              <div className="p-4 border-l border-b border-r border-[#eaeaea] rounded-b-2xl md:min-h-80">
                <p className=" py-2 font-semibold ">
                  Mañana, hasta las 02:00 P.M.
                </p>
                <p className="pb-4 font-light">Lorem ipsum</p>
                <p className=" py-2 font-semibold ">Código de vestimenta</p>
                <p className="pb-4 font-light">
                  (Casual Cómodo / Ropa de Viaje): Prendas prácticas y relajadas
                  para interactuar en los espacios finales y estar listos para
                  el viaje de regreso a casa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-4 pb-8">
        <div className="bg-primary-red rounded-full w-fit mx-auto px-6 py-1">
            <a href="https://wa.me/573004860661" className="font-semibold text-white text-xl">Más información</a>
        </div>

      </section>
    </>
  );
}
