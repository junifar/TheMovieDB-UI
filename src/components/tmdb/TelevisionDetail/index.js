import { Grid, Link, Typography } from "@mui/material";
import React, { Fragment } from "react";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";

function TelevisionDetail() {
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
          backgroundImage: "https://via.placeholder.com/240x320.png",
        }}>
        {
          <img
            style={{ display: "none" }}
            src="https://via.placeholder.com/240x320.png"
            alt="poster"
          />
        }
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
                Title
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                Description
              </Typography>
              <Link variant="subtitle1" href="#">
                Link Text
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <img src="https://via.placeholder.com/240x320.png" alt="poster" />
        </Grid>
        <Grid item xs={9}>
          <div>
            <strong>ID : </strong> 0000
          </div>
          <div>
            <strong>Title : </strong> Lorem Ipsum
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default TelevisionDetail;
