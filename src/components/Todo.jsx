import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useAuth } from "../context/contextapi";
import { useForm } from "react-hook-form";
import EditTodo from "./EditTodo";

function Todo() {
  // pop up edit
  const [openedit, setopenedit] = useState(false);
  const [current_id, setcurrent_id] = useState();
  const [current_title, setcurrent_title] = useState();

  // react-hook-form.......
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const { deleteTodo, addTodo, todosapi, fetchtodos, updateTodo } = useAuth();

  const [todo, settodo] = useState({ title: " " });
  const [todos, settodos] = useState(todosapi);
  // const [showfinished, setshowfinished] = useState(false);

  useEffect(() => {
    settodos(todosapi);
  }, [todosapi]);
  useEffect(() => {
    fetchtodos();
  }, []);

  // on submit data store in database........
  const onsubmit = async (data) => {
    if (!data.title.trim()) {
      return;
    }
    addTodo(data);

    reset();
  };
  const handledelete = (e, id) => {
    deleteTodo(id);
    fetchtodos();
  };

  const handleedit = (e, id, title) => {
    setcurrent_id(id);
    setcurrent_title(title);
    setopenedit(true);
    // console.log(id);
    updateTodo(id);
  };

  return (
    <div className="bg-white/55  bg-gradient-to-r from-white/50 to-blue-400">
      <div className="md:container  text-black m-auto  md:w-1/2 md:min-h-[680px]  min-h-[799px]   py-5 rounded ">
        <div className="todo  ">
          <h1 className="text-center text-4xl font-sans my-6 mb-3">TODO_APP</h1>
          <h1 className="text-xl mt-6 font-semibold  mb-2 mx-3 select-none">
            <li> Add Todos</li>
          </h1>

          <form action="" method="POST" onSubmit={handleSubmit(onsubmit)}>
            <input
              type="text"
              {...register("title")}
              className="outline-dotted md:w-[590px] w-[90vw] px-4 py-1 mx-4 my-3 rounded  h-[6vh] text-2xl"
            />

            <button
              type="submit"
              value="Submit"
              className="outline-dashed bg-purple-500  rounded-md px-7 py-1 md:mx-3 hover:bg-slate-700 hover:text-white font-mono font-semibold md:w-auto w-[75vw] mx-12 my-2"
            >
              Save
            </button>
          </form>
        </div>

        <div className="todolists mt-12">
          <h2 className="text-xl font-semibold mx-4  select-none">Todos : </h2>
          {todos.length === 0 && (
            <div className="mx-8 my-4 p-3">no todos to hare</div>
          )}
          {todos.map((item, i) => {
            return (
              <div
                key={i}
                className="todo text-center border border-x-purple-100 outline-double p-2 mx-5 my-5 rounded-lg justify-between flex "
              >
                <div className="text-2xl w-[450px]  line-clamp-3">
                  {" "}
                  <p className="break-words ">{item.title}</p>
                </div>
                {/* edit button....... */}
                <div className="button md:gap-2 gap-5">
                  <button
                    onClick={(e) => handleedit(e, item._id, item.title)}
                    className="md:my-2 my-1 edit bg-purple-500 rounded-md px-5 py-1 mx-2 hover:bg-slate-700 hover:text-white font-mono font-semibold"
                  >
                    <FaEdit />
                  </button>

                  {/* delete button....... */}
                  <button
                    onClick={(e) => handledelete(e, item._id)}
                    className="md:my-2 delete bg-purple-500 rounded-md px-5 py-1 mx-2 hover:bg-slate-700 hover:text-white font-mono font-semibold"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {openedit && (
        <EditTodo
          onclose={() => setopenedit(false)}
          id={current_id}
          defaultTitle={current_title}
        />
      )}
    </div>
  );
}

export default Todo;
