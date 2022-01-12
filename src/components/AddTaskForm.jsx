import React, { useState } from "react";
import {
  Form,
  Stack,
  Button
} from "react-bootstrap";

export function AddTaskForm(props) {
  // State
  const [userText, setUserText] = useState("");

  // Event Handlers
  function handleTextInput(event) {
    setUserText(event.target.value);
  }

  function handleCreateNewTask(event) {
    props.addTask(userText);
    setUserText("");
  }

  // Render React & HTML Components
  return (
    <Stack direction="horizontal" gap={3}>
      <Form>
        <Form.Control
          type="text"
          placeholder="Enter a new task!"
          value={userText}
          onChange={handleTextInput} />
      </Form>
      <Button onClick={handleCreateNewTask}>Add Task</Button>
    </Stack>
  );
}
