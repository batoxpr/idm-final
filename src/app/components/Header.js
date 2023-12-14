import Link from "next/link";
import styles from "./components.module.css"
import '../globals.css';

const Header = ({isLoggedIn, logoutUser}) => {
    return (
        <header className={styles.Header}>
            
                <Link href="/">
                    <div className={styles.logo}>
                        <img src={"https://github.com/batoxpr/idm-midterm/blob/main/screenshots/logo2.png?raw=true"}/> 
                    </div>
                </Link>
           
            <nav className={styles.HeaderNav}>
                {isLoggedIn && (
                    <>
                    <Link href="/">Music Log</Link>
                    <Link href="/createPost">Post</Link>
                    <Link href="/profile">Profile</Link>
                    <a onClick={logoutUser}>Log Out</a>
                    </>
                )}
                {!isLoggedIn && (
                    <>
                    <Link href="/login">Login</Link>
                    <Link href="/join">Join Budify</Link>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;