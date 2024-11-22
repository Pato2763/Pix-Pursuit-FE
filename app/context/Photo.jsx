import { createContext, useEffect, useState } from "react";

export const PhotoContext = createContext();

export const PhotoProvider = ({ children }) => {
  const [photo, setPhoto] = useState({});

  return (
    <PhotoContext.Provider value={{ photo, setPhoto }}>
      {children}
    </PhotoContext.Provider>
  );
};
