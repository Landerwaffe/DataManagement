import logo from "./logo.svg";
import "./App.css";
import ButtonUsage from "./Button";
import TextField from "@mui/material/TextField";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <ButtonUsage />
      </header>
    </div>
  );
}

export default App;
