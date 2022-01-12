import React, { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Col,
  Row,
} from "react-bootstrap";

import { Header } from "./components/Header";
import { TaskCard } from "./components/TaskCard";
import { AddTaskForm } from "./components/AddTaskForm";

// A simple class to track our tasks.
class Task {
  constructor(text) {
    this.text = text;
  }
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
