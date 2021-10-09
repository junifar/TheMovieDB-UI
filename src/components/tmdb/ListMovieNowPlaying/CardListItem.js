import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import * as NowPlaying from "../../../constant/tmdb/movie/now_playing";

const CardListItem = (props) => {
  return (
    <Card sx={{ maxWidth: 345}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={
            NowPlaying.TMDB_IMAGE_PATH + props.data.poster_path
          }
          alt="green iguana"
        />
        <CardContent style={{ maxHeight: "150px", minHeight: "150px", overflowY: "scroll",}}>
          <Typography gutterBottom variant="h5" component="div">
            {props.data.original_title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.data.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardListItem;
