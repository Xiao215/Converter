import * as React from "react";
import axios from "axios";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
export default function SearchYoutube() {
  const key = process.env.REACT_APP_GOOGLE_API;
  const resultNum = 5;
  const [searchValue, setSearchValue] = React.useState("");
  async function getSearchResult(searchInput) {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${resultNum}&q=${searchInput}&type=video&key=${key}`
      );
      console.log("response  ", response);
      return response.data;
    } catch (error) {
      return [];
    }
  }
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const searchHandle = () => {
    getSearchResult(searchValue);
  };
  const handleReturn = (e) => {
    //it triggers by pressing the enter key
    if (e.key === "Enter") {
      searchHandle();
    }
  };
  return (
    <Box
      sx={{ bgcolor: "info.light", mt: 2 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      onKeyPress={handleReturn}
    >
      <InputBase
        className="test"
        sx={{ ml: 1, flex: 1 }}
        value={searchValue}
        onChange={handleChange}
        placeholder="Search Youtube Videos"
      />
      <IconButton sx={{ p: "10px" }} onClick={searchHandle}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
