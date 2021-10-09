import { Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import ListMovieNowPlaying from "../ListMovieNowPlaying";
import ListMovieTopRating from "../ListMovieTopRating";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"span"} variant={"body2"}>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function MovieSchedule() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <h2>Movie Schedule</h2>
      <hr />
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example">
          <Tab label="Now Playing" {...a11yProps(0)} />
          <Tab label="Top Rating" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <ListMovieNowPlaying />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <ListMovieTopRating />
        </TabPanel>
      </Box>
    </Fragment>
  );
}

export default MovieSchedule;
