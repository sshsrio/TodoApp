// components/TodoCard.js
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  card: {
    transition: "transform 0.3s",
    cursor: "pointer",
    "&:hover": {
      boxShadow: `0 0 10px 3px ${theme.palette.primary.main}`,
      transform: "scale(1.02)",
    },
  },
  deleteButton: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
}));

const TodoCard = ({ todo, onDeleteTodo }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const classes = useStyles();

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" component="h2">
          {todo.title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          style={{
            whiteSpace: "pre-line",
            maxHeight: showFullDescription ? "none" : "3em",
            overflow: "hidden",
          }}
        >
          {todo.description}
        </Typography>
        {todo.description.length > 100 && (
          <IconButton onClick={handleToggleDescription}>
            {showFullDescription ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        )}
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => onDeleteTodo(todo.id)}
        >
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default TodoCard;
