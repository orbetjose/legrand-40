import { useState } from "react";

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  documento: string;
  nombre: string;
}
interface Ticket {
  nombre: string;
  pdf: string;
}

const ModalTiquetes = ({ isOpen, onClose }: TicketModalProps) => {
  const domain = import.meta.env.VITE_WP_DOMAIN;
  const [formData, setFormData] = useState<FormData>({
    documento: "",
    nombre: "",
  });
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Limpiar errores cuando el usuario vuelve a escribir
    if (status === "error") {
      setStatus("idle");
      setError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("loading");
    setError("");

    try {
      const response = await fetch(`${domain}wp-json/tickets/v1/lookup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          documento: formData.documento,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setError(
          data.message ||
            "No encontramos un tiquete asociado a este documento.",
        );
        return;
      }

      setStatus("success");
      setTickets(data.tickets);
    } catch (error) {
      console.error(error);

      setStatus("error");
      setError(
        "Ocurrió un error al consultar el tiquete. Inténtalo nuevamente.",
      );
    }
  };

  const handleDownload = (pdfUrl: string) => {
    const link = document.createElement("a");

    link.href = pdfUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClose = () => {
    setFormData({
      documento: "",
      nombre: "",
    });

    setStatus("idle");
    setError("");

    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-md rounded-xl bg-white p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cerrar */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4"
          aria-label="Cerrar"
        >
          ✕
        </button>

        {/* FORMULARIO */}
        {status !== "success" && (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">Descarga tu tiquete</h2>

              <p className="mt-2 font-light">
                Ingresa tus datos para consultar tu tiquete.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Documento */}
              <div>
                <label htmlFor="documento" className="mb-1 block font-light">
                  Número de documento
                </label>

                <input
                  id="documento"
                  name="documento"
                  type="text"
                  value={formData.documento}
                  onChange={handleChange}
                  required
                  className="w-full rounded border p-3"
                  placeholder="Ej. 123456789"
                />
              </div>

              {/* Nombre */}
              <div>
                <label htmlFor="nombre" className="mb-1 block font-light">
                  Nombre y apellido
                </label>

                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full rounded border p-3"
                  placeholder="Ej. Juan"
                />
              </div>

              {/* Error */}
              {status === "error" && (
                <div className="rounded bg-red-50 p-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded bg-black p-3 text-white disabled:opacity-50 font-semibold"
              >
                {status === "loading" ? "Consultando..." : "Consultar tiquete"}
              </button>
            </form>
          </>
        )}

        {/* ÉXITO */}
        {status === "success" && (
          <div className="py-8 text-center">
            <h2 className="text-2xl font-bold pb-4">¡Hola, {tickets[0].nombre}!</h2>
            <p className="font-light">
              Encontramos {tickets.length}{" "}
              {tickets.length === 1 ? "tiquete" : "tiquetes"}.
            </p>

            <div>
              {tickets.map((ticket, index) => (
                <div key={index} className="mt-4">
                  <button
                    type="button"
                    onClick={() => handleDownload(ticket.pdf)}
                    className="w-full rounded bg-black p-3 text-white"
                  >
                    Descargar tiquete # {index + 1}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalTiquetes;
