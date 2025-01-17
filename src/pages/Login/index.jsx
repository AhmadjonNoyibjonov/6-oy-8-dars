import React, { useRef } from "react";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  function handleClick(event) {
    event.preventDefault();

    const user = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    fetch("https://auth-rg69.onrender.com/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message == "User Not found.") {
          alert(data.message);
          usernameRef.current.focus()
          usernameRef.current.style.outlineColor = 'red'
          return;
        }
        if (data.message == "Invalid Password!") {
          alert(data.message);
          passwordRef.current.focus()
          passwordRef.current.style.outlineColor = 'red'
          return;
        }

        if (data.accessToken) {
          localStorage.setItem("user", JSON.stringify(data));
          localStorage.setItem("token", data.accessToken);

          navigate("/home");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <h2> User login</h2>
          <input ref={usernameRef} type="text" placeholder="Username..." />
          <input ref={passwordRef} type="password" placeholder="Password..." />
          <button onClick={handleClick}>LOGIN</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
