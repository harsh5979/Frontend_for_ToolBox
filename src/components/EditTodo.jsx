import React, { useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/contextapi";

const EditTodo = ({ onclose, id,defaultTitle  }) => {
  // contextapi
  const { updateTodo } = useAuth();
  // react-hook-form.......
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    if (!data.title.trim()) {
      return;
    }
    updateTodo(data, id);
    onclose()
  };
  // modalref...
  const modalref = useRef();
  const closeModel = (e) => {
    if (modalref.current === e.target) {
      onclose();
    }
  };
  return (
    <div
      ref={modalref}
      onClick={closeModel}
      className="fixed backdrop-blur-sm mt-12 bg-black bg-opacity-25 inset-0  items-center   justify-center flex "
    >
      <div className=" flex flex-col text-white border  p-2">
        <button className="place-self-end mx-3 " onClick={onclose}>
          <IoMdClose size={30} />
        </button>
        <div className="">
          <h1 className="text-2xl mt-6 font-semibold  text-center mb-2 mx-3 select-none">
            Edit Todos
          </h1>

          <form action="" method="POST" onSubmit={handleSubmit(onsubmit)}>
            <input
              type="text"
              {...register("title")}
              defaultValue={defaultTitle}
              className="md:w-[590px] w-[90vw] px-4 py-1 mx-4 my-3 rounded  h-[5vh] text-black"
            />

            <button
              type="submit"
              value="Submit"
              className="bg-purple-500  rounded-md px-7 py-1 md:mx-3 hover:bg-slate-700 hover:text-white font-mono font-semibold md:w-auto w-[75vw] mx-9 my-2"
            >
              edit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
