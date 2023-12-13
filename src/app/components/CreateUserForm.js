import styles from "./components.module.css";
import '../globals.css';

const CreateUserForm = ({createUser}) => {
    return (
        <div>
            <form className={styles.Form} onSubmit={(e) => createUser(e)}>

                <label htmlFor="name">Username</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" />

                <button className={styles.Button} type= "submit">Join Budify</button>
            </form>
        </div>
    );
};

export default CreateUserForm;