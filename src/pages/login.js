import { useEffect } from "react";
import { useRouter } from "next/router";
import LoginForm from "@/app/components/LoginForm";
import '../app/globals.css';


export default function Login({isLoggedIn, loginUser}) {
  const router = useRouter();
  useEffect(() => {
    // to do: if user is logged in forward them to the profile page
    if (isLoggedIn) router.push("/");
  }, [isLoggedIn]);

    return (
          <main>
            <h2>Already a member?</h2>
            <LoginForm loginUser={loginUser}/>
          </main>
    );
}