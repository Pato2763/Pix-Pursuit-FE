import { createContext, useState } from "react";

export const HostedPursuitContext = createContext();

export const HostedPursuitProvider = ({ children }) => {
  const [hostedPursuit, setHostedPursuit] = useState(null);

  return (
    <HostedPursuitContext.Provider value={{ hostedPursuit, setHostedPursuit }}>
      {children}
    </HostedPursuitContext.Provider>
  );
};
