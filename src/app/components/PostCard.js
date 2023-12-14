import styles from './components.module.css';
import '../globals.css';


const PostCard = ({ user, post }) => {
    return (
        <div className={styles.PostStyle}>
            <p className={styles.date}>{post.createdAt.toDate().toDateString()}</p>
            <p className={styles.username}>{post?.name}:</p>
            <p>{post.postContent}</p>
            <div className={styles.Images}>
                <img src={post.imageURL} alt="Screenshot" />
                <img src={post.otherImageURL} alt="" /></div>
            <a target="_blank" rel="noopener noreferrer" href={post.trackID}>Listen</a>
         </div>
    );
};
export default PostCard;