import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Signup = () => {
  const { theme } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.user);
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleUseremailChange = (event) => {
    setUseremail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("signUp");
    // handle form submission logic here
  };

  return (
    <>
      <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/signin">Signin</Link></li>
                <li>{user?.name} logged in</li>
            </ul>

      <div
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
          padding: "20px", // You can add additional styling here
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          margin: "auto",
        }}
      >
        <h1 style={styles.title}>Sign Up</h1>
        <label style={styles.label}>
          Username:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Useremail:
          <input
            type="email"
            value={useremail}
            onChange={handleUseremailChange}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            style={styles.input}
          />
        </label>
        <button type="button" onClick={handleSubmit} style={styles.button}>
          Sign up
        </button>
      </div>
    </>
  );
};
const styles = {
  title: {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "#fff",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Signup;
