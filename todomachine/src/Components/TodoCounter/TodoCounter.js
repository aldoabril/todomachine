import React from "react";

export function TodoCounter({ completedTasks, totalTasks }) {
  return (
    <div>
      <h2>{`You have completed ${completedTasks} task of ${totalTasks}`}</h2>
    </div>
  );
}
