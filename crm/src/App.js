import logo from "./logo.svg";
import "./App.css";
import ButtonUsage from "./Button";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Handling Form");
    setIsLoggedIn(true);
    // handle form submission here
  };

  if (isLoggedIn) {
    return <div>Welcome to the dashboard!</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-container">
          <h3 style={{ fontSize: "64px" }}>Login</h3>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <TextField id="outlined-basic" label="Email" variant="outlined" />
              <TextField
                id="outlined-basi"
                label="Password"
                variant="outlined"
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
