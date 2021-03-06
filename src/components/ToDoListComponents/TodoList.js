import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { Card, CardBody, CardImg } from 'reactstrap';
import Header from '../HeaderComponent';
import Footer from '../FooterComponent';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <section>
      <Header />
      <h1 className="TodoHeading">Task List</h1>
      <h3 className="TodoHeading">Need to visualize and keep track of all of your daily tasks? <br />
      Keep a list of everything in one place! </h3>
      <CardImg className="TodoListPhoto" src="/TodoListPhoto.jpg" alt="To do list Photo" />
      <div>
        <Card className="TodoCard align-items-center">
          <h1 className="TaskHeading">What's the Plan for Today?</h1>
          <TodoForm onSubmit={addTodo} />
          <Todo
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        </Card>
      </div>
      <Footer />
    </section>
  );
}

export default TodoList;