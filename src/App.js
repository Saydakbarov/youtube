import { Box, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChannelDetails from "./Components/ChannelDetails/ChannelDetails";
import Feeds from "./Components/Feeds/Feeds";
import Navbar from "./Components/Navbar/Navbar";
import SearchFeeds from "./Components/SearchFeed/SearchFeeds";
import VideoDetails from "./Components/VideoDetails/VideoDetails";


function App() {
  return (
    <BrowserRouter>
    <CssBaseline/>
      <Box sx={{backgroundColor:"#000"}}>
         <Navbar/>
        <Routes>
          <Route path="/" element={<Feeds/>} />
          <Route path="/video/:id" element={<VideoDetails/>} />
          <Route path="/channel/:id" element={<ChannelDetails/>} />
          <Route path="/search/:searchTerm" element={<SearchFeeds/>} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
