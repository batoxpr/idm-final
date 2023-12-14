import { useEffect } from "react";
import { useRouter } from "next/router";
import CreateUserForm from "@/app/components/CreateUserForm";
import styles from "@/app/components/components.module.css"
import '../app/globals.css';

export default function CreateUser({ createUser, isLoggedIn }) {
    const router = useRouter ();
    useEffect(() => {
      // If user is logged in forward them to the profile page
      if (isLoggedIn) router.push("/"); // router push takes to whatever page after /
    }, [isLoggedIn]);

    return (
          <main className={styles.loginpg}>
            <h2>Join Budify Here!</h2>
            <CreateUserForm createUser={createUser}/>
          </main>
    );
}