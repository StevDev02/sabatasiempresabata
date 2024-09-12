import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import { CheckboxWithText } from "./Checkboxs";
import FWButtonComponent from "@/components/Button/FWButton";

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="absolute top-4 right-4">
          <FWButtonComponent
            width={205}
            borderColor="#232323"
            textContent="Add new address"
            bgOne="transparent"
            bgTwo="#232323"
            textOne="#232323"
            textTwo="#f6f6f6"
          />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="z-[999] ">
        <AlertDialogCancel className="absolute border-none shadow-none top-4 right-4">
          <X size={20} />
        </AlertDialogCancel>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-3xl font-medium">
            Add new address
          </AlertDialogTitle>
          <form className="overflow-y-scroll w-[480px] py-2 translate-y-4 h-[275px] grid gap-6">
            <input
              autoComplete="off"
              type="text"
              name="nameUser"
              placeholder="First name"
              className="w-[429px] focus:outline-none h-[44px] px-3 border border-gray-300 bg-transparent"
            />
            <input
              autoComplete="off"
              type="text"
              name="lastnameUser"
              placeholder="Last name"
              className="w-[429px] focus:outline-none h-[44px] px-3 border border-gray-300 bg-transparent"
            />
            <input
              autoComplete="off"
              type="text"
              name="phoneUser"
              placeholder="Phone number"
              className="w-[429px] focus:outline-none h-[44px] px-3 border border-gray-300 bg-transparent"
            />
            <input
              autoComplete="off"
              type="text"
              name="addressUser"
              placeholder="Address"
              className="w-[429px] focus:outline-none h-[44px] px-3 border border-gray-300 bg-transparent"
            />
            <input
              autoComplete="off"
              type="text"
              name="provinceUser"
              placeholder="Province"
              className="w-[429px] focus:outline-none h-[44px] px-3 border border-gray-300 bg-transparent"
            />
            <input
              autoComplete="off"
              type="text"
              name="cityUser"
              placeholder="City"
              className="w-[429px] focus:outline-none h-[44px] px-3 border border-gray-300 bg-transparent"
            />
            <CheckboxWithText />
          </form>
        </AlertDialogHeader>
        <AlertDialogDescription className="text-transparent opacity-0">
          *
        </AlertDialogDescription>
        <AlertDialogFooter className="-translate-x-[32px]">
          <AlertDialogCancel className="border-none translate-x-6 shadow-none">
            <FWButtonComponent 
            width={215}
            borderColor="#232323"
            textContent="Cancel"
            bgOne="transparent"
            bgTwo="#232323"
            textOne="#232323"
            textTwo="#f6f6f6"
            />
          </AlertDialogCancel>
          <AlertDialogAction className="border-none shadow-none">
          <FWButtonComponent 
            width={215}
            borderColor="#232323"
            textContent="Save address"
            bgOne="#232323"
            bgTwo="transparent"
            textOne="#f6f6f6"
            textTwo="#232323"
            />
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
