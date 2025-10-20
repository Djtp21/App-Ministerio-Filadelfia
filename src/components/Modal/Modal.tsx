import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ModalProps {
  onContinue: () => void;
}
export const Modal = ({ onContinue }: ModalProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="text-white bg-green-950 w-[200px] focus:outline-none">
        Empezar Formulario
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogDescription className="text-[#000000]">
            Este formulario contiene datos personales, si eres menor de edad
            pidele ayuda tu representante
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="text-red-400 hover:text-white">
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction onClick={onContinue}>Continuar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
