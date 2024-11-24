import { createContext, useState } from "react";

export const ActivePursuitContext = createContext();

export const ActivePursuitProvider = ({ children }) => {
  const [activePursuit, setActivePursuit] = useState(null);

  return (
    <ActivePursuitContext.Provider value={{ activePursuit, setActivePursuit }}>
      {children}
    </ActivePursuitContext.Provider>
  );
};
