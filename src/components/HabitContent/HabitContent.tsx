import { useData } from "../../context/dataHabitContext"
import { HabitCard } from "../HabitCard/HabitCard"
import { Loader } from "../Loader/Loader";
import { GoX } from "react-icons/go";


export const HabitContent: React.FC = () => {

    const { habits,
        newHabit,
        addHabit,
        setNewHabit,
        error,
        setError,
        loading
        } = useData()

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
                {loading && <Loader />}
                {habits?.map((habit) => (
                    <HabitCard key={habit.id} habit={habit} />
                ))}
            </div>

            {error &&
            <div className="w-max h-max grid grid-cols-1 grid-rows-2 gap-2
                            absolute top-0 left-0 right-0 bottom-0
                            bg-white m-auto px-8 py-4 rounded-xl border-2 border-blue-700 ">
                <button onClick={()=> {setError(null)}}
                       className="justify-self-end text-blue-500 hover:text-blue-700 ">
                    <GoX className="h-5 w-5" />
                </button>
                <p className="text-xl font-semibold text-gray-800 pb-4">{error}</p>
            </div>
            }
        </main>
    )
}