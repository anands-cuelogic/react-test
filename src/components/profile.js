import React from "react";
import {
  Card,
  Avatar,
  CardHeader,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Grid
} from "@material-ui/core";
import { MoreVert, Favorite, Share } from "@material-ui/icons";

const styles = () => ({
  media: { height: 0, paddingTop: "56.25%" }
});

const profile = props => {
  console.log(">>>>>>>>>Props ", props);
  return (
    <div>
      <Grid container justify="center" alignItems="center">
        <Card>
          <CardHeader
            avatar={
              <Avatar arial-label="pic">
                <img src={props.person.picture.thumbnail} />
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVert onClick={() => props.refreshImageHandler()} />
              </IconButton>
            }
            title={
              props.person.name.title.toUpperCase() +
              ". " +
              props.person.name.first.toUpperCase() +
              " " +
              props.person.name.last.toUpperCase()
            }
            subheader={props.person.email}
          />

          <CardMedia
            style={{ height: 0, paddingTop: "56.25%" }}
            image={props.person.picture.large}
            title={props.person.name.first}
          />
          <CardContent>
            <Typography paragraph>
              <b>Address</b>
            </Typography>
            <Typography paragraph>
              <b>Street:</b> {props.person.location.street}
            </Typography>
          </CardContent>

          <CardActions disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <Favorite />
            </IconButton>

            <IconButton aria-label="Share">
              <Share />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
};

export default profile;
