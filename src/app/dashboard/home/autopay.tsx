import { Switch } from "@/components/ui/switch";
import { useUser } from "@/context/user";
import { useOrders } from "@/context/pendingOrder";

interface AutoPayProps {
  onAutoPayToggle: () => void;
}

export default function AutoPay({ onAutoPayToggle }: AutoPayProps) {
  const { toggle, toggleState } = useUser();
  const { pendingOrders } = useOrders();

  const handleToggle = () => {
    toggle();

    // when you call setToggle state, change doesnt happemn immediaitely, hence toggleState is false at this;
    const updatedToggle = !toggleState;

    if (updatedToggle && pendingOrders.length >= 1) {
      onAutoPayToggle();
    }
  };

  return (
    <div className="text-sm">
      <Switch
        checked={toggleState}
        onCheckedChange={handleToggle}
        className="text-sm"
      />
    </div>
  );
}
