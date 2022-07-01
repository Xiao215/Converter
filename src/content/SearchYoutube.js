import * as React from "react";
import axios from "axios";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
export default function SearchYoutube() {
  const key = "AIzaSyD8B2eObk4CV1ZSd7IA3CBZa-zyrwvLqFc";
  const resultNum = 20;
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
  return (
    <Box sx={{ bgcolor: "info.light" }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        value={searchValue}
        onChange={handleChange}
        placeholder="Search Youtube Videos"
      />
      <IconButton type="submit" sx={{ p: "10px" }} onClick={searchHandle}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
