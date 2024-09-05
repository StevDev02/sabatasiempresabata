'use client'

import AccountContainer from "./contenedores/Account";
import AddressesContainer from "./contenedores/Addresses";
import OrdersContainer from "./contenedores/Orders";
import { useSearchParams } from "next/navigation";

export default function AccountContainerParams() {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  return (
    <>
      {!location && <AccountContainer />}

      {location === "contactOrders" && <OrdersContainer />}

      {location === "contactAddresses" && <AddressesContainer />}
    </>
  );
}
