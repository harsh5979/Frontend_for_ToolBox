import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useAuth } from "../context/contextapi";
import { useForm } from "react-hook-form";

function Todo() {
  // react-hook-form.......
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const { deleteTodo, addTodo, todosapi,fetchtodos,updateTodo } = useAuth();

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

  const handleedit = (e, id) => {
    console.log(id);
    updateTodo(id)
  };

  return (
    <>
   
      <div className="md:container bg-gray-400 text-black m-auto  md:w-1/2 md:min-h-[680px]  min-h-[799px] my-2  py-5 rounded ">
          
      
        <div className="todo  ">
          <h1 className="text-center text-3xl font-serif my-3 mb-3">
            TODO List Demo App
          </h1>
          <h1 className="text-xl mt-6 font-semibold  mb-2 mx-3 select-none">
            <li>add Todos</li>
          </h1>

          <form action="" method="POST" onSubmit={handleSubmit(onsubmit)}>
            <input
              type="text"
              {...register("title")}
              className="md:w-[590px] w-[90vw] px-4 py-1 mx-4 my-3 rounded  h-[5vh]"
            />

            <button
              type="submit"
              value="Submit"
              className="bg-purple-500  rounded-md px-7 py-1 md:mx-3 hover:bg-slate-700 hover:text-white font-mono font-semibold md:w-auto w-[75vw] mx-9 my-2"
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
                className="todo text-center border border-x-purple-100 p-2 mx-5 my-3 rounded-lg justify-between flex "
              >
                <div className="text-2xl">{item.title}</div>
                {/* edit button....... */}
                <div className="button gap-2">
                  <button
                    onClick={(e) => handleedit(e, item._id)}
                    className="edit bg-purple-500 rounded-md px-5 py-1 mx-2 hover:bg-slate-700 hover:text-white font-mono font-semibold"
                  >
                    <FaEdit />
                  </button>

                  {/* delete button....... */}
                  <button
                    onClick={(e) => handledelete(e, item._id)}
                    className="delete bg-purple-500 rounded-md px-5 py-1 mx-2 hover:bg-slate-700 hover:text-white font-mono font-semibold"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Todo;
