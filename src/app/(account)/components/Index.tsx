"use client";

import AccountContainer from "./contenedores/Account";
import AddressesContainer from "./contenedores/Addresses";
import OrdersContainer from "./contenedores/Orders";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SelectContainerWithParams() {
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

export default function AccountContainerParams() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SelectContainerWithParams />
    </Suspense>
  );
}
