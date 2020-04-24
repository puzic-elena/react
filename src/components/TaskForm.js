import React, { useState, useContext, useEffect } from "react";
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = () => {
    const { addTask, clearList, editTask, editItem } = useContext(TaskListContext);
    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!editItem){
            addTask(title);
            setTitle('');
        } else {
            editTask(title, editItem.id);
        }
    }

    const handleChange = e => {
        setTitle(e.target.value);
    }

    useEffect(() => {
        if(editItem) {
            setTitle(editItem.title);
        } else {
            setTitle('');
        }
    }, [editItem]);

    return (
        <form onSubmit = { handleSubmit } className="form">
            <input
                type="text"
                placeholder="Add task..."
                value={title}
                onChange={ handleChange }
                required
                className="task-input"
            />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">
                    { editItem ? 'Save' : 'Add Task'}
                </button>
                <button className="btn clear-btn" onClick={ clearList }>
                    Clear
                </button>
            </div>
        </form>
    );
};

export default TaskForm;

