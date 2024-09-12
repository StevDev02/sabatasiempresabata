import Link from "next/link";
import {
  firstSectionProducts,
  secondSectionProducts,
  thirdSectionProducts,
} from "./const/Index";
import ProductCarousel from "./components/Accesories/ProductCarousel";
import FWButtonComponent from "@/components/Button/FWButton";
export default function Home() {
  return (
    <>
      <main>
        <section
          className="bgImage bgNavTransparent"
          style={{
            backgroundImage: `url(/bg-index.png)`,
          }}
        >
          <div className="font-header grid justify-items-start gap-[29px] absolute bottom-[49px] left-[17px]  ">
            <h2 className="break-words leading-[100%] w-[600px] scale-y-105 h-[152px] text-[#f6f6f6] text-7xl mb-0.5 font-semibold">
              TIME TO DRESS SMARTER
            </h2>
            <Link href="/fw-collection">
              <FWButtonComponent
                width={245}
                bgOne="transparent"
                bgTwo="#f6f6f6"
                textOne="#f6f6f6"
                textTwo="#232222"
                borderColor="#f6f6f6"
                textContent="fw collection"
              />
            </Link>
          </div>
        </section>

        <section className="w-full grid py-[28px] px-[25px] h-full relative">
          <div className="w-full flex justify-between items-center">
            <h2 className="break-words text-var-primary leading-[100%] scale-y-105 h-[152px] text-7xl mb-0.5 font-semibold">
              FW COLLECTION
            </h2>
            <Link href="/fw-collection">
              <p className="text-black -translate-y-4 text-base font-medium underline">
                View all
              </p>
            </Link>
          </div>
          <ProductCarousel products={firstSectionProducts} />
        </section>

        <section className="w-full grid grid-cols-2 py-[28px] px-[25px] h-full relative">
          <div
            className="w-[658px] max-w-[658px] h-[724px] bg-center bg-no-repeat bgHover "
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1579493934830-eab45746b51b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            }}
          ></div>
          <div
            className="w-[658px] h-[724px] bg-center bg-no-repeat bgHover "
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1549893536-ad1e0ea277b2?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            }}
          ></div>
          <div
            className="w-[658px] h-[724px] bg-center bg-no-repeat bg-cover "
            style={{
              backgroundImage: `url(https://www.elvineclothing.com/cdn/shop/files/rad.jpg?v=1723534240&width=1500)`,
            }}
          ></div>
          <div className="w-[658px] py-14 flex flex-col justify-between h-[724px]">
            <h2 className="text-6xl text-center text-nowrap px-4 font-semibold">
              ACE COLLECTION
            </h2>
            <div className="w-[670px] grid gap-4 px-4">
              <h4 className="text-2xl font-semibold">
                Essentials that are anything but basic.
              </h4>
              <p className="text-[13px] ">
                Every day. Every wear. The ELVINE Ace collection makes your
                closet less lonely with long-lasting, timeless staples. Get
                dressed. We’re wearing shirts, pants, and jerseys that look just
                as good layered as on their own. Stock your wardrobe with
                essentials that are anything but basic.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full translate-y-8 py-[28px] px-[25px] h-full relative">
          <ProductCarousel products={secondSectionProducts} />
        </section>

        <section
          className="w-full bg-center bg-no-repeat bg-cover h-[437px] relative"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1578116397592-7cf7eb77a677?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          }}
        ></section>

        <section className="w-full grid py-[28px] px-[25px] h-full relative">
          <div className="w-full flex justify-between items-center">
            <h2 className="break-words text-var-primary leading-[100%] scale-y-105 h-[152px] text-7xl mb-0.5 font-semibold">
              INBETWEENERS
            </h2>
            <Link href="/fw-collection">
              <p className="text-black -translate-y-4 text-base font-medium underline">
                View all
              </p>
            </Link>
          </div>
          <ProductCarousel products={thirdSectionProducts} />
        </section>
      </main>
    </>
  );
}
