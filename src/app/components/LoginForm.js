import styles from './components.module.css';
import '../globals.css';

const LoginForm = ({loginUser}) => {
    return (
        <div>
            <form className={styles.Form} onSubmit={(e) => loginUser(e)}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" />

                <button className={styles.Button} type= "submit">Log In</button>
            </form>
        </div>
    );
};

export default LoginForm;