import React from "react";
import styles from "./index.module.css";

function Register() {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <h2> User registration</h2>
        <input type="text" placeholder="Enter username..." />
        <input type="email" placeholder="Enter email..." />
        <input type="password" placeholder="Enter password..." />
        <input type="password" placeholder="Replay password..." />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
