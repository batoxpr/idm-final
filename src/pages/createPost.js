import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import CreatePostForm from "@/app/components/CreatePostForm";
import { getFirestore, collection, addDoc } from "firebase/firestore"
import { getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";

export default function CreatePost({isLoggedIn, userInformation}) {
    const router = useRouter ();
    useEffect(() => {
      // If user is logged in forward them to the profile page
      if (!isLoggedIn) router.push("/"); // router push takes to whatever page after /
    }, [isLoggedIn]);

    const createPostFunction = useCallback(
        async (e, imageUpload) => {
        e.preventDefault();
        // Get Post content from Form
        const postContent = e.currentTarget.postContent.value;
        // Initiate Firebase
        const storage = getStorage();
        const db = getFirestore();
        // Variable for image
        let imageURL;
        const storageRef = ref(storage, imageUpload?.name);
        if(imageUpload){
          await uploadBytes(storageRef, imageUpload)
            .then(async (snapshot) => {
              await getDownloadURL(snapshot.ref).then((url) => {
                  imageURL = url;
                });
            })
            .catch((error) => {
              console.warn(error);
            });
          }

        // Get User information to link post to user
        const userId = userInformation.uid;
        // Send post to firebase with addDoc
        const data = await addDoc(collection(db, "posts"), {
            postContent: postContent,
            userId: userId,
            imageURL: imageURL || '',
        });
        // Reroute the user away from createPost
        if(data) {
            router.push("/");
        }
    }, 
    [addDoc, collection, getFirestore, router, userInformation]
    );

    return (
          <main>
            <h2>Create Post</h2>
            <CreatePostForm createPostFunction={createPostFunction} />
          </main>
    );
}