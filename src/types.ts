import type { Dispatch, SetStateAction } from "react";

export type Habit = {
    id: string; 
    name: string;
    completedDates: string[];
  };

export  type DataHabitContext = {
    habits : Habit[]
    setHabits : Dispatch<SetStateAction<Habit[]>>
    newHabit: string
    setNewHabit: Dispatch<SetStateAction<string>>
    fetchHabits: () => Promise<void>
    addHabit: () => Promise<void>
    deleteHabite: (id: string) => Promise<void>
    toggleDate : (habitId: string, date: string) => Promise<void>
    error : string | null
    setError : Dispatch<SetStateAction<string | null>>
    loading: boolean
  }