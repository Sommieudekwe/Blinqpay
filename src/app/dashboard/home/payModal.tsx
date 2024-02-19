import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import apiCAll from "@/lib/apiCall";
import Image from "next/image";
import { useState } from "react";
import { useOrders } from "@/context/pendingOrder";
import { useStore } from "@/context/store";

interface dataProps {
  orderId: number;
}

export default function PayModal({ orderId }: dataProps) {
  const [openDialog, setOpenDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { getPendingOrders } = useOrders();
  const { getConnectedBanksBalance } = useStore();

  async function handlePayPendingOrder() {
    setIsLoading(true);
    const id = localStorage.getItem("selectedBankId");
    await apiCAll({
      url: `/order/${orderId}/pay`,
      method: "post",
      sCB(res) {
        console.log("order paid", res);
        setOpenDialog(false);
        setIsLoading(false);
        getPendingOrders();
        getConnectedBanksBalance(Number(id));
      },
      eCB(res) {
        setIsLoading(false);
        setOpenDialog(false);
        console.error(res.error);
      },
      toast: true,
    });
  }

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button className="dark:bg-primary !text-white border !border-white !border-opacity-25 hover:opacity-80 whitespace-nowrap">
          Pay now
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
            Are you sure you want to pay this order?
          </p>

          <Button
            variant="primary"
            className="w-full mt-12"
            onClick={handlePayPendingOrder}
            isLoading={isLoading}
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
