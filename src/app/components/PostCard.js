import styles from './components.module.css';
import '../globals.css';

const PostCard = ({ post }) => {
    return (
        <div className={styles.UserProfile}>
            <img src={post.imageURL} alt="" />
            <p>{post.postContent}</p>
         </div>
    );
};

export default PostCard;