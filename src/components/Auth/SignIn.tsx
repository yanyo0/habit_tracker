import { auth, provider } from "../../services/firebase"
import {  signInWithPopup } from "firebase/auth";

export const SignIn = () => {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
  };

  return (
    <button
      onClick={signInWithGoogle}
      className="mt-16 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-95 transition-transform"
    >
      Login con Google
    </button>
  );
};
