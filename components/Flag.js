import { Box, makeStyles } from "@material-ui/core";

export default function Flag({ flag }) {
  const classes = useStyles();
  const { position, image } = flag;

  return (
    <Box
      className={classes.flagWrapper}
      style={{
        top: position.y,
        left: position.x,
      }}
    >
      <img className={classes.flagImage} src={image} alt="" />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  flagWrapper: {
    position: "absolute",
    zIndex: 10,
  },
  flagImage: {
    width: 100,
  },
}));
