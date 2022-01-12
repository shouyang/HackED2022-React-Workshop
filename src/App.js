import React, { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  Container,
  Col,
  Form,
  Stack,
  Button,
  Row,
  Navbar,
  Nav,
} from "react-bootstrap";

// A simple class to track our tasks.
class Task {
  constructor(text) {
    this.text = text;
  }
}

function Header() {
  return (
    <Navbar>
      <Navbar.Brand> React-To-Do</Navbar.Brand>
      <Nav className="me-auto"></Nav>
    </Navbar>
  );
}

function AddTaskForm(props) {
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
          onChange={handleTextInput}
        />
      </Form>
      <Button onClick={handleCreateNewTask}>Add Task</Button>
    </Stack>
  );
}


function TaskCard(props) {
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
  )
}

function TaskColumn(props) {
  // State
  const [tasks, setTasks] = useState([]);

  // Handler Functions
  function addTask(text) {
    const newTask = new Task(text);
    setTasks([...tasks, newTask]);
  }

  function deleteTask(task) {
    setTasks(tasks.filter((t) => (t != task)));
  }

  // Rendering Stuff
  const taskCards = [];
  for (let task of tasks) {
    taskCards.push(<TaskCard task={task} deleteTask={deleteTask}/>);
  }

  return (
    <Col xs={9}>
      <h2>My Tasks</h2>
      <AddTaskForm addTask={addTask} />
      {taskCards}
    </Col>
  );
}

function WeatherColumn() {
  return (
    <Col>
      <h3>Today's Weather</h3>
    </Col>
  );
}

function App() {
  return (
    <Container>
      <Header />
      <Row>
        <TaskColumn />
        <WeatherColumn />
      </Row>
    </Container>
  );
}

export default App;
