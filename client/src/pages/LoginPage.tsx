import React, { useState } from "react";
import Button from "../components/common/Button";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

type LoginFormUser = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const [user, setUser] = useState<LoginFormUser>({ email: "", password: "" });
  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await handleLogin(user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="py-5  h-full flex flex-col items-center justify-center gap-4">
      <h2 className="text-3xl font-semibold text-gray-800">Login</h2>
      <form onSubmit={submitHandler} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={changeHandler}
            value={user.email}
            className="px-4 py-2 border rounded"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={changeHandler}
            value={user.password}
            className="px-4 py-2 border rounded"
          />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
