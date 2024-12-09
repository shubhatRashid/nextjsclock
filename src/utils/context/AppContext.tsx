import React, { createContext, useContext, useState, ReactNode, Dispatch,useEffect } from 'react';
import { NoteCategoryType, TodoType } from '@/types';
import { useToast } from "@/hooks/use-toast";
// Define the shape of the context state
interface AppContextType {
  notes: NoteCategoryType[]; 
  setNotes: Dispatch<React.SetStateAction<NoteCategoryType[]>>; 
  todos : TodoType[];
  setTodos : Dispatch<React.SetStateAction<TodoType[]>>; 
}

// Create the context with default values
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider component
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [notes, setNotes] = useState<NoteCategoryType[]>([]);
  const [todos, setTodos] = useState<TodoType[]>([])
  const {toast} = useToast()

  const getAllData = async () => {
    try {
        let response = await fetch('/api/data');
        
        if (response.ok) {
            let data = await response.json();
            const parsedData = JSON.parse(data)
            setTodos(parsedData.todos);
            setNotes(parsedData.stickynotes)
        } else {
            toast({title:`${response.status}`,description:response.statusText})
        }
    } catch (error:any) {
        const errorBody = {
            title : `${error.name} : ${error.cause}`,
            description : error.message
        }
        toast(errorBody)
    }
};

  useEffect(() => {
      getAllData()
  },[])

  return (
    <AppContext.Provider value={{ notes, setNotes,todos,setTodos }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context in other components
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
