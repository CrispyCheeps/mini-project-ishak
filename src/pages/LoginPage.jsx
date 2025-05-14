import LoginForm from "@/components/LoginForm";
import React from "react";

export const AuthContext = React.createContext();
const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [token, setToken] = React.useState(null);

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <AuthContext.Provider
          value={{
            email,
            setEmail,
            password,
            setPassword,
            isLoggedIn,
            setIsLoggedIn,
            error,
            setError,
            token,
            setToken,
          }}
        >
          <LoginForm />
        </AuthContext.Provider>
      </div>
    </div>
  );
};

export default LoginPage;
