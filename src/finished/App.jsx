import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Card } from "react-bootstrap";

import { Header } from "./components/Header";
import { TaskCard } from "./components/TaskCard";
import { AddTaskForm } from "./components/AddTaskForm";
import { ToDo } from "./components/ToDo";
// Tasks - Definition
// { text: string }

function TaskColumn(props) {
  // State
  const [tasks, setTasks] = useState([]);

  // Handler Functions
  const addTask = (text) => setTasks([...tasks, { text: text }]);
  const deleteTask = (task) => setTasks(tasks.filter((t) => t !== task));

  // Rendering Stuff
  const taskCards = tasks.map((task) => (
    <TaskCard task={task} deleteTask={deleteTask} />
  ));

  return (
    <Col xs={9}>
      <h2>My Tasks</h2>
      <AddTaskForm addTask={addTask} />
      {taskCards}
    </Col>
  );
}

function WeatherColumn() {
  const [currentWeather, setCurrentWeather] = useState(null);

  const getWeatherData = async () => {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Edmonton&appid={id}&units=metric"
    const data = await (await fetch(url)).json()
    setCurrentWeather(data)
  }

  useEffect(getWeatherData, []);

  return (
    <Col>
      <h3>Today's Weather</h3>

      <ToDo></ToDo>

      <Card>
        <Card.Body>
          <Card.Title>{currentWeather?.name}</Card.Title>
          <label>Feels Like</label>
          <p>{currentWeather?.main?.feels_like} C</p>
        </Card.Body>
      </Card>
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
