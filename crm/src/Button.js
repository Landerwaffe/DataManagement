import * as React from "react";
import Button from "@mui/material/Button";

export default function ButtonUsage({ buttonText, type }) {
  return (
    <Button variant="contained" type={type}>
      {buttonText}
    </Button>
  );
}
