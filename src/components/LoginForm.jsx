import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { use, useContext } from "react";
import { AuthContext } from "@/pages/LoginPage";
import axios from "axios";

export default function LoginForm({ className, ...props }) {
  const {
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
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const payload = {
      email: email,
      password: password,
    };
    console.log("Login payload:", payload);

    axios
      .post("https://reqres.in/api/login", payload, {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      })
      .then((response) => {
        console.log("Login successful");
        console.log(response.data);
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          setToken(response.data.token);
          setIsLoggedIn(true);
          setError(null); // Clear any previous error
          // You can redirect the user or perform any other action here
          // For example, redirect to the dashboard or home page
          navigate("/mini-project/beranda");
        }
        // You can handle the response here
      })
      .catch((error) => {
        console.error("Error:", error);
        if (error.response) {
          // Error response from the server
          setError(error.response.data.error);
        } else {
          // Network or other errors
          setError("An error occurred");
        }
      });
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  onChange={handleChange}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  autoComplete="email"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  onChange={handleChange}
                  name="password"
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                />
              </div>
              {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
              )}
              <Button onClick={handleLogin} type="button" className="w-full">
                Login
              </Button>
              {/* <Button variant="outline" className="w-full">
                Login with Google
              </Button> */}
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link className="underline underline-offset-4" to="/register">
                Sign Up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
