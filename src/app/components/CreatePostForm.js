import {useState} from "react";
import styles from "./components.module.css";
import '../globals.css';

const CreatePostForm = ({createPostFunction}) => {
    const [imageUpload, setImageUpload] = useState();
    const [otherImageUpload, setOtherImageUpload] = useState();
    return (
        <div className={styles.container}>
            <form 
                className={styles.Form} 
                onSubmit={(e) => createPostFunction(e,imageUpload, otherImageUpload)}>

                    <label htmlFor="postContent">Description</label>
                    <input type="text" id="postContent" name="postContent"/>

                    <label htmlFor="trackID">Music Link:</label>
                    <input type="url" id="trackID" name="trackID"/>
            
                    <label htmlFor="image">Screenshot</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        placeholder="Choose Image"
                        accept="image/png,image/jpeg,"
                        onChange={(e)=>{
                            setImageUpload(e.target.files[0]);
                    }}
            />

                    <label htmlFor="otherImage">Image</label>
                            <input
                            type="file"
                            id="otherImage"
                            name="otherImage"
                            placeholder="Choose image"
                            accept="image/png,image/jpeg"
                            onChange={(e) => setOtherImageUpload(e.target.files[0])}
                            />

                <button className={styles.Button} type= "submit">Post</button>
            </form>
        </div>
    );
};

export default CreatePostForm;