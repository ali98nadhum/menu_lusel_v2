
import { create } from "zustand";
import axios from "axios";

export const useStore = create((set) => ({
    
    // Loading state
    isLoading: false,
    setIsLoading: (isLoading) => set({ isLoading }),
  
    // fetch category data state
  categoryData: [],
  fetchData: async () => {
    try {
      set({ isLoading: true });
      const response = await axios.get(
        "http://localhost:8000/api/v1/category"
      );
      set({ categoryData: response.data.data, isLoading: false });
    } catch (error) {
      console.error("Error fetching data", error);
      set({ isLoading: false });
    }
  },
  }));