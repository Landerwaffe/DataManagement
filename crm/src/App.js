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
        <FormControl>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="standard-basic" label="Standard" variant="standard" />
          <ButtonUsage />
        </FormControl>
      </header>
    </div>
  );
}

export default App;
