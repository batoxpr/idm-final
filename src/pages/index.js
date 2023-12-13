import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getDocs, getFirestore, collection} from "firebase/firestore";
import PostCard from "@/app/components/PostCard";
import '../app/globals.css';

export default function Dashboard({isLoggedIn}) {
  const router = useRouter();
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => { 
   // if user is not logged in, send them to login page
    if (!isLoggedIn) router.push("/login");
  }, [isLoggedIn]);

  // Get all posts to display
  useEffect(() => {
    async function getAllPosts() {
      const postsArray = [];
      const db = getFirestore();
      const postsQuery = await getDocs(collection(db, "posts"));

      postsQuery.forEach((post) => {
        postsArray.push({id: post.id, ...post.data() });
      });
      setAllPosts(postsArray);
    }
    getAllPosts();
  }, []);

  return(
        <main>
          <h2>Your Music Log</h2>
          {allPosts.map((post, i) => (
            <PostCard post={post} key={i} />
          ))}
        </main>
  );
}