import React from "react";
import Todo from "../components/Todo";

const TodoList = () => {
  return (
    <div>
      {/* <div className="absolute top-[350px] font-mono text-2xl mx-8 ">
        UNDER CONSTRUCTION...
      </div> */}
      <div
        className=" select-none"
      >
        <Todo />
      </div>
    </div>
  );
};

export default TodoList;
