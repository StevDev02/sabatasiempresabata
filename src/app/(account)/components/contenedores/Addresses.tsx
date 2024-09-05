import { AlertDialogDemo } from "../accesories/ShowForm";

export default function AddressesContainer() {
  const isData = false;
  return (
    <>
      {isData ? null : <AlertDialogDemo />}

      <div className="grid gap-4">
        <h3 className="text-[1.25rem] font-medium">Active delivery address</h3>
        {isData ? (
          <>
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <h4 className=" text-[.75rem] text-[#514e4c] ">Full name</h4>
                <p className="text-[.875rem] font-medium">Steven Sanchez</p>
              </li>
              <li>
                <h4 className=" text-[.75rem] text-[#514e4c] ">Email</h4>
                <p className="text-[.875rem] font-medium">steven@gmail.com</p>
              </li>
              <li>
                <h4 className=" text-[.75rem] text-[#514e4c] ">Phone</h4>
                <p className="text-[.875rem] font-medium">0983119357</p>
              </li>
              <li>
                <h4 className=" text-[.75rem] text-[#514e4c] ">Address</h4>
                <p className="text-[.875rem] font-medium">Calderon</p>
              </li>
              <li>
                <h4 className=" text-[.75rem] text-[#514e4c] ">City</h4>
                <p className="text-[.875rem] font-medium">Quito</p>
              </li>
              <li>
                <h4 className=" text-[.75rem] text-[#514e4c] ">Province</h4>
                <p className="text-[.875rem] font-medium">Pichincha</p>
              </li>
            </ul>
            <div className="flex gap-4">
              <button className="text-[.875rem] underline text-[#514e4c] ">Edit</button>
              <button className="text-[.875rem] underline text-[#514e4c] ">Delete</button>
            </div>
          </>
        ) : (
          <p className="text-[.875rem] leading-[130%] font-normal text-[#514e4c]">
            No address is currently saved
          </p>
        )}
      </div>
    </>
  );
}
