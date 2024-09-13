import React from "react";
import { Container, Typography } from "@mui/material";
import SearchBar from "../components/Searchbar"; // Import the SearchBar component

const Home = () => {
  return (
    <>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to Kei's Anime List Tracker
        </Typography>
        <Typography variant="body1" align="center">
          Track what you're watching, what you’ve completed, or what you’ve
          dropped.
        </Typography>
      </Container>

      {/* Search Bar Component */}
      <SearchBar />
    </>
  );
};

export default Home;
