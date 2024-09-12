import SetFavoriteOption from "../Favorite/SetFavoriteOption";

export default function ProductsFetch() {
    return (
        <section className="w-full px-[25px]">
        <div className="flex w-full  items-center justify-center">
          <div className="w-full relative h-[825px] bgImage">
            <img
              className="w-full h-full object-cover"
              src="https://www.elvineclothing.com/cdn/shop/files/Vhinner_ELVINE_winter_coat__slate_green-reference.jpg?v=1719306692&width=1500"
              alt=""
            />
            <SetFavoriteOption />
            <div className="px-[25px] text-chocolate text-xs flex mt-2 items-center justify-between">
              <h5>Vhinner slate green</h5>
              <p>€349,00</p>
            </div>
          </div>
          <div className="w-full h-[825px] relative bgImage">
            <img
              className="w-full h-full object-cover"
              src="https://www.elvineclothing.com/cdn/shop/files/Vhinner_ELVINE_winter_coat__dust_Khaki-reference.jpg?v=1719306579&width=1500"
              alt=""
            />
            <SetFavoriteOption />
            <div className="px-[25px] text-chocolate text-xs flex mt-2 items-center justify-between">
              <h5>Vhinner dust khaki</h5>
              <p>€349,00</p>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-center">
          <div className="w-full h-[494px] row-start-2 border bgImage relative">
            <img
              className="w-full h-full object-cover"
              src="https://www.elvineclothing.com/cdn/shop/files/Vhinner_darknavy_F.jpg?v=1719306525&width=1500"
              alt=""
            />
            <SetFavoriteOption />
            <div className="px-[25px] text-chocolate text-xs flex mt-2 items-center justify-between">
              <h5>Vhinner dust khaki</h5>
              <p>€349,00</p>
            </div>
          </div>
          <div className="w-full h-[494px] row-start-2 border bgImage relative">
            <img
              className="w-full h-full object-cover"
              src="https://www.elvineclothing.com/cdn/shop/files/Vhinner_ELVINE_winter_coat__barely_blue_reference.jpg?v=1719306218&width=1500"
              alt=""
            />
            <SetFavoriteOption />
            <div className="px-[25px] text-chocolate text-xs flex mt-2 items-center justify-between">
              <h5>Vhinner dust khaki</h5>
              <p>€349,00</p>
            </div>
          </div>
          <div className="w-full h-[494px] row-start-2 border bgImage relative">
            <img
              className="w-full h-full object-cover"
              src="https://www.elvineclothing.com/cdn/shop/files/Vhinner_ELVINE_winter_coat__black-10416.jpg?v=1719306289&width=1500"
              alt=""
            />
            <SetFavoriteOption />
            <div className="px-[25px] text-chocolate text-xs flex mt-2 items-center justify-between">
              <h5>Vhinner dust khaki</h5>
              <p>€349,00</p>
            </div>
          </div>
          <div className="w-full h-[494px] row-start-2 border bgImage relative">
            <img
              className="w-full h-full object-cover"
              src="https://www.elvineclothing.com/cdn/shop/files/Vhinner_ELVINE_winter_coat__moss_reference.jpg?v=1719306626&width=1500"
              alt=""
            />
            <SetFavoriteOption />
            <div className="px-[25px] text-chocolate text-xs flex mt-2 items-center justify-between">
              <h5>Vhinner dust khaki</h5>
              <p>€349,00</p>
            </div>
          </div>
        </div>
      </section>
    )
}