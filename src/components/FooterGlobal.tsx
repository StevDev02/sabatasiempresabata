import Link from "next/link";
import FWButtonComponent from "./Button/FWButton";

export default function Footer() {
  return (
    <>
      <footer className="w-full h-full bg-crema">
        <div className="w-full flex justify-around py-8 max-h-[276px] h-[276px] border border-black">
          <div>
            <img
              className="w-[116px] h-[37px] "
              loading="lazy"
              src="//www.elvineclothing.com/cdn/shop/files/elvine_logotype_rgb_shape_black_0ade0e0b-5a03-4b2a-9b90-9cd817c2aa00.svg?v=1706533362&width=500"
              alt=""
            />
          </div>

          <div className="Dropdown">
            <div
              className="Dropdown--Button u-s2 u-p3"
              aria-expanded="false"
              data-action="toggle-mobile-dropdown"
              aria-label="Open Dropdown"
              tabIndex={0}
            >
              <p className="font-medium text-lg">Information Service</p>
              <span className="Dropdown--Plus not_desktop"></span>
            </div>
            <div className="Dropdown--Content" aria-hidden="true">
              <div className="grid gap-2">
                <div className="footer--LinkList__Item">
                  <a className="font-normal text-base" href="/contact">
                    Contactanos
                  </a>
                </div>

                <div className="footer--LinkList__Item">
                  <a
                    className="font-normal text-base"
                    href="/information/payments"
                  >
                    Pagos
                  </a>
                </div>

                <div className="footer--LinkList__Item">
                  <a
                    className="font-normal text-base"
                    href="/information/shipping-and-return"
                  >
                    Envíos y devoluciones
                  </a>
                </div>

                <div className="footer--LinkList__Item">
                  <a
                    className="font-normal text-base"
                    href="/information/general-terms"
                  >
                    Términos generales
                  </a>
                </div>

                <div className="footer--LinkList__Item">
                  <a
                    className="font-normal text-base"
                    href="/information/privacy-policy"
                  >
                    Política de privacidad
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="Dropdown">
            <div
              className="Dropdown--Button u-s2 u-p3"
              aria-expanded="false"
              data-action="toggle-mobile-dropdown"
              aria-label="Open Dropdown"
              tabIndex={0}
            >
              <p className="font-medium text-lg">Sobre nosotros</p>
              <span className="Dropdown--Plus not_desktop"></span>
            </div>
            <div className="Dropdown--Content" aria-hidden="true">
              <div className="grid gap-2">
                <div className="footer--LinkList__Item">
                  <a
                    className="font-normal text-base"
                    href="/blogs/the-story-of-sabata"
                  >
                    La historia de Sabata
                  </a>
                </div>

                <div className="footer--LinkList__Item">
                  <a className="font-normal text-base" href="/blogs/the-story-of-sabata#sabata-in-the-world">
                    Sabata en el mundo
                  </a>
                </div>
                <span className="Dropdown--Plus not_desktop"></span>
                <p className="font-medium text-lg">Guía de tallas</p>
                <div className="footer--LinkList__Item">
                  <a
                    className="font-normal text-base"
                    href="/blogs/size-guide-for-women"
                  >
                    Guía de tallas para mujeres
                  </a>
                </div>

                <div className="footer--LinkList__Item">
                  <a
                    className="font-normal text-base"
                    href="/blogs/size-guide-for-men"
                  >
                    Guía de tallas para hombres
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="Dropdown">
            <div
              className="Dropdown--Button u-s2 u-p3"
              aria-expanded="false"
              data-action="toggle-mobile-dropdown"
              aria-label="Open Dropdown"
              tabIndex={0}
            >
              <p className="font-medium text-lg">Social Media</p>
              <span className="Dropdown--Plus not_desktop"></span>
            </div>
            <div className="" aria-hidden="true">
              <div className="grid gap-2">
                <div className="footer--LinkList__Item">
                  <a
                    target="_blank"
                    className="font-normal text-base"
                    href="https://www.instagram.com/elvineclothing/"
                  >
                    Instagram
                  </a>
                </div>

                <div className="footer--LinkList__Item">
                  <a
                    target="_blank"
                    className="font-normal text-base"
                    href="https://www.facebook.com/elvineclothing"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid">
            <div className="flex flex-col gap-2">
              <div
                className="Dropdown--Button u-s2 u-p3"
                aria-expanded="false"
                data-action="toggle-mobile-dropdown"
                aria-label="Open Dropdown"
                tabIndex={0}
              >
                <p className="font-medium text-lg">¡Mantente actualizado!</p>
                <span className="Dropdown--Plus not_desktop"></span>
              </div>
              <p className="font-normal text-base">
                Suscríbete para recibir nuestro boletín semanal.
              </p>

              <form
                className="w-[435px] flex items-center justify-between"
                action=""
              >
                <input
                  className="w-[329px] focus:outline-none text-base px-4 h-[45px] border border-gray-300"
                  type="email"
                  placeholder="Your email"
                />
                <button>
                  <FWButtonComponent
                    width={96}
                    borderColor="#232222"
                    bgOne="transparent"
                    bgTwo="#transparent"
                    textOne="#232222"
                    textTwo="#232222"
                    textContent="SUSCRIBE"
                  />
                </button>
              </form>
            </div>

            <div className="">
              <div className="">
                <ul
                  className="grid grayscale grid-cols-9 text-black gap-2"
                  role="list"
                >
                  <li className="footer--paymentList--item">
                    <svg
                      className="icon icon--black-white"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="pi-american_express"
                      viewBox="0 0 38 24"
                      width="38"
                      height="24"
                    >
                      <title id="pi-american_express">American Express</title>
                      <path
                        fill="#000"
                        d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z"
                        opacity=".07"
                      ></path>
                      <path
                        fill="#006FCF"
                        d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"
                      ></path>
                      <path
                        fill="#FFF"
                        d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z"
                      ></path>
                      <path
                        fill="#006FCF"
                        d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z"
                      ></path>
                      <path
                        fill="#006FCF"
                        d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z"
                      ></path>
                      <path
                        fill="#FFF"
                        d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z"
                      ></path>
                      <path
                        fill="#006FCF"
                        d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z"
                      ></path>
                      <path
                        fill="#006FCF"
                        d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z"
                      ></path>
                    </svg>
                  </li>
                  <li className="footer--paymentList--item">
                    <svg
                      className=""
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      x="0"
                      y="0"
                      width="38"
                      height="24"
                      viewBox="0 0 165.521 105.965"
                      aria-labelledby="pi-apple_pay"
                    >
                      <title id="pi-apple_pay">Apple Pay</title>
                      <path
                        fill="#000"
                        d="M150.698 0H14.823c-.566 0-1.133 0-1.698.003-.477.004-.953.009-1.43.022-1.039.028-2.087.09-3.113.274a10.51 10.51 0 0 0-2.958.975 9.932 9.932 0 0 0-4.35 4.35 10.463 10.463 0 0 0-.975 2.96C.113 9.611.052 10.658.024 11.696a70.22 70.22 0 0 0-.022 1.43C0 13.69 0 14.256 0 14.823v76.318c0 .567 0 1.132.002 1.699.003.476.009.953.022 1.43.028 1.036.09 2.084.275 3.11a10.46 10.46 0 0 0 .974 2.96 9.897 9.897 0 0 0 1.83 2.52 9.874 9.874 0 0 0 2.52 1.83c.947.483 1.917.79 2.96.977 1.025.183 2.073.245 3.112.273.477.011.953.017 1.43.02.565.004 1.132.004 1.698.004h135.875c.565 0 1.132 0 1.697-.004.476-.002.952-.009 1.431-.02 1.037-.028 2.085-.09 3.113-.273a10.478 10.478 0 0 0 2.958-.977 9.955 9.955 0 0 0 4.35-4.35c.483-.947.789-1.917.974-2.96.186-1.026.246-2.074.274-3.11.013-.477.02-.954.022-1.43.004-.567.004-1.132.004-1.699V14.824c0-.567 0-1.133-.004-1.699a63.067 63.067 0 0 0-.022-1.429c-.028-1.038-.088-2.085-.274-3.112a10.4 10.4 0 0 0-.974-2.96 9.94 9.94 0 0 0-4.35-4.35A10.52 10.52 0 0 0 156.939.3c-1.028-.185-2.076-.246-3.113-.274a71.417 71.417 0 0 0-1.431-.022C151.83 0 151.263 0 150.698 0z"
                      ></path>
                      <path
                        fill="#FFF"
                        d="M150.698 3.532l1.672.003c.452.003.905.008 1.36.02.793.022 1.719.065 2.583.22.75.135 1.38.34 1.984.648a6.392 6.392 0 0 1 2.804 2.807c.306.6.51 1.226.645 1.983.154.854.197 1.783.218 2.58.013.45.019.9.02 1.36.005.557.005 1.113.005 1.671v76.318c0 .558 0 1.114-.004 1.682-.002.45-.008.9-.02 1.35-.022.796-.065 1.725-.221 2.589a6.855 6.855 0 0 1-.645 1.975 6.397 6.397 0 0 1-2.808 2.807c-.6.306-1.228.511-1.971.645-.881.157-1.847.2-2.574.22-.457.01-.912.017-1.379.019-.555.004-1.113.004-1.669.004H14.801c-.55 0-1.1 0-1.66-.004a74.993 74.993 0 0 1-1.35-.018c-.744-.02-1.71-.064-2.584-.22a6.938 6.938 0 0 1-1.986-.65 6.337 6.337 0 0 1-1.622-1.18 6.355 6.355 0 0 1-1.178-1.623 6.935 6.935 0 0 1-.646-1.985c-.156-.863-.2-1.788-.22-2.578a66.088 66.088 0 0 1-.02-1.355l-.003-1.327V14.474l.002-1.325a66.7 66.7 0 0 1 .02-1.357c.022-.792.065-1.717.222-2.587a6.924 6.924 0 0 1 .646-1.981c.304-.598.7-1.144 1.18-1.623a6.386 6.386 0 0 1 1.624-1.18 6.96 6.96 0 0 1 1.98-.646c.865-.155 1.792-.198 2.586-.22.452-.012.905-.017 1.354-.02l1.677-.003h135.875"
                      ></path>
                      <g>
                        <g>
                          <path
                            fill="#000"
                            d="M43.508 35.77c1.404-1.755 2.356-4.112 2.105-6.52-2.054.102-4.56 1.355-6.012 3.112-1.303 1.504-2.456 3.959-2.156 6.266 2.306.2 4.61-1.152 6.063-2.858"
                          ></path>
                          <path
                            fill="#000"
                            d="M45.587 39.079c-3.35-.2-6.196 1.9-7.795 1.9-1.6 0-4.049-1.8-6.698-1.751-3.447.05-6.645 2-8.395 5.1-3.598 6.2-.95 15.4 2.55 20.45 1.699 2.5 3.747 5.25 6.445 5.151 2.55-.1 3.549-1.65 6.647-1.65 3.097 0 3.997 1.65 6.696 1.6 2.798-.05 4.548-2.5 6.247-5 1.95-2.85 2.747-5.6 2.797-5.75-.05-.05-5.396-2.101-5.446-8.251-.05-5.15 4.198-7.6 4.398-7.751-2.399-3.548-6.147-3.948-7.447-4.048"
                          ></path>
                        </g>
                        <g>
                          <path
                            fill="#000"
                            d="M78.973 32.11c7.278 0 12.347 5.017 12.347 12.321 0 7.33-5.173 12.373-12.529 12.373h-8.058V69.62h-5.822V32.11h14.062zm-8.24 19.807h6.68c5.07 0 7.954-2.729 7.954-7.46 0-4.73-2.885-7.434-7.928-7.434h-6.706v14.894z"
                          ></path>
                          <path
                            fill="#000"
                            d="M92.764 61.847c0-4.809 3.665-7.564 10.423-7.98l7.252-.442v-2.08c0-3.04-2.001-4.704-5.562-4.704-2.938 0-5.07 1.507-5.51 3.82h-5.252c.157-4.86 4.731-8.395 10.918-8.395 6.654 0 10.995 3.483 10.995 8.89v18.663h-5.38v-4.497h-.13c-1.534 2.937-4.914 4.782-8.579 4.782-5.406 0-9.175-3.222-9.175-8.057zm17.675-2.417v-2.106l-6.472.416c-3.64.234-5.536 1.585-5.536 3.95 0 2.288 1.975 3.77 5.068 3.77 3.95 0 6.94-2.522 6.94-6.03z"
                          ></path>
                          <path
                            fill="#000"
                            d="M120.975 79.652v-4.496c.364.051 1.247.103 1.715.103 2.573 0 4.029-1.09 4.913-3.899l.52-1.663-9.852-27.293h6.082l6.863 22.146h.13l6.862-22.146h5.927l-10.216 28.67c-2.34 6.577-5.017 8.735-10.683 8.735-.442 0-1.872-.052-2.261-.157z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </li>
                  <li className="footer--paymentList--item">
                    <svg
                      className="icon icon--black-white"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 38 24"
                      width="38"
                      height="24"
                      aria-labelledby="pi-google_pay"
                    >
                      <title id="pi-google_pay">Google Pay</title>
                      <path
                        d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                        fill="#000"
                        opacity=".07"
                      ></path>
                      <path
                        d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                        fill="#FFF"
                      ></path>
                      <path
                        d="M18.093 11.976v3.2h-1.018v-7.9h2.691a2.447 2.447 0 0 1 1.747.692 2.28 2.28 0 0 1 .11 3.224l-.11.116c-.47.447-1.098.69-1.747.674l-1.673-.006zm0-3.732v2.788h1.698c.377.012.741-.135 1.005-.404a1.391 1.391 0 0 0-1.005-2.354l-1.698-.03zm6.484 1.348c.65-.03 1.286.188 1.778.613.445.43.682 1.03.65 1.649v3.334h-.969v-.766h-.049a1.93 1.93 0 0 1-1.673.931 2.17 2.17 0 0 1-1.496-.533 1.667 1.667 0 0 1-.613-1.324 1.606 1.606 0 0 1 .613-1.336 2.746 2.746 0 0 1 1.698-.515c.517-.02 1.03.093 1.49.331v-.208a1.134 1.134 0 0 0-.417-.901 1.416 1.416 0 0 0-.98-.368 1.545 1.545 0 0 0-1.319.717l-.895-.564a2.488 2.488 0 0 1 2.182-1.06zM23.29 13.52a.79.79 0 0 0 .337.662c.223.176.5.269.785.263.429-.001.84-.17 1.146-.472.305-.286.478-.685.478-1.103a2.047 2.047 0 0 0-1.324-.374 1.716 1.716 0 0 0-1.03.294.883.883 0 0 0-.392.73zm9.286-3.75l-3.39 7.79h-1.048l1.281-2.728-2.224-5.062h1.103l1.612 3.885 1.569-3.885h1.097z"
                        fill="#5F6368"
                      ></path>
                      <path
                        d="M13.986 11.284c0-.308-.024-.616-.073-.92h-4.29v1.747h2.451a2.096 2.096 0 0 1-.9 1.373v1.134h1.464a4.433 4.433 0 0 0 1.348-3.334z"
                        fill="#4285F4"
                      ></path>
                      <path
                        d="M9.629 15.721a4.352 4.352 0 0 0 3.01-1.097l-1.466-1.14a2.752 2.752 0 0 1-4.094-1.44H5.577v1.17a4.53 4.53 0 0 0 4.052 2.507z"
                        fill="#34A853"
                      ></path>
                      <path
                        d="M7.079 12.05a2.709 2.709 0 0 1 0-1.735v-1.17H5.577a4.505 4.505 0 0 0 0 4.075l1.502-1.17z"
                        fill="#FBBC04"
                      ></path>
                      <path
                        d="M9.629 8.44a2.452 2.452 0 0 1 1.74.68l1.3-1.293a4.37 4.37 0 0 0-3.065-1.183 4.53 4.53 0 0 0-4.027 2.5l1.502 1.171a2.715 2.715 0 0 1 2.55-1.875z"
                        fill="#EA4335"
                      ></path>
                    </svg>
                  </li>
                  <li className="footer--paymentList--item">
                    <svg
                      className="icon icon--black-white"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 38 24"
                      width="38"
                      height="24"
                      aria-labelledby="pi-ideal"
                    >
                      <title id="pi-ideal">iDEAL</title>
                      <g clipPath="url(#pi-clip0_19918_2)">
                        <path
                          fill="#000"
                          opacity=".07"
                          d="M35 0H3C1.3 0 0 1.3 0 3V21C0 22.7 1.4 24 3 24H35C36.7 24 38 22.7 38 21V3C38 1.3 36.6 0 35 0Z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M35 1C36.1 1 37 1.9 37 3V21C37 22.1 36.1 23 35 23H3C1.9 23 1 22.1 1 21V3C1 1.9 1.9 1 3 1H35Z"
                        ></path>
                        <g clipPath="url(#pi-clip1_19918_2)">
                          <path
                            d="M11.5286 5.35759V18.694H19.6782C25.0542 18.694 27.3855 15.8216 27.3855 12.0125C27.3855 8.21854 25.0542 5.35742 19.6782 5.35742L11.5286 5.35759Z"
                            fill="white"
                          ></path>
                          <path
                            d="M19.7305 5.06445C26.8437 5.06445 27.9055 9.4164 27.9055 12.0098C27.9055 16.5096 25.0025 18.9876 19.7305 18.9876H11.0118V5.06462L19.7305 5.06445ZM11.6983 5.71921V18.3329H19.7305C24.5809 18.3329 27.2195 16.1772 27.2195 12.0098C27.2195 7.72736 24.3592 5.71921 19.7305 5.71921H11.6983Z"
                            fill="black"
                          ></path>
                          <path
                            d="M12.7759 17.3045H15.3474V12.9372H12.7757M15.6593 10.7375C15.6593 11.5796 14.944 12.2625 14.0613 12.2625C13.179 12.2625 12.4633 11.5796 12.4633 10.7375C12.4633 10.3332 12.6316 9.94537 12.9313 9.65945C13.231 9.37352 13.6374 9.21289 14.0613 9.21289C14.4851 9.21289 14.8915 9.37352 15.1912 9.65945C15.4909 9.94537 15.6593 10.3332 15.6593 10.7375Z"
                            fill="black"
                          ></path>
                          <path
                            d="M20.7043 11.4505V12.1573H18.8719V9.32029H20.6452V10.0266H19.6127V10.3556H20.5892V11.0616H19.6127V11.4503L20.7043 11.4505ZM21.06 12.158L21.9569 9.31944H23.0109L23.9075 12.158H23.1362L22.9683 11.6089H21.9995L21.8308 12.158H21.06ZM22.216 10.9028H22.7518L22.5067 10.1007H22.4623L22.216 10.9028ZM24.2797 9.31944H25.0205V11.4505H26.1178C25.8168 7.58344 22.6283 6.74805 19.7312 6.74805H16.6418V9.32063H17.0989C17.9328 9.32063 18.4505 9.86014 18.4505 10.7275C18.4505 11.6228 17.9449 12.157 17.0989 12.157H16.6422V17.3052H19.7308C24.4416 17.3052 26.081 15.218 26.1389 12.1572H24.2797V9.31944ZM16.6415 10.0273V11.4505H17.0992C17.4165 11.4505 17.7094 11.3631 17.7094 10.7278C17.7094 10.1067 17.3834 10.0271 17.0992 10.0271L16.6415 10.0273Z"
                            fill="#CC0066"
                          ></path>
                        </g>
                      </g>
                      <defs>
                        <clipPath id="pi-clip0_19918_2">
                          <rect width="38" height="24" fill="white"></rect>
                        </clipPath>
                        <clipPath id="pi-clip1_19918_2">
                          <rect
                            width="17"
                            height="14"
                            fill="white"
                            transform="translate(11 5)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </li>
                  <li className="footer--paymentList--item">
                    <svg
                      className="icon icon--black-white"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      width="38"
                      height="24"
                      viewBox="0 0 38 24"
                      aria-labelledby="pi-klarna"
                    >
                      <title id="pi-klarna">Klarna</title>
                      <g
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <path
                          d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                          fill="#FFB3C7"
                        ></path>
                        <path
                          d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                          fill="#FFB3C7"
                        ></path>
                        <path
                          d="M34.117 13.184c-.487 0-.882.4-.882.892 0 .493.395.893.882.893.488 0 .883-.4.883-.893a.888.888 0 00-.883-.892zm-2.903-.69c0-.676-.57-1.223-1.274-1.223-.704 0-1.274.547-1.274 1.222 0 .675.57 1.223 1.274 1.223.704 0 1.274-.548 1.274-1.223zm.005-2.376h1.406v4.75h-1.406v-.303a2.446 2.446 0 01-1.394.435c-1.369 0-2.478-1.122-2.478-2.507 0-1.384 1.11-2.506 2.478-2.506.517 0 .996.16 1.394.435v-.304zm-11.253.619v-.619h-1.44v4.75h1.443v-2.217c0-.749.802-1.15 1.359-1.15h.016v-1.382c-.57 0-1.096.247-1.378.618zm-3.586 1.756c0-.675-.57-1.222-1.274-1.222-.703 0-1.274.547-1.274 1.222 0 .675.57 1.223 1.274 1.223.704 0 1.274-.548 1.274-1.223zm.005-2.375h1.406v4.75h-1.406v-.303A2.446 2.446 0 0114.99 15c-1.368 0-2.478-1.122-2.478-2.507 0-1.384 1.11-2.506 2.478-2.506.517 0 .997.16 1.394.435v-.304zm8.463-.128c-.561 0-1.093.177-1.448.663v-.535H22v4.75h1.417v-2.496c0-.722.479-1.076 1.055-1.076.618 0 .973.374.973 1.066v2.507h1.405v-3.021c0-1.106-.87-1.858-2.002-1.858zM10.465 14.87h1.472V8h-1.472v6.868zM4 14.87h1.558V8H4v6.87zM9.45 8a5.497 5.497 0 01-1.593 3.9l2.154 2.97H8.086l-2.341-3.228.604-.458A3.96 3.96 0 007.926 8H9.45z"
                          fill="#0A0B09"
                          fillRule="nonzero"
                        ></path>
                      </g>
                    </svg>
                  </li>
                  <li className="footer--paymentList--item">
                    <svg
                      className="icon icon--black-white"
                      viewBox="0 0 38 24"
                      xmlns="http://www.w3.org/2000/svg"
                      width="38"
                      height="24"
                      role="img"
                      aria-labelledby="pi-maestro"
                    >
                      <title id="pi-maestro">Maestro</title>
                      <path
                        opacity=".07"
                        d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                      ></path>
                      <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
                      <circle fill="#00A2E5" cx="23" cy="12" r="7"></circle>
                      <path
                        fill="#7375CF"
                        d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"
                      ></path>
                    </svg>
                  </li>
                  <li className="footer--paymentList--item">
                    <svg
                      className="icon icon--black-white"
                      viewBox="0 0 38 24"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      width="38"
                      height="24"
                      aria-labelledby="pi-master"
                    >
                      <title id="pi-master">Mastercard</title>
                      <path
                        opacity=".07"
                        d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                      ></path>
                      <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
                      <circle fill="#F79E1B" cx="23" cy="12" r="7"></circle>
                      <path
                        fill="#FF5F00"
                        d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"
                      ></path>
                    </svg>
                  </li>
                  <li className="footer--paymentList--item">
                    <svg
                      className="icon icon--black-white"
                      viewBox="0 0 38 24"
                      xmlns="http://www.w3.org/2000/svg"
                      width="38"
                      height="24"
                      role="img"
                      aria-labelledby="pi-paypal"
                    >
                      <title id="pi-paypal">PayPal</title>
                      <path
                        opacity=".07"
                        d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                      ></path>
                      <path
                        fill="#003087"
                        d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"
                      ></path>
                      <path
                        fill="#3086C8"
                        d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"
                      ></path>
                      <path
                        fill="#012169"
                        d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"
                      ></path>
                    </svg>
                  </li>
                  <li className="footer--paymentList--item">
                    <svg
                      className="icon icon--black-white"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 38 24"
                      width="38"
                      height="24"
                      aria-labelledby="pi-shopify_pay"
                    >
                      <title id="pi-shopify_pay">Shop Pay</title>
                      <path
                        opacity=".07"
                        d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                        fill="#000"
                      ></path>
                      <path
                        d="M35.889 0C37.05 0 38 .982 38 2.182v19.636c0 1.2-.95 2.182-2.111 2.182H2.11C.95 24 0 23.018 0 21.818V2.182C0 .982.95 0 2.111 0H35.89z"
                        fill="#5A31F4"
                      ></path>
                      <path
                        d="M9.35 11.368c-1.017-.223-1.47-.31-1.47-.705 0-.372.306-.558.92-.558.54 0 .934.238 1.225.704a.079.079 0 00.104.03l1.146-.584a.082.082 0 00.032-.114c-.475-.831-1.353-1.286-2.51-1.286-1.52 0-2.464.755-2.464 1.956 0 1.275 1.15 1.597 2.17 1.82 1.02.222 1.474.31 1.474.705 0 .396-.332.582-.993.582-.612 0-1.065-.282-1.34-.83a.08.08 0 00-.107-.035l-1.143.57a.083.083 0 00-.036.111c.454.92 1.384 1.437 2.627 1.437 1.583 0 2.539-.742 2.539-1.98s-1.155-1.598-2.173-1.82v-.003zM15.49 8.855c-.65 0-1.224.232-1.636.646a.04.04 0 01-.069-.03v-2.64a.08.08 0 00-.08-.081H12.27a.08.08 0 00-.08.082v8.194a.08.08 0 00.08.082h1.433a.08.08 0 00.081-.082v-3.594c0-.695.528-1.227 1.239-1.227.71 0 1.226.521 1.226 1.227v3.594a.08.08 0 00.081.082h1.433a.08.08 0 00.081-.082v-3.594c0-1.51-.981-2.577-2.355-2.577zM20.753 8.62c-.778 0-1.507.24-2.03.588a.082.082 0 00-.027.109l.632 1.088a.08.08 0 00.11.03 2.5 2.5 0 011.318-.366c1.25 0 2.17.891 2.17 2.068 0 1.003-.736 1.745-1.669 1.745-.76 0-1.288-.446-1.288-1.077 0-.361.152-.657.548-.866a.08.08 0 00.032-.113l-.596-1.018a.08.08 0 00-.098-.035c-.799.299-1.359 1.018-1.359 1.984 0 1.46 1.152 2.55 2.76 2.55 1.877 0 3.227-1.313 3.227-3.195 0-2.018-1.57-3.492-3.73-3.492zM28.675 8.843c-.724 0-1.373.27-1.845.746-.026.027-.069.007-.069-.029v-.572a.08.08 0 00-.08-.082h-1.397a.08.08 0 00-.08.082v8.182a.08.08 0 00.08.081h1.433a.08.08 0 00.081-.081v-2.683c0-.036.043-.054.069-.03a2.6 2.6 0 001.808.7c1.682 0 2.993-1.373 2.993-3.157s-1.313-3.157-2.993-3.157zm-.271 4.929c-.956 0-1.681-.768-1.681-1.783s.723-1.783 1.681-1.783c.958 0 1.68.755 1.68 1.783 0 1.027-.713 1.783-1.681 1.783h.001z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </li>
                  <li className="footer--paymentList--item">
                    <svg
                      className="icon icon--black-white"
                      viewBox="-36 25 38 24"
                      xmlns="http://www.w3.org/2000/svg"
                      width="38"
                      height="24"
                      role="img"
                      aria-labelledby="pi-unionpay"
                    >
                      <title id="pi-unionpay">Union Pay</title>
                      <path
                        fill="#005B9A"
                        d="M-36 46.8v.7-.7zM-18.3 25v24h-7.2c-1.3 0-2.1-1-1.8-2.3l4.4-19.4c.3-1.3 1.9-2.3 3.2-2.3h1.4zm12.6 0c-1.3 0-2.9 1-3.2 2.3l-4.5 19.4c-.3 1.3.5 2.3 1.8 2.3h-4.9V25h10.8z"
                      ></path>
                      <path
                        fill="#E9292D"
                        d="M-19.7 25c-1.3 0-2.9 1.1-3.2 2.3l-4.4 19.4c-.3 1.3.5 2.3 1.8 2.3h-8.9c-.8 0-1.5-.6-1.5-1.4v-21c0-.8.7-1.6 1.5-1.6h14.7z"
                      ></path>
                      <path
                        fill="#0E73B9"
                        d="M-5.7 25c-1.3 0-2.9 1.1-3.2 2.3l-4.4 19.4c-.3 1.3.5 2.3 1.8 2.3H-26h.5c-1.3 0-2.1-1-1.8-2.3l4.4-19.4c.3-1.3 1.9-2.3 3.2-2.3h14z"
                      ></path>
                      <path
                        fill="#059DA4"
                        d="M2 26.6v21c0 .8-.6 1.4-1.5 1.4h-12.1c-1.3 0-2.1-1.1-1.8-2.3l4.5-19.4C-8.6 26-7 25-5.7 25H.5c.9 0 1.5.7 1.5 1.6z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M-21.122 38.645h.14c.14 0 .28-.07.28-.14l.42-.63h1.19l-.21.35h1.4l-.21.63h-1.68c-.21.28-.42.42-.7.42h-.84l.21-.63m-.21.91h3.01l-.21.7h-1.19l-.21.7h1.19l-.21.7h-1.19l-.28 1.05c-.07.14 0 .28.28.21h.98l-.21.7h-1.89c-.35 0-.49-.21-.35-.63l.35-1.33h-.77l.21-.7h.77l.21-.7h-.7l.21-.7zm4.83-1.75v.42s.56-.42 1.12-.42h1.96l-.77 2.66c-.07.28-.35.49-.77.49h-2.24l-.49 1.89c0 .07 0 .14.14.14h.42l-.14.56h-1.12c-.42 0-.56-.14-.49-.35l1.47-5.39h.91zm1.68.77h-1.75l-.21.7s.28-.21.77-.21h1.05l.14-.49zm-.63 1.68c.14 0 .21 0 .21-.14l.14-.35h-1.75l-.14.56 1.54-.07zm-1.19.84h.98v.42h.28c.14 0 .21-.07.21-.14l.07-.28h.84l-.14.49c-.07.35-.35.49-.77.56h-.56v.77c0 .14.07.21.35.21h.49l-.14.56h-1.19c-.35 0-.49-.14-.49-.49l.07-2.1zm4.2-2.45l.21-.84h1.19l-.07.28s.56-.28 1.05-.28h1.47l-.21.84h-.21l-1.12 3.85h.21l-.21.77h-.21l-.07.35h-1.19l.07-.35h-2.17l.21-.77h.21l1.12-3.85h-.28m1.26 0l-.28 1.05s.49-.21.91-.28c.07-.35.21-.77.21-.77h-.84zm-.49 1.54l-.28 1.12s.56-.28.98-.28c.14-.42.21-.77.21-.77l-.91-.07zm.21 2.31l.21-.77h-.84l-.21.77h.84zm2.87-4.69h1.12l.07.42c0 .07.07.14.21.14h.21l-.21.7h-.77c-.28 0-.49-.07-.49-.35l-.14-.91zm-.35 1.47h3.57l-.21.77h-1.19l-.21.7h1.12l-.21.77h-1.26l-.28.42h.63l.14.84c0 .07.07.14.21.14h.21l-.21.7h-.7c-.35 0-.56-.07-.56-.35l-.14-.77-.56.84c-.14.21-.35.35-.63.35h-1.05l.21-.7h.35c.14 0 .21-.07.35-.21l.84-1.26h-1.05l.21-.77h1.19l.21-.7h-1.19l.21-.77zm-19.74-5.04c-.14.7-.42 1.19-.91 1.54-.49.35-1.12.56-1.89.56-.7 0-1.26-.21-1.54-.56-.21-.28-.35-.56-.35-.98 0-.14 0-.35.07-.56l.84-3.92h1.19l-.77 3.92v.28c0 .21.07.35.14.49.14.21.35.28.7.28s.7-.07.91-.28c.21-.21.42-.42.49-.77l.77-3.92h1.19l-.84 3.92m1.12-1.54h.84l-.07.49.14-.14c.28-.28.63-.42 1.05-.42.35 0 .63.14.77.35.14.21.21.49.14.91l-.49 2.38h-.91l.42-2.17c.07-.28.07-.49 0-.56-.07-.14-.21-.14-.35-.14-.21 0-.42.07-.56.21-.14.14-.28.35-.28.63l-.42 2.03h-.91l.63-3.57m9.8 0h.84l-.07.49.14-.14c.28-.28.63-.42 1.05-.42.35 0 .63.14.77.35s.21.49.14.91l-.49 2.38h-.91l.42-2.24c.07-.21 0-.42-.07-.49-.07-.14-.21-.14-.35-.14-.21 0-.42.07-.56.21-.14.14-.28.35-.28.63l-.42 2.03h-.91l.7-3.57m-5.81 0h.98l-.77 3.5h-.98l.77-3.5m.35-1.33h.98l-.21.84h-.98l.21-.84zm1.4 4.55c-.21-.21-.35-.56-.35-.98v-.21c0-.07 0-.21.07-.28.14-.56.35-1.05.7-1.33.35-.35.84-.49 1.33-.49.42 0 .77.14 1.05.35.21.21.35.56.35.98v.21c0 .07 0 .21-.07.28-.14.56-.35.98-.7 1.33-.35.35-.84.49-1.33.49-.35 0-.7-.14-1.05-.35m1.89-.7c.14-.21.28-.49.35-.84v-.35c0-.21-.07-.35-.14-.49a.635.635 0 0 0-.49-.21c-.28 0-.49.07-.63.28-.14.21-.28.49-.35.84v.28c0 .21.07.35.14.49.14.14.28.21.49.21.28.07.42 0 .63-.21m6.51-4.69h2.52c.49 0 .84.14 1.12.35.28.21.35.56.35.91v.28c0 .07 0 .21-.07.28-.07.49-.35.98-.7 1.26-.42.35-.84.49-1.4.49h-1.4l-.42 2.03h-1.19l1.19-5.6m.56 2.59h1.12c.28 0 .49-.07.7-.21.14-.14.28-.35.35-.63v-.28c0-.21-.07-.35-.21-.42-.14-.07-.35-.14-.7-.14h-.91l-.35 1.68zm8.68 3.71c-.35.77-.7 1.26-.91 1.47-.21.21-.63.7-1.61.7l.07-.63c.84-.28 1.26-1.4 1.54-1.96l-.28-3.78h1.19l.07 2.38.91-2.31h1.05l-2.03 4.13m-2.94-3.85l-.42.28c-.42-.35-.84-.56-1.54-.21-.98.49-1.89 4.13.91 2.94l.14.21h1.12l.7-3.29-.91.07m-.56 1.82c-.21.56-.56.84-.91.77-.28-.14-.35-.63-.21-1.19.21-.56.56-.84.91-.77.28.14.35.63.21 1.19"
                      ></path>
                    </svg>
                  </li>
                  <li className="footer--paymentList--item">
                    <svg
                      className="icon icon--black-white"
                      viewBox="0 0 38 24"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      width="38"
                      height="24"
                      aria-labelledby="pi-visa"
                    >
                      <title id="pi-visa">Visa</title>
                      <path
                        opacity=".07"
                        d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                      ></path>
                      <path
                        d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z"
                        fill="#142688"
                      ></path>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  h-[74px] max-h-[74px] border-green-400">
          <ul className="flex w-full translate-y-4 h-[42px] items-center justify-center gap-4 text-[#514e4c] text-[.75rem] text-center">
            <li>
              <Link href="/information/general-terms">/ Términos y condiciones /</Link>
            </li>
            <li>
              <Link href="/information/privacy-policy">/ Política de privacidad /</Link>
            </li>
            <li>
              <Link href="/information/cookie-policy">/ Política de cookies /</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
