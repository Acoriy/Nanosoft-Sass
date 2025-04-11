
// import React from 'react';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle
// } from '@/components/ui/dialog';
// import { Button } from '@/components/ui/button';

// interface ConfirmDialogProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   title: string;
//   description: string;
//   confirmText?: string;
//   cancelText?: string;
//   onConfirm: () => void;
//   confirmVariant?: 'default' | 'destructive';
//   isConfirming?: boolean;
// }

// const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
//   open,
//   onOpenChange,
//   title,
//   description,
//   confirmText = "Confirmer",
//   cancelText = "Annuler",
//   onConfirm,
//   confirmVariant = 'default',
//   isConfirming = false
// }) => {
//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>{title}</DialogTitle>
//           <DialogDescription>{description}</DialogDescription>
//         </DialogHeader>
//         <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
//           <Button variant="outline" onClick={() => onOpenChange(false)} disabled={isConfirming}>
//             {cancelText}
//           </Button>
//           <Button 
//             variant={confirmVariant} 
//             onClick={onConfirm} 
//             disabled={isConfirming}
//             className={confirmVariant === 'destructive' ? 'bg-red-500 hover:bg-red-600' : ''}
//           >
//             {isConfirming ? 'En cours...' : confirmText}
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default ConfirmDialog;


import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface ConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  confirmVariant?: 'default' | 'destructive';
  isConfirming?: boolean;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  onOpenChange,
  title,
  description,
  confirmText = "Confirmer",
  cancelText = "Annuler",
  onConfirm,
  confirmVariant = 'default',
  isConfirming = false
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <Button 
            variant="outline" 
            onClick={() => onOpenChange(false)} 
            disabled={isConfirming}
            aria-label="Annuler l'opération"
          >
            {cancelText}
          </Button>
          <Button 
            variant={confirmVariant} 
            onClick={onConfirm} 
            disabled={isConfirming}
            className={confirmVariant === 'destructive' ? 'bg-red-500 hover:bg-red-600' : ''}
            aria-label={confirmText}
          >
            {isConfirming ? 'En cours...' : confirmText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDialog;
