import { ReactNode, FC, createContext, useContext, useState } from 'react';

type GroceryContextType = {
	reloadTrigger: number;
	triggerReload: () => void;
}

const GroceryContext = createContext<GroceryContextType | undefined>(undefined);

export const GroceryProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [reloadTrigger, setReloadTrigger] = useState<number>(0);
	
	const triggerReload = () => setReloadTrigger((prev) => prev + 1);
	
	return (
		<GroceryContext.Provider value={{ reloadTrigger, triggerReload }}>
      {children}
    </GroceryContext.Provider>
	);
};

export const useGroceryContext = () => {
	const context = useContext(GroceryContext);
  if (!context) {
    throw new Error('useGroceryContext must be used within a GroceryProvider');
  }
  return context;
};