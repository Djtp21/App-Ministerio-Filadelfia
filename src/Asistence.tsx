import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/Input/Input";
import { ConfirmationDialog } from "@/components/ConfirmationDialog/ConfirmationDialog";
import { SuccessDialog } from "@/components/SuccessDialog/SuccessDialog";

interface AsistenceProps {
  onBack?: () => void;
}

export const Asistence = ({ onBack }: AsistenceProps) => {
  const [cedula, setCedula] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cedula.trim()) {
      setShowConfirmation(true);
    }
  };

  const handleConfirm = () => {
    setShowConfirmation(false);
    console.log("Asistencia registrada para cédula:", cedula);
    setShowSuccess(true);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    setCedula("");
  };

  return (
    <div className="flex justify-center items-center w-screen min-h-screen p-4" style={{ backgroundColor: '#dbeafe' }}>
      <div className="rounded-lg shadow-xl p-8 max-w-md w-full" style={{ backgroundColor: '#ffffff' }}>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-center mb-2" style={{ color: '#172554' }}>
            Registro de Asistencia
          </h2>
          <p className="text-center" style={{ color: '#4b5563' }}>
            Ingresa tu cédula para confirmar tu asistencia
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Cédula de Identidad"
            type="text"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
            placeholder="V-12345678"
            required
          />

          <div className="flex gap-4">
            {onBack && (
              <Button
                type="button"
                onClick={onBack}
                className="w-1/2"
                style={{  
                  color: '#ef4444',
                  backgroundColor: 'transparent',
                  border: '1px solid #e5e7eb'
                }}
              >
                Volver
              </Button>
            )}
            <Button
              type="submit"
              className="w-1/2 hover:bg-blue-600 hover:text-white"
              //style={{ backgroundColor: '#2768F5', color: '#ffffff' }}       
            >
              Registrar Asistencia
            </Button>
          </div>
        </form>
      </div>

      <ConfirmationDialog
        isOpen={showConfirmation}
        onClose={handleCloseConfirmation}
        onConfirm={handleConfirm}
        title="¿Confirmar asistencia?"
        message={`¿Confirmas tu asistencia con la cédula ${cedula}?`}
      />

      <SuccessDialog
        isOpen={showSuccess}
        onClose={handleCloseSuccess}
        title="¡Asistencia Registrada!"
        message="Tu asistencia ha sido registrada exitosamente. ¡Gracias por estar presente!"
      />
    </div>
  );
}
