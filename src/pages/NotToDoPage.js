import React, { useState, useEffect, useContext } from 'react';
import API from '../utils/axios';
import AuthContext from '../context/AuthContext';

const NotToDoPage = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    const { user, logout } = useContext(AuthContext);

    const fetchTasks = async () => {
        const { data } = await API.get('/notToDo');
        setTasks(data);
    };

    const addTask = async () => {
        const { data } = await API.post('/notToDo', { task });
        setTasks([...tasks, data]);
        setTask('');
    };

    const deleteTask = async (id) => {
        await API.delete(`/notToDo/${id}`);
        setTasks(tasks.filter((t) => t._id !== id));
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h1>Welcome, {user.name}!</h1>
            <button onClick={logout}>Logout</button>
            <div>
                <input
                    type="text"
                    placeholder="Enter not-to-do task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                {/* <Link to="/login/Create" class="btn btn-primary">Add Task</Link> */}
                <button onClick={addTask} className='btn btn-primary'>Add Task</button>
            </div>
            <ul>
                {tasks.map((t) => (
                    <li key={t._id}>
                        {t.task}
                        <button onClick={() => deleteTask(t._id)} className="btn btn-danger">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotToDoPage;
