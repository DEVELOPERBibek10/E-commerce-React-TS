import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/Components/ui/dialog";

interface DialogBoxProp {
  onClose: () => void;
}

function DialogBox({ onClose }: DialogBoxProp) {
  return (
    <Dialog>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Payment Sucessfull!</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <img src="/sucess.gif" alt="sucess" />
          <p className="text-green-500">
            Payment successful. Your order is now being processed.
          </p>
        </div>
        <DialogFooter>
          <Button onClick={onClose} variant="outline">
            OK
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DialogBox;
