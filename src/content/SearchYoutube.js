import * as React from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
export default function SearchYoutube() {
  const key = process.env.REACT_APP_GOOGLE_API;
  const resultNum = 5;
  const [searchValue, setSearchValue] = React.useState("");
  const [listVideos, setListVideos] = React.useState([]);

  async function getSearchResult(searchInput) {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${resultNum}&q=${encodeURI(
          searchInput
        )}&type=video&key=${key}`
      );
      const data = response.data.items;
      console.log(
        "Test Log -> file: SearchYoutube.js -> line 27 -> getSearchResult -> data",
        data
      );
      console.log(
        "Test Log -> file: SearchYoutube.js -> line 19 -> getSearchResult -> response",
        data
      );
      setListVideos(
        data.map(({ id, snippet }) => ({
          title: snippet.title,
          link: `https://www.youtube.com/watch?v=${id.videoId}`,
          thumbnails: snippet.thumbnails.high.url,
        }))
      );
    } catch (error) {
      console.log("Error happen when calling API: ", error);
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
    <div>
      <Box
        sx={{ mt: 2, mb: 2 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        onKeyPress={handleReturn}
      >
        <TextField
          fullWidth
          label="Search Youtube Videos"
          onChange={handleChange}
        />
        <IconButton sx={{ p: "10px" }} onClick={searchHandle}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box component="span" sx={{ display: "block" }}>
        {listVideos.map((video) => (
          <Card sx={{ maxWidth: 345, display: "inline" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{ maxWidth: 200 }}
                image={video.thumbnails}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {video.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  123
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </div>
  );
}
