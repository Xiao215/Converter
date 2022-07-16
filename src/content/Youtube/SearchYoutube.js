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
import EventNoteIcon from "@mui/icons-material/EventNote";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { CardActionArea } from "@mui/material";
export default function SearchYoutube(props) {
  const key = process.env.REACT_APP_GOOGLE_API;
  const resultNum = 5;
  const [searchValue, setSearchValue] = React.useState("");
  const [listVideos, setListVideos] = React.useState([]);
  const handleNext = props.handleNext;
  const setVideo = props.setVideo;
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
      setListVideos(
        data.map(({ id, snippet }) => ({
          title: snippet.title,
          link: `https://www.youtube.com/watch?v=${id.videoId}`,
          thumbnails: snippet.thumbnails.high.url,
          time: new Date(snippet.publishedAt),
          channel: snippet.channelTitle,
          description: snippet.description,
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
  const handleSelect = (index) => {
    console.log(index);

    setVideo(listVideos[index]);
    handleNext();
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
        {listVideos.map((video, index) => (
          <Card
            sx={{ display: "flex", mb: 1 }}
            key={index}
            onClick={() => handleSelect(index)}
          >
            <CardActionArea
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                p: "10px",
              }}
            >
              <CardMedia
                component="img"
                sx={{ maxWidth: 150 }}
                image={video.thumbnails}
                alt={video.title}
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {video.title}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center",
                  }}
                  color="text.secondary"
                >
                  <PermContactCalendarIcon />
                  <Typography variant="body2">{video.channel}</Typography>
                  <Typography variant="body2" sx={{ mr: 1, ml: 1 }}>
                    •
                  </Typography>
                  <EventNoteIcon />
                  <Typography variant="body2">
                    {`${video.time.toLocaleString()} ${video.time.toLocaleTimeString()}`}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {video.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </div>
  );
}
