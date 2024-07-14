import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BlurContextProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const BlurContext = createContext<BlurContextProps | undefined>(undefined);

export const BlurProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <BlurContext.Provider value={{ visible, setVisible }}>
      {children}
    </BlurContext.Provider>
  );
};

export const useBlur = () => {
  const context = useContext(BlurContext);
  if (!context) {
    throw new Error('useBlur must be used within a BlurProvider');
  }
  return context;
};
