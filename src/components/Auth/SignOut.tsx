import { signOut } from "firebase/auth";
import { auth } from "../../services/firebase";

export const SignOut: React.FC = () => {

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (

      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition-transform hover:scale-105 active:scale-95"
      >
        Log out
      </button>
  );
};
