"use client";

import { createContext, useState, useContext, ReactNode } from 'react';

interface EditModeContextType {
    isEditMode: boolean;
    toggleEditMode: () => void;
  }

  const EditModeContext = createContext<EditModeContextType | undefined>(undefined);

  export function EditModeProvider({ children }: { children: ReactNode }) {
    const [isEditMode, setIsEditMode] = useState(false);
  
    const toggleEditMode = () => {
      setIsEditMode(prevMode => !prevMode);
    };
  
    return (
      <EditModeContext.Provider value={{ isEditMode, toggleEditMode }}>
        {children}
      </EditModeContext.Provider>
    );
  }
  

  export function useEditMode() {
    const context = useContext(EditModeContext);
    if (context === undefined) {
      throw new Error('useEditMode must be used within an EditModeProvider');
    }
    return context;
  }