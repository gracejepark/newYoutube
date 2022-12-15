import { createContext, useState } from "react";

export const OpacityContext = createContext();

export function OpacityProvider({ children }) {
  const [isActive, setActive] = useState(false);
  const toggleActive = () => setActive((mode) => !mode)
  console.log('hey')
  return (
    <OpacityContext.Provider value={{isActive, toggleActive}}>{children}</OpacityContext.Provider>
  )
}