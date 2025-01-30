
import { create } from "zustand";
import axios from "axios";

export const useStore = create((set) => ({
    
    // Loading state
    isLoading: false,
    setIsLoading: (isLoading) => set({ isLoading }),
  
    
  }));