import { useState } from "react";
import styles from "./components.module.css";
import '../globals.css';

const CreatePostForm = ({createPostFunction}) => {
    const [imageUpload, setImageUpload] = useState();
    return (
        <div>
            <form 
                className={styles.Form} 
                onSubmit={(e) => createPostFunction(e, imageUpload)}>

                <label htmlFor="postContent">Post Content</label>
                <input type="text" id="postContent" name="postContent" />

                <label htmlFor="image">Image</label>
                <input
                type="file"
                id="image"
                name="image"
                placeholder="Choose Image"
                accept="image/png, image/jpeg, image/heic, image/gif"
                onChange={(e) => {
                    setImageUpload(e.target.files[0]);
                }}
            />

                <button className={styles.Button} type= "submit">Post</button>
            </form>
        </div>
    );
};

export default CreatePostForm;