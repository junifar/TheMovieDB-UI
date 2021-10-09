import React, { Fragment } from "react";
import { Grid, Link, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

function TelevisionDetail() {
  const IMAGE_BACKGROUND =
    "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/wvdWb5kTQipdMDqCclC6Y3zr4j3.jpg";
  return (
    <Fragment>
      <h2>Television Detail</h2>
      <hr />
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: IMAGE_BACKGROUND,
        }}>
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: "none" }} src={IMAGE_BACKGROUND} alt="TEST" />}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)",
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom>
                TITLE
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                DESCRIPTION
              </Typography>
              <Link variant="subtitle1" href="#">
                LINK
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
}

export default TelevisionDetail;
