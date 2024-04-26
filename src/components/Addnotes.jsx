import React from "react";
import { useForm } from "react-hook-form";
import { CiCircleInfo } from "react-icons/ci";
import { useAuth } from "../context/contextapi";

const Addnotes = () => {
  const { addnotes } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const trimmedData = await {
      ...data,
      title: data.title.trim(),
      description: data.description.trim(),
      tag: data.tag.trim(),
    };
    if (trimmedData.title !== null && trimmedData.description !== null && trimmedData.tag !== null) {

      addnotes(trimmedData);
    }
    reset();
  };
  const resetform = () => {};
  const validateSpaces = (value) => {
    return value.trim() !== "" || "Please enter a valid value";
  };
  return (
    <div>
      <div className=" md:w-[400px] md:h-[550px] w-[370px]  border rounded-md m-auto">
        <div className="py-7  ">
          <h1 className="text-3xl text-center mt-2">Add Notes</h1>
        </div>
        <div className="mx-5">
          <form onSubmit={handleSubmit(onSubmit)} id="paintingForm">
            <div className="flex flex-col mb-2 h-[99px] my-7">
              <label htmlFor="title" className="text-left mb-2 ">
                Title :
              </label>
              <input
                type="text"
                name="title"
                className="outlineinput h-[37px]  "
                {...register("title", {
                  required: { value: true, message: "required title..." },
                  minLength: {
                    value: 3,
                    message: "enter Title at least 3 charater ",
                  },
                  validate: validateSpaces,
                })}
              />
              {errors.title && (
                <div className="text-red-600 text-left text-xs flex ">
                  <div className="mx-1 ">
                    <CiCircleInfo />
                  </div>
                  {errors.title.message}
                </div>
              )}
            </div>
            <div className="flex flex-col mb-2 h-[99px] ">
              <label htmlFor="name" className="text-left">
                Description :
              </label>
              <textarea
                className="outlineinput  "
                name="description"
                cols="16"
                rows="4"
                {...register("description", {
                  required: { value: true, message: "required description..." },
                  minLength: {
                    value: 4,
                    message: "enter description at least 3 charater ",
                  },
                  validate: validateSpaces,
                })}
              ></textarea>
              {errors.description && (
                <div className="text-red-600 text-left text-xs flex   ">
                  <div className="mx-1">
                    <CiCircleInfo />
                  </div>
                  {errors.description.message}
                </div>
              )}
            </div>
            <div className="flex flex-col mb-2 h-[99px]">
              <label htmlFor="name" className="text-left">
                Tag :
              </label>
              <input
                type="text"
                name="tag"
                className="outlineinput h-[37px]"
                {...register("tag", {
                  required: { value: true, message: "required tag..." },
                  validate: validateSpaces,
                })}
              />
              {errors.tag && (
                <div className="text-red-600 text-left text-xs flex   ">
                  <div className="mx-1 ">
                    <CiCircleInfo />
                  </div>
                  {errors.tag.message}
                </div>
              )}
            </div>

            <div className="my-3 ">
              <button
                className="bg-[#3f5e8199] w-[295px] py-2 px-6 rounded hover:bg-[#70a2da99] "
                type="submit"
              >
                Add note
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addnotes;
