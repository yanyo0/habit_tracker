import type { Habit } from '../../types';
import { useData } from '../../context/dataHabitContext';
import { FaTrash as TrashIcon } from 'react-icons/fa';


export const HabitCard = ({ habit }: { habit: Habit }) => {

const {toggleDate, deleteHabite} = useData()

    
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{habit.name}</h3>
        <button className="text-red-500 hover:text-red-700"
                onClick={()=>deleteHabite(habit.id)}
        >
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>

     
      <div className="grid grid-cols-7 gap-2">
        {[0, 1, 2, 3, 4, 5, 6].map((day) => {
          const date = new Date();
          date.setDate(date.getDate() - day);
          const dateStr = date.toISOString().split('T')[0];
          return (
            <label key={day} className="flex flex-col items-center">
              <span className="text-xs text-gray-500 mb-1">
                {['D', 'L', 'M', 'X', 'J', 'V', 'S'][day]}
              </span>
              <input
                type="checkbox"
                checked={habit.completedDates.includes(dateStr)}
                onChange={() => toggleDate(habit.id!, dateStr)}
                className="h-6 w-6 text-blue-600 rounded-full border-2 border-gray-300 focus:ring-blue-500"
              />
            </label>
          );
        })}
      </div>
    </div>
  );
};


