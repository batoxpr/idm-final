import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import CreatePostForm from "@/app/components/CreatePostForm";
import { getFirestore, collection, addDoc, query, where, getDocs, orderBy, serverTimestamp } from "firebase/firestore"
import { getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";

export default function CreatePost({isLoggedIn, userInformation}) {
    const router = useRouter ();
    const [user, setUser] = useState({});
    useEffect(() => {
      // If user is logged in forward them to the profile page
      if (!isLoggedIn) router.push("/"); // router push takes to whatever page after /
    }, [isLoggedIn]);

    useEffect(() => {
      async function getUser() {
          let user = {};
          const db = getFirestore();
          const q = query(
              collection(db, "users"),
              where("userId", "==", userInformation?.uid)
          );
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
              user = doc.data();
          });
          setUser(user);
      }
      getUser();
    }, [userInformation]);

    const createPostFunction = useCallback(
        async (e, imageUpload, otherImageUpload) => {
        e.preventDefault();
        // Get Post content from Form
        const postContent = e.currentTarget.postContent.value;
        const trackID = e.currentTarget.trackID.value;
        // Initiate Firebase
        const storage = getStorage();
        const db = getFirestore();
        // Variable for image
        let imageURL;
                const storageRef = ref(storage, imageUpload?.name);
                // if(imageUpload){
          await uploadBytes(storageRef, imageUpload)
            .then(async (snapshot) => {
              await getDownloadURL(snapshot.ref).then((url) => {
                  imageURL = url;
                });
            })
            .catch((error) => {
              console.warn(error);
            });

            let otherImageURL;
            const otherStorageRef = ref(storage, otherImageUpload?.name);
            await uploadBytes(otherStorageRef, otherImageUpload)
              .then(async (snapshot) => {
                await getDownloadURL(snapshot.ref).then((url) => {
                  otherImageURL = url;
          });
                })
        .catch((error) => {
          console.warn(error);
        })

        // Get User information to link post to user
        const userId = userInformation.uid;
        // Send post to firebase with addDoc
        console.log(user);
        const data = await addDoc(collection(db, "posts"), {
            postContent: postContent,
            userId: userId,
            name: user?.name || '',
            imageURL: imageURL || '',
            otherImageURL: otherImageURL || '',
            trackID: trackID,
            createdAt: serverTimestamp(),
        });
        // Reroute the user away from createPost
        if(data) {
            router.push("/");
        }
    }, 
    [addDoc, collection, getFirestore, router, user, userInformation]
    );

    return (
          <main>
            <h2>New Post</h2>
            <CreatePostForm createPostFunction={createPostFunction} />
          </main>
    );
}