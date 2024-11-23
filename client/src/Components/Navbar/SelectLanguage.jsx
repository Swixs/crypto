import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Eng from "../../Images/ImagesLogo/eng.png";

export default function SelectLanguage() {
  const [age, setAge] = React.useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 69 }} size="small">
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        onChange={handleChange}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      >
        <MenuItem value={10}>
          <div style={{ display: "flex" }}>
            <img src={Eng} alt="eng" style={{ width: 20, height: 20 }} />{" "}
            <div style={{ marginLeft: 3 }}>Eng</div>
          </div>
        </MenuItem>
      </Select>
    </FormControl>
  );
}
