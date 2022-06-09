import Link from "next/link";

import styles from "../styles/header.module.css";

const NavBar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.li}>Home</a>
        </Link>
        <Link href="/tasks/newTask">
          <a className={styles.li}>Add Task</a>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
