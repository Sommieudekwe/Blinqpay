import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";

// interface dataProps {
//   dialogType: "pay" | "cancel" | null;
//   handleCancelPendingOrder: () => void
//   setIsDialogOpen:
// }

export default function canCelModal({
  dialogType,
  handleCancelPendingOrder,
  setIsDialogOpen,
  isDialogOpen,
}: dataProps) {
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="text-center text-white">
        {dialogType === "pay" ? (
          <div>Successful</div>
        ) : dialogType === "cancel" ? (
          <div className="flex flex-col items-center">
            <Image
              src="./dashboard/warning.svg"
              alt="warning"
              width={88}
              height={88}
              className="flex justify-center"
            />

            <p className="mt-5 font-medium text-lg lg:text-2xl">
              Are you sure you want to cancel this order?
            </p>

            <Button
              variant="primary"
              className="w-full mt-12"
              onClick={handleCancelPendingOrder}
            >
              Yes
            </Button>
            <Button
              className="w-full mt-5"
              onClick={() => setIsDialogOpen(false)}
            >
              No
            </Button>
          </div>
        ) : dialogType === null ? (
          <div className="flex flex-col items-center">
            <Image
              src="./dashboard/warning.svg"
              alt="warning"
              width={88}
              height={88}
              className="flex justify-center"
            />

            <p className="mt-5 font-medium text-lg lg:text-2xl">
              Are you sure you want to cancel all order?
            </p>

            <Button
              variant="primary"
              className="w-full mt-12"
              onClick={() => console.log("All order has been cancelled")}
            >
              Yes
            </Button>
            <Button
              className="w-full mt-5"
              onClick={() => setIsDialogOpen(false)}
            >
              No
            </Button>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
