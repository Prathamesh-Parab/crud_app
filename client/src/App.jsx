// src/App.jsx
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [editId, setEditId] = useState(null);

  const API = "http://localhost:5000/api/tasks"; // Your backend endpoint

  // Fetch tasks
  const fetchTasks = async () => {
    const res = await axios.get(API);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await axios.put(`${API}/${editId}`, { text: taskText });
      setEditId(null);
    } else {
      await axios.post(API, { text: taskText });
    }
    setTaskText("");
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTasks();
  };

  const handleEdit = (task) => {
    setTaskText(task.text);
    setEditId(task._id);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6">📝 Task Manager</h1>

      <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter task..."
          className="px-4 py-2 rounded-md border border-gray-300"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          {editId ? "Update" : "Add"}
        </button>
      </form>

      <ul className="w-full max-w-md space-y-2">
        {tasks.map((task) => (
          <li
            key={task._id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <span>{task.text}</span>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(task)}
                className="text-sm text-blue-500 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(task._id)}
                className="text-sm text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
