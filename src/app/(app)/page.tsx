import Link from "next/link";
import styles from "./module.css/app.module.css";
import {
  firstSectionProducts,
  secondSectionProducts,
  thirdSectionProducts,
} from "./const/Index";
import AuthForm from "./components/Contenedores/LoginRegister";
import CartSeccion from "./components/Contenedores/CartSeccion";
import FavoriteSeccion from "./components/Contenedores/FavoriteSeccion";
import ProductCarousel from "./components/Accesories/ProductCarousel";
export default function Home() {
  return (
    <>
      <CartSeccion />
      <FavoriteSeccion />
      <AuthForm />
      <main>
        <section
          className="bgImage"
          style={{
            backgroundImage: `url(https://www.elvineclothing.com/cdn/shop/files/Herobanner_7d8016b4-9a10-4956-b2ef-77e42b242a44.jpg?v=1723532538&width=2600)`,
          }}
        >
          <div className="font-header grid justify-items-start gap-[29px] absolute bottom-[49px] left-[17px]  ">
            <h2 className="break-words leading-[100%] w-[600px] scale-y-105 h-[152px] text-[#f6f6f6] text-7xl mb-0.5 font-semibold">
              TIME TO DRESS SMARTER
            </h2>
            <div className="w-[250px] grid h-[60.39px]  ">
              <Link
                className={`${styles.fwButtonContainer}`}
                href="/fw-collection"
              >
                <div
                  className={`${styles.fwButtonContainerDiv} ${styles.fwButtonContainerDiv1}`}
                >
                  <span className={`${styles.fwButtonContainerSpan}`}>
                    <p className={`${styles.fwButtonContainerP}`}>
                      FW COLLECTION
                    </p>
                  </span>
                </div>
                <div
                  className={`${styles.fwButtonContainerDiv} ${styles.fwButtonContainerDiv2}`}
                >
                  <span className={`${styles.fwButtonContainerSpan}`}>
                    <p className={`${styles.fwButtonContainerP}`}>
                      FW COLLECTION
                    </p>
                  </span>
                </div>
              </Link>
            </div>
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
              backgroundImage: `url(https://www.elvineclothing.com/cdn/shop/files/men_s-collection_d99dfb9c-a7ed-428f-9f81-d35270bd2b6c.jpg?v=1723533887&width=1500)`,
            }}
          ></div>
          <div
            className="w-[658px] h-[724px] bg-center bg-no-repeat bgHover "
            style={{
              backgroundImage: `url(https://www.elvineclothing.com/cdn/shop/files/women_s-collection_1e1618e1-0eb7-4e36-b60a-8c106a593f73.jpg?v=1723533887&width=1500)`,
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
                essentials that are anything but basic.{" "}
              </p>
            </div>
          </div>
        </section>

        <section className="w-full translate-y-8 py-[28px] px-[25px] h-full relative">
          <ProductCarousel products={secondSectionProducts} />
        </section>

        <section className="w-full h-full relative">
          <img
            loading="lazy"
            className="w-full"
            src="https://www.elvineclothing.com/cdn/shop/files/thin-banner.jpg?v=1723534592&width=2600"
            alt=""
          />
        </section>

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
