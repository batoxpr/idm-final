import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { query, collection, getFirestore, where, getDocs, } from "firebase/firestore";
import UserProfileCard from "@/app/components/UserProfileCard";


export default function UserProfile({isLoggedIn, loginInformation}) {
  const router = useRouter();
  const [user, setUser] = useState({});

  useEffect(() => { 
   // if user is not logged in, send them to login page
  if (!isLoggedIn) router.push("/login");
  }, [isLoggedIn]);

  //Get User to Display
  useEffect(() => {
    async function getUser() {
        let user = {};
        const db = getFirestore();
        const q = query(
            collection(db, "users"),
            where("userId", "==", loginInformation?.uid)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            user = doc.data();
        });

        setUser(user);
    }
    getUser();
  }, [loginInformation]);

  return (
        <main>
          <h2>Profile Information</h2>
          <UserProfileCard user={user} loginInformation={loginInformation} />
        </main>
  );
}