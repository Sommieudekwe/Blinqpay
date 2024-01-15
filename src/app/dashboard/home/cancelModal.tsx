import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import apiCAll from "@/lib/apiCall";
import Image from "next/image";
import { useState } from "react";

interface dataProps
{
  orderId: number;

}

export default function CancelModal({
  orderId
}: dataProps)
{
  const [open, setOpen] = useState(false)

  async function handleCancelPendingOrder()
  {
    try
    {
      await apiCAll({
        url: `/order/${orderId}/cancel`,
        method: "post",
        sCB(res)
        {
          console.log("order cancelled", res);
          // // Remove order from pending orders
          // setPendingOrders((prevPendingOrders) =>
          //   // Pending orders need to be updated, since filter creates a new array, we need to set the pendingorders back to the newly created array
          //   prevPendingOrders.filter((oId) => cancelOrderId !== oId.id)
          // );
          // setIsDialogOpen(false);
        },
      });
    } catch (error)
    {
      console.error(error, "Can't cancel pending order");
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-cancel border border-cancel border-opacity-25">Cancel</Button>
      </DialogTrigger>

      <DialogContent className="text-center text-white">
        {/* {dialogType === "pay" ? (
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
        ) : null} */}


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
            onClick={() => setOpen(false)}
          >
            No
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
