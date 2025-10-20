import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { LogoFiladelfia } from "../assets/SVG/LogoFila";
import { Modal } from "./components/Modal/Modal";
import Lottie from "lottie-react";

export const App = () => {
  const { width, height } = useWindowSize();

  return (
    <div className="flex justify-center flex-col items-center bg-blue-100 w-screen h-screen">
      <Confetti
        width={width}
        height={height}
        numberOfPieces={500}
        recycle={false}
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
      <Modal />
    </div>
  );
};

export default App;
