import { useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { LogoFiladelfia } from "./assets/SVG/LogoFila";
import { Modal } from "./components/Modal/Modal";
import { Form } from "./components/Form/Form";
import { Asistence } from "./Asistence";

export const App = () => {
  const { width, height } = useWindowSize();
  const [currentView, setCurrentView] = useState<'home' | 'form' | 'asistence'>('home');

  const handleContinue = () => {
    setCurrentView('form');
  };

  const handleAsistence = () => {
    setCurrentView('asistence');
  };

  const handleBack = () => {
    setCurrentView('home');
  };

  // Si currentView es 'form', muestra el formulario
  if (currentView === 'form') {
    return <Form onBack={handleBack} />;
  }

  // Si currentView es 'asistence', muestra la página de asistencia
  if (currentView === 'asistence') {
    return <Asistence onBack={handleBack} />;
  }

  // Si viewForm es false, muestra la página de bienvenida
  return (
    <div className="flex justify-center flex-col items-center bg-[#dee2e6] w-screen h-screen">
      <Confetti
        width={width}
        height={height}
        numberOfPieces={500}
        recycle={false}
        colors={['#F4D35E', '#28AFB0', '118ab2']}
      />

      <LogoFiladelfia />

      <div className="flex flex-col items-center gap-10 m-2 justify-center item-center">
        <h1 className=" sm:text-[15px] text-blue-950 text-center lg:text-base md:text-2xl">
          ¡Únete a la Juventud de la Iglesia!
        </h1>
        <p className="text-center text-[14px] lg:text-2xl md:text-sm  ">
          Inscríbete hoy, conecta con tu fe y haz nuevos amigos.
        </p>
      </div>
      <Modal onContinue={handleContinue} />
    <button 
        onClick={handleAsistence}
        className="mt-4 px-7 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
        style={{ backgroundColor: '#2768F5', color: '#ffffff' }}
      >
        Registrar Asistencia
      </button>

    </div>
  );
};

export default App;
