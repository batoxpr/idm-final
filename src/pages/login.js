import { useEffect } from "react";
import { useRouter } from "next/router";
import LoginForm from "@/app/components/LoginForm";
import styles from "@/app/components/components.module.css"
import '../app/globals.css';


export default function Login({isLoggedIn, loginUser}) {
  const router = useRouter();
  useEffect(() => {
    // to do: if user is logged in forward them to the profile page
    if (isLoggedIn) router.push("/");
  }, [isLoggedIn]);

    return (
          <main className={styles.loginpg}>
            {/* <div className={styles.backgrnd}>
                        <img src={"https://github.com/batoxpr/madcapmansion/blob/main/sound/background.png?raw=true"}/> 
                    </div> */}
            <h2>Already a member?</h2>
            <LoginForm loginUser={loginUser}/>
          </main>
    );
}