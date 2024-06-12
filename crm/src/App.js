import "./App.css";
import ButtonUsage from "./Button";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";
import { useState } from "react";
import * as React from "react";
import Dashboard from "./Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const url = new URL("http://192.168.1.15:8080");

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(email);
    console.log(password);

    url.searchParams.set("type", "Login");

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setIsLoggedIn(true);
    } else {
      console.log("Login failed");
    }
    // handle form submission here
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  if (isLoggedIn) {
    return (
      <div>
        {/* <div>Welcome to the dashboard!</div> */}
        <Dashboard />
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-container">
          <h3 style={{ fontSize: "64px" }}>Login</h3>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={handleEmailChange}
              />
              <TextField
                id="outlined-basi"
                label="Password"
                variant="outlined"
                onChange={handlePasswordChange}
              />
              <ButtonUsage buttonText="Log in" type="submit" />
            </FormControl>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
