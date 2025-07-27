// DailyTaskTracker.jsx
import React, { useState, useEffect } from "react";

const defaultTasks = [
  "Project Work",
  "Interview Prep",
  "English Practice",
  "Job Apply",
  "New Tech Learn",
];

const getTodayDate = () => new Date().toISOString().split("T")[0];

export default function DailyTaskTracker() {
  const [tasks, setTasks] = useState([]);
  const [date, setDate] = useState(getTodayDate());

  useEffect(() => {
    const saved = localStorage.getItem("daily-tasks-" + date);
    if (saved) {
      setTasks(JSON.parse(saved));
    } else {
      setTasks(
        defaultTasks.map((task) => ({
          name: task,
          done: false,
          timeSpent: "",
        }))
      );
    }
  }, [date]);

  const handleCheck = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
    localStorage.setItem("daily-tasks-" + date, JSON.stringify(updated));
  };

  const handleTimeChange = (index, value) => {
    const updated = [...tasks];
    updated[index].timeSpent = value;
    setTasks(updated);
    localStorage.setItem("daily-tasks-" + date, JSON.stringify(updated));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 shadow-lg rounded-2xl bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">
        🗓️ Daily Task Tracker ({date})
      </h1>

      <div className="mb-4 text-center">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      {tasks.map((task, index) => (
        <div
          key={index}
          className="flex items-center justify-between mb-3 border-b pb-2"
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => handleCheck(index)}
            />
            <span className={task.done ? "line-through" : ""}>{task.name}</span>
          </div>
          <input
            type="text"
            placeholder="Time / Notes"
            value={task.timeSpent}
            onChange={(e) => handleTimeChange(index, e.target.value)}
            className="border rounded p-1 w-32"
          />
        </div>
      ))}

      <p className="text-center text-sm text-gray-500 mt-4">
        Your data is saved in your browser automatically.
      </p>
    </div>
  );
}
