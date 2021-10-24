import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { FaTrashAlt } from "react-icons/fa";


const styles = (theme) => ({
  card: {
    textAlign: "center",
    margin: 10,
    maxWidth: 320,
    minHeight: 480,
    cursor: "pointer",
    borderRadius: 8,
  },
  deleteBtn: {
    borderColor: "#ccc",
    borderStyle: "solid",
    borderWidth: 1,
  },
  media: {
    borderRadius: 10,
    height: 300,
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    paddingTop: 20,
    color: "black",
    fontWeight: "bold",
    textAlign: "left",
  },
  pos: {
    marginBottom: 12,
    fontSize: 13,
    color: "black",
    textAlign: "left",
  },
});

function SimpleCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <CardMedia
          component="img"
          alt={props.name}
          className={classes.media}
          height="140"
          image={props.picture}
          title={props.name}
        />

        <br />
        <Typography className={classes.title} color="textSecondary">
          Name : {props.name}&nbsp;&nbsp;
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          Address : {props.address}
          <br />
          Email ID : {props.email}
        </Typography>

        <CardActions>
          <Button
            className={classes.deleteBtn}
            size="small"
          >
            Delete <FaTrashAlt className={classes.FaDeleteIcon} />
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
