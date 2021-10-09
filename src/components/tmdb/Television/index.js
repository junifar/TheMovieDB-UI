/* eslint-disable */
import { Tab, Tabs, Typography } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import AiringToday from "./AiringToday";
import OntheAir from "./OnTheAir";
import Popular from "./Popular";
import TopRated from "./TopRated";


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
          <Typography component={'span'} variant={'body2'}>{children}</Typography>
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

function Television() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <h2>Television</h2>
      <hr />
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example">
          <Tab label="Airing Today" {...a11yProps(0)} />
          <Tab label="On The Air" {...a11yProps(1)} />
          <Tab label="Popular" {...a11yProps(2)} />
          <Tab label="Top Rated" {...a11yProps(3)} />
        </Tabs>
          <TabPanel value={value} index={0} dir={theme.direction}>
            <AiringToday />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <OntheAir />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Popular />
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <TopRated />
          </TabPanel>
      </Box>
    </Fragment>
  );
}

export default Television;
