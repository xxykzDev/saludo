import { createContext, useContext } from "react";

const DEFAULT_CONTEXT = {
  metaplex: null,
};

export const MetaplexContext = createContext(DEFAULT_CONTEXT);

export function useMetaplex() {
  return useContext(MetaplexContext);
}

useMetaplex.displayName = "useMetaplex"; // Agregamos un nombre de pantalla
