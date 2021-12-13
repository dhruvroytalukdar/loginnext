import { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "../hooks/contextHooks";

export default function login() {
  const { signIn } = useAuth();
  const router = useRouter();
  const [cred, setCred] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCred((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    signIn(cred.email, cred.password).then(() => {
      router.push("/");
    });
  };

  return (
    <div>
      <form method="post" onSubmit={formSubmit}>
        <p>Email</p>
        <input name="email" onChange={handleChange} type="email" />
        <p>Password</p>
        <input name="password" onChange={handleChange} type="password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
