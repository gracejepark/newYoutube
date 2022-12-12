import { createContext, useState } from "react";

export const DetailMenuContext = createContext();

export function DetailMenuProvider({ children }) {
  const [isBlock, setIsBlock] = useState(false);
  const toggleBlock = () => setIsBlock((mode) => !mode)
  return (
    <DetailMenuContext.Provider value={{isBlock, toggleBlock}}>{children}</DetailMenuContext.Provider>
  )
}