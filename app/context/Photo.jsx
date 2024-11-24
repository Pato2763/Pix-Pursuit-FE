import { createContext, useState } from "react";

export const PhotoContext = createContext();

export const PhotoProvider = ({ children }) => {
  const [photo, setPhoto] = useState(null);

  return (
    <PhotoContext.Provider value={{ photo, setPhoto }}>
      {children}
    </PhotoContext.Provider>
  );
};
