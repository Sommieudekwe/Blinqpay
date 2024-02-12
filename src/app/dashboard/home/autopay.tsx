import { Switch } from "@/components/ui/switch";
import { useUser } from "@/context/user";
import { notify } from "@/components/ui/toast";

interface AutoPayProps {
  onAutoPayToggle: () => void;
}

export default function AutoPay({ onAutoPayToggle }: AutoPayProps) {
  const { toggle, toggleState } = useUser();

  const handleToggle = () => {
    toggle();
    const updatedToggle = !toggleState;

    if (updatedToggle) {
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
