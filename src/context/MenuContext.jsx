import { createContext, useState } from "react";

export const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => setIsOpen((mode) => !mode)
  return (
    <MenuContext.Provider value={{isOpen, toggleMenu}}>{children}</MenuContext.Provider>
  )
}