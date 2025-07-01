import React from "react";

function List() {
  const tasks = [
    { title: "Learn React", time: 5 },
    { title: "Revise JS", time: 3 },
    { title: "Have Lunch", time: 0.5 }
  ];
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li>
            {task.title} - <b>{task.time} Hour</b>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
