import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import { addTodosDB, fetchFromDB, updateTodosDB, deleteTodoDB } from '../db/operations';

function TodoList() {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [toggled, setToggle] = useState(false);

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //lägg till todo, både i ui och db 
        addTodo();
        setInput('');
    };

    const addTodo = () => {
        const newTodo = {
            desc: input,
            completed: false,
        };
        addTodosDB(newTodo);
        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (id) => {
        console.log('delete todo');
        const remainingTodos = todos.filter((item) => {
            return id !== item.id;
        });
        deleteTodoDB(id);
        setTodos(remainingTodos);
    };

    const editTodo = (id, newDesc) => {
        console.log('edit', id, newDesc);
        const editedList = todos.map((item) => {
            if (id === item.id) {
                updateTodosDB(id, { ...item, desc: newDesc });
                return { ...item, desc: newDesc };
            }
            return item;
        });
        setTodos(editedList);
    };

    const toggleCompleted = (id) => {
        setToggle(!toggled);
        console.log('in competedTodo:', id);

        const editedList = todos.map((item) => {
            if (id !== item.id) {
                updateTodosDB(id, { ...item, completed: !item.completed });
                return { ...item, completed: !item.completed };
            }
            return item;
        });
        setTodos(editedList);
    };

    // hämtar
    useEffect(() => {
        console.log('use effect körs');
        fetchFromDB().then((newTodo) => {
            setTodos(newTodo);
        });
    }, []);

    return (
        <div>
            <h1>My todos</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor=''> Add a todo ... </label>
                <input type='text' onChange={handleChange} value={input} />
                <button type='submit'>Add</button>
            </form>
            <ul>
                {todos.map((item) => {
                    return (
                        <Todo
                            key={item.id}
                            id={item.id}
                            desc={item.desc}
                            completed={item.completed}
                            toggleCompleted={toggleCompleted}
                            editTodo={editTodo}
                            deleteTodo={deleteTodo}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default TodoList;





