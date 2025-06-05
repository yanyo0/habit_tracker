import { createContext, useState , useContext} from "react"
import { db, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import  { collection, addDoc, getDocs, updateDoc, doc,deleteDoc} from "firebase/firestore";
import type { Habit, DataHabitContext } from "../types";

export const DataContext = createContext<DataHabitContext>({} as DataHabitContext)

export const DataHabitProvider = ({ children }: { children: React.ReactNode }) => {
    const [habits, setHabits] = useState<Habit[]>([]);
      const [newHabit, setNewHabit] = useState('');
    
      const [user] = useAuthState(auth);
    
    
      const fetchHabits = async () => {
        if(!user){
            setHabits([]);
            return
        }
    
        const querySnapshot = await getDocs(collection(db, "users", user.uid, 'habits'));
        const habitsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Habit[];
        setHabits(habitsData);
      };
    
      const addHabit = async () => {
        if(!user)return
        try{
            await addDoc(collection(db, "users", user.uid, 'habits'), {
                name: newHabit,
                completedDates: []
              });
              setNewHabit('');
              fetchHabits();
        }
        catch (error){
            console.log(error)
        }
      
      };

      const deleteHabite = async (id : string) => {
        if(!user)return
        try {
            await deleteDoc(doc(db, "users", user.uid, 'habits', id));
            fetchHabits();
          } catch (error) {
            console.log(error)
          }
      }

    
      const toggleDate = async (habitId: string, date: string) => {
        if(!user)return
        const habitRef = doc(db, "users", user.uid, 'habits', habitId);
        const habit = habits.find(h => h.id === habitId)!;
        const updatedDates = habit.completedDates.includes(date)
          ? habit.completedDates.filter(d => d !== date)
          : [...habit.completedDates, date];
      
        await updateDoc(habitRef, { completedDates: updatedDates });
        fetchHabits();
      };

      const data : DataHabitContext = {
        habits,
        setHabits,
        newHabit,
        setNewHabit,
        fetchHabits,
        addHabit,
        deleteHabite,
        toggleDate
      }

      return (
        <DataContext.Provider value={data}>{children}</DataContext.Provider>
      )
   
}

export const useData = () => {
    const dataContext = useContext(DataContext);
    if (!dataContext) {
        throw new Error('useData debe estar dentro de DataProvider');
    }
    return dataContext;
};

