import React, { useMemo, useState } from "react";

interface MenuContextValue {
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuContext = React.createContext<MenuContextValue>({
  isShown: false, setIsShown: () => undefined,
});

interface Props {
  children: React.ReactNode;
};

export function MenuContextProvider({ children }: Props) {
    const [isShown, setIsShown] = useState(false);
    
  const contextValue = useMemo(() => ({
    isShown,
    setIsShown
  }), [isShown]);

  return (
    <MenuContext.Provider value={contextValue}>
      {children}
    </MenuContext.Provider>
  )
 }

