import { useData } from "../../context/dataHabitContext"
import { HabitCard } from "../HabitCard/HabitCard"


export const HabitContent: React.FC = () => {

    const { habits,
        newHabit,
        addHabit,
        setNewHabit } = useData()

    return (
        <main>
            <div className="flex gap-2 mb-8">
                <input
                    type="text"
                    value={newHabit}
                    onChange={(e) => setNewHabit(e.target.value)}
                    placeholder="Nuevo hábito"
                    className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <button onClick={addHabit}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-95 transition-transform"
                >Agregar</button>
            </div>
            <div className="space-y-4">
                {habits?.map((habit) => (
                    <HabitCard key={habit.id} habit={habit} />
                ))}
            </div>
        </main>
    )
}