import FWButtonComponent from "@/components/Button/FWButton";
import Link from "next/link";
import { CheckboxWithTextContact } from "./components/CheckboxTermsPolicy";

export default function ContactPage() {
  return (
    <main className="w-full h-[190dvh] grid gap-12 px-32 py-[135px]">
      <section>
        <h2 className="text-chocolate h-[140px] text-7xl font-semibold">
          Contacs
        </h2>
        <ul className="grid justify-center items-center w-full gap-56 grid-cols-4">
          <li className="w-[268px] h-[273.13px]">
            <h5 className="text-lg pb-3 font-medium">
              Customer service opening hours:
            </h5>
            <div className="grid gap-y-4">
              <div className="grid gap-y-1">
                <p className="text-[.875rem]">Monday – Friday: 09.00 – 17.00</p>
                <p className="text-[.875rem]">Guayaquil Time</p>
              </div>
              <div>
                <p className="text-[.875rem]">
                  Please note that our customer service is closed on Swedish
                  public holidays.
                </p>
              </div>
            </div>
          </li>

          <li className="w-[268px] grid h-[273.13px]">
            <h4 className="text-xl font-medium">Contcat us</h4>
            <div className="grid gap-y-4">
              <p className="text-[.875rem]">
                <span className="font-bold">Phone:</span> +593 99 535 8491
              </p>
              <p className="text-[.875rem]">
                <span className="font-bold">General inquiries:</span>{" "}
                info@santacruz.com
              </p>
              <p className="text-[.875rem]">
                <span className="font-bold">Software:</span> stevdev04@gmail.com
              </p>
              <p className="text-[.875rem]">
                <span className="font-bold">Economy/Finance:</span>{" "}
                info@santacruz.com
              </p>
              <p className="text-[.875rem]">
                <span className="font-bold">CEO/Sales:</span> info@santacruz.com
              </p>
            </div>
          </li>

          <li className="w-[268px] h-[273.13px]">
            <h4 className="text-xl pb-3 font-medium">Our address</h4>
            <p className="text-[.875rem]">
              Första Långgatan 4 SE-413 03 Gothenburg Sweden
            </p>
          </li>

          <li className="w-[268px] h-[273.13px]">
            <h4 className="text-xl pb-3 font-medium">Follow us</h4>
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
            Send us a message
          </h2>
          <form className="grid -translate-y-20 gap-4">
            <input
              type="name"
              placeholder="Name"
              className="w-full focus:outline-none h-[44px] px-3 bg-transparent border border-gray-300"
            />
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full focus:outline-none h-[44px] px-3 bg-transparent border border-gray-300"
              />
              <input
                type="phone"
                placeholder="Phone"
                className="w-full focus:outline-none h-[44px] px-3 bg-transparent border border-gray-300"
              />
            </div>
            <textarea
              className="w-full h-[148px] focus:outline-none px-3 bg-transparent border border-gray-300"
              name="message"
            ></textarea>
            <div className="grid gap-4 mt-4">
                <CheckboxWithTextContact url="/information/general-terms" textUrl="Accept terms and conditions" TextInformation="You agree to our Terms of Service and Privacy Policy."/> 
                <CheckboxWithTextContact url="/information/privacy-policy" textUrl="Read privacy policies " TextInformation="Please read our advertising policies before the situation" /> 
            </div>
            <button className="mt-4">
              <FWButtonComponent
                width={470}
                bgOne=""
                bgTwo="#232323"
                textOne="#232323"
                textTwo="#f6f6f6"
                borderColor="#232323"
                textContent="Send Message"
              />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
