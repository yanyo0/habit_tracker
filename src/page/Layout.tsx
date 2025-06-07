import { auth } from "../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useData } from "../context/dataHabitContext";
import { useEffect } from "react";
import { HabitContent } from "../components/HabitContent/HabitContent";
import { Header } from "../components/Header/Header"
import { Loader } from "../components/Loader/Loader";
import { Auth } from "../Auth";


export const Layout: React.FC = () => {

    const [user, loading] = useAuthState(auth);
    const { fetchHabits } = useData()


    useEffect(() => {
        fetchHabits();
    }, [user]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8 text-center">

            <Header />
            {loading && <Loader />}
            {!user ? <Auth /> : <HabitContent />}
            
        </div>
    )
}