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
import stylesButton from "@/app/(account)/module.css/addres.module.css";
import { X } from "lucide-react";
import { CheckboxWithText } from "./Checkboxs";

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div
          className={`${stylesButton.fwButtonContainer} absolute  top-8 right-0`}
        >
          <div
            className={`${stylesButton.fwButtonContainerDiv} ${stylesButton.fwButtonContainerDiv1}`}
          >
            <span className={`${stylesButton.fwButtonContainerSpan}`}>
              <p className={`${stylesButton.fwButtonContainerP}`}>
                ADD NEW ADDRESS
              </p>
            </span>
          </div>
          <div
            className={`${stylesButton.fwButtonContainerDiv} ${stylesButton.fwButtonContainerDiv2}`}
          >
            <span className={`${stylesButton.fwButtonContainerSpan}`}>
              <p className={`${stylesButton.fwButtonContainerP}`}>
                ADD NEW ADDRESS
              </p>
            </span>
          </div>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogCancel className="absolute border-none shadow-none top-4 right-4">
          <X size={20} />
        </AlertDialogCancel>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-3xl font-medium">
            Add new address
          </AlertDialogTitle>
          <form className="overflow-y-scroll py-2 translate-y-4 h-[339px] grid gap-6">
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
        <AlertDialogFooter>
          <AlertDialogCancel className="border-none translate-x-4 shadow-none">
            <div className={`${stylesButton.fwButtonCancel}`}>
              <div
                className={`${stylesButton.fwButtonCancelDiv} ${stylesButton.fwButtonCancelDiv1}`}
              >
                <span className={`${stylesButton.fwButtonCancelSpan}`}>
                  <p className={`${stylesButton.fwButtonContainerP}`}>CANCEL</p>
                </span>
              </div>
              <div
                className={`${stylesButton.fwButtonCancelDiv} ${stylesButton.fwButtonCancelDiv2}`}
              >
                <span className={`${stylesButton.fwButtonContainerSpan}`}>
                  <p className={`${stylesButton.fwButtonCancelP}`}>CANCEL</p>
                </span>
              </div>
            </div>
          </AlertDialogCancel>
          <AlertDialogAction className="border-none shadow-none">
            <div className={`${stylesButton.fwButtonAccept}`}>
              <div
                className={`${stylesButton.fwButtonAcceptDiv} ${stylesButton.fwButtonAcceptDiv1}`}
              >
                <span className={`${stylesButton.fwButtonAcceptSpan}`}>
                  <p className={`${stylesButton.fwButtonContainerP}`}>
                    SAVE ADDRESS
                  </p>
                </span>
              </div>
              <div
                className={`${stylesButton.fwButtonAcceptDiv} ${stylesButton.fwButtonAcceptDiv2}`}
              >
                <span className={`${stylesButton.fwButtonAcceptSpan}`}>
                  <p className={`${stylesButton.fwButtonAcceptP}`}>
                    SAVE ADDRESS
                  </p>
                </span>
              </div>
            </div>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
