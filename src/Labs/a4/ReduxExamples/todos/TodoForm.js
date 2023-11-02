import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo, setTodo } from './todosReducer';

function TodoForm() {
    const { todo } = useSelector((state) => state.todosReducer);
    const dispatch = useDispatch();

    return (
        <li className="list-group-item">
            <input value={todo.title} onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))} className="form-control" />
            <button onClick={() => dispatch(updateTodo(todo))} className="btn btn-warning">
                Update
            </button>
            <button onClick={() => dispatch(addTodo(todo))} className="btn btn-success">
                Add
            </button>
        </li>
    )
}

export default TodoForm;