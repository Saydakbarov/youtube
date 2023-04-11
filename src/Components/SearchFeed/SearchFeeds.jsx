import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../../utilits/fetchFromApi";
import Videos from "../Videos/Videos";

export default function SearchFeeds() {
  const [videos, setVideos] = useState([]);

  const {searchTerm} = useParams()

  useEffect(() => {

    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
    }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
    <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
     Search Results For <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
    </Typography>

    <Videos videos={videos} />
  </Box>
  );
}
