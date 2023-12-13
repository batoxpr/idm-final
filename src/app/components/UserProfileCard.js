import styles from './components.module.css';
import '../globals.css';

const UserProfileCard = ({user}) => {
    return (
        <div className={styles.UserProfile}>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
         </div>
    );
};

export default UserProfileCard;