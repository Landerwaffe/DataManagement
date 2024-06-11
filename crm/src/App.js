import logo from "./logo.svg";
import "./App.css";
import ButtonUsage from "./Button";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, FormLabel } from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Login</h3>
        <FormControl>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basi" label="Password" variant="outlined" />
          {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
          {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
          <ButtonUsage />
        </FormControl>
      </header>
    </div>
  );
}

export default App;
