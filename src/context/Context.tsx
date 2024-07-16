import React, { createContext, useContext, useState } from "react";

type ProvideProps = {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  accountSideBar: boolean;
  setAccountSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};

const ContextProvider = createContext<ProvideProps | null>(null);

export const Context = ({ children }: { children: React.ReactNode }) => {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const [accountSideBar, setAccountSideBar] = useState<boolean>(false);
  return (
    <ContextProvider.Provider
      value={{
        sidebar,
        setSidebar,
        accountSideBar,
        setAccountSideBar,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export const useContextProvider = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("You are outside from provider");
  }

  return context;
};

export default Context;
