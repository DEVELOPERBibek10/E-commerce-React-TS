import { Button } from "@/Components/ui/button";
import { account } from "@/Services/appwrite";

import { OAuthProvider } from "appwrite";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const handleGoogleLogin = () => {
    try {
      account.createOAuth2Session({
        provider: OAuthProvider.Google,
        success: "http://localhost:5173/cart",
        failure: "http://localhost:5173/cart",
      });
    } catch (error: unknown) {
      console.error(error);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-200">
      <div className="min-w-[500px] min-h-[200px] grid place-content-center gap-12 rounded-xl shadow-lg shadow-gray-500">
        <h3 className="text-3xl font-semibold text-center">Login</h3>
        <Button onClick={handleGoogleLogin} className="cursor-pointer">
          <FaGoogle /> Continue with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
