import FWButtonComponent from "@/components/Button/FWButton";
import Link from "next/link";
import { CheckboxWithTextContact } from "./components/CheckboxTermsPolicy";

export default function ContactPage() {
  return (
    <main className="w-full h-[190dvh] grid gap-12 px-32 py-[135px]">
      <section>
        <h2 className="text-chocolate h-[140px] text-7xl font-semibold">
          Contáctanos
        </h2>
        <ul className="grid justify-center items-center w-full gap-56 grid-cols-4">
          <li className="w-[268px] h-[273.13px]">
            <h5 className="text-lg pb-3 font-medium">
              Horario de atención al cliente:
            </h5>
            <div className="grid gap-y-4">
              <div className="grid gap-y-1">
                <p className="text-[.875rem]">Lunes – Viernes: 11.00 – 19.00</p>
                <p className="text-[.875rem]">Hora de Guayaquil</p>
              </div>
              <div>
                <p className="text-[.875rem]">
                  Por favor, tenga en cuenta que nuestro servicio de atención al cliente está cerrado en días festivos.
                </p>
              </div>
            </div>
          </li>

          <li className="w-[268px] grid h-[273.13px]">
            <h4 className="text-xl font-medium">Contáctanos</h4>
            <div className="grid gap-y-4">
              <p className="text-[.875rem]">
                <span className="font-bold">Teléfono:</span> +593 98 419 6096
              </p>
              <p className="text-[.875rem]">
                <span className="font-bold">General inquiries:</span>{" "}
                sabatasiempresabata@gmail.com
              </p>
              <p className="text-[.875rem]">
                <span className="font-bold">Software:</span> stevdev04@gmail.com
              </p>
              <p className="text-[.875rem]">
                <span className="font-bold">Economía/Finanzas:</span>{" "}
                sabatasiempresabata@gmail.com
              </p>
              <p className="text-[.875rem]">
                <span className="font-bold">CEO/Ventas:</span> sabatasiempresabata@gmail.com
              </p>
            </div>
          </li>

          <li className="w-[268px] h-[273.13px]">
            <h4 className="text-xl pb-3 font-medium">Nuestra dirección</h4>
            <p className="text-[.875rem]">
            Carapungo, Galo Plaza Laso y Quilindaña
            </p>
          </li>

          <li className="w-[268px] h-[273.13px]">
            <h4 className="text-xl pb-3 font-medium">Síguenos</h4>
            <div className="grid gap-y-1">
              <Link className="text-[.875rem] underline" href="instagram.com">
                Instagram
              </Link>
              <Link className="text-[.875rem] underline" href="tiktok.com">
                Tik Tok
              </Link>
            </div>
          </li>
        </ul>
      </section>
      <section className="w-full flex  gap-x-12">
        <img
          loading="lazy"
          className="w-[571.5px] h-[533px]"
          src="/bg-contact.jpeg"
          alt=""
        />
        <div className="">
          <h2 className="text-chocolate h-[140px] text-4xl font-semibold">
            Envíanos un mensaje
          </h2>
          <form className="grid -translate-y-20 gap-4">
            <input
              type="name"
              placeholder="Nombre"
              className="w-full focus:outline-none h-[44px] px-3 bg-transparent border border-gray-300"
            />
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full focus:outline-none h-[44px] px-3 bg-transparent border border-gray-300"
              />
              <input
                type="phone"
                placeholder="Teléfono"
                className="w-full focus:outline-none h-[44px] px-3 bg-transparent border border-gray-300"
              />
            </div>
            <textarea
              className="w-full h-[148px] focus:outline-none px-3 bg-transparent border border-gray-300"
              name="message"
              placeholder="Mensaje"
            ></textarea>
            <div className="grid gap-4 mt-4">
                <CheckboxWithTextContact url="/information/general-terms" textUrl="Aceptar términos y condiciones" TextInformation="Aceptas nuestros términos de servicio y política de privacidad."/> 
                <CheckboxWithTextContact url="/information/privacy-policy" textUrl="Leer políticas de privacidad" TextInformation="Por favor, lee nuestras políticas de publicidad antes de la situación" /> 
            </div>
            <button className="mt-4">
              <FWButtonComponent
                width={470}
                bgOne=""
                bgTwo="#232323"
                textOne="#232323"
                textTwo="#f6f6f6"
                borderColor="#232323"
                textContent="Enviar mensaje"
              />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
