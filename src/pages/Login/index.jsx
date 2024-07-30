import React from "react";
import styles from "./index.module.css";

function Login() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <h2> User registration</h2>
          <input type="text" placeholder="Username..." />
          <input type="password" placeholder="Password..." />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
