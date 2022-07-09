import React from "react";
import "./TodoCounter.css"
export function TodoCounter({ completedTasks, totalTasks, loading }) {
  return (
    <div>
      <h2 className={`todoCounter ${loading && "todoCounter--loading"}`}>{`You have completed ${completedTasks} task of ${totalTasks}`}</h2>
    </div>
  );
}
