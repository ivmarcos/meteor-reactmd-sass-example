import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-md';
import Task from './Task.jsx';

// App component - represents the whole app
export default class App extends Component {
  getTasks() {

    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];

  }

  renderTasks() {

    return this.getTasks().map(task => (
      <Task key={task._id} task={task} />
    ));

  }

  render() {

    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>


        <div className="md-grid">
          <Card className="md-cell">
            <CardTitle title="Hello, World!" />
            <CardText>
            Lorem ipsum... pretend more ...
            </CardText>
            <CardActions>
              <Button flat label="Action 1" />
              <Button flat label="Action 2" />
            </CardActions>
          </Card>
        </div>

      </div>
    );

  }
}
