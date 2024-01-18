import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import apiCAll from "@/lib/apiCall";
import Image from "next/image";
import { useState } from "react";
import { useOrders } from "@/context/pendingOrder";

interface dataProps {
  orderId: number;
}

export default function CancelModal({ orderId }: dataProps) {
  const [openDialog, setOpenDialog] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const { getPendingOrders } = useOrders();

  async function handleCancelPendingOrder() {
    setIsLoading(true);
    await apiCAll({
      url: `/order/${orderId}/cancel`,
      method: "post",
      sCB(res) {
        console.log("order cancelled", res);
        // // Remove order from pending orders
        // setPendingOrders((prevPendingOrders) =>
        //   // Pending orders need to be updated, since filter creates a new array, we need to set the pendingorders back to the newly created array
        //   prevPendingOrders.filter((oId) => cancelOrderId !== oId.id)
        // );
        setOpenDialog(false);
        setIsLoading(false);
        getPendingOrders();
      },
      eCB(res) {
        setIsLoading(false);
      },
      toast: true,
    });
  }

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button className="dark:bg-primary !text-cancel border !border-cancel !border-opacity-25 hover:opacity-80">
          Cancel
        </Button>
      </DialogTrigger>

      <DialogContent className="text-center dark:text-white">
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
            isLoading={isloading}
          >
            Yes
          </Button>
          <Button className="w-full mt-5" onClick={() => setOpenDialog(false)}>
            No
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
