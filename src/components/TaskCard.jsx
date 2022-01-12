import React from "react";
import { Card } from "react-bootstrap";

export function TaskCard(props) {
  const task = props.task;
  const deleteTask = props.deleteTask;

  function handleDone() {
    deleteTask(task);
  }

  return (
    <Card key={task.text} style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Text>{task.text}</Card.Text>
        <Card.Link onClick={handleDone}>Done!</Card.Link>
      </Card.Body>
    </Card>
  );
}
