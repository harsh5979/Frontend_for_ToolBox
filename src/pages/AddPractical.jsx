import React from "react";
import { useAuth } from "../context/contextapi";
import { useForm } from "react-hook-form";

const AddPractical = () => {
  const { addPractical } = useAuth();
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
      set: data.set.trim(),
      que: data.que.trim(),
      ans: data.ans.trim(),
    };
    if (
      trimmedData.set !== null &&
      trimmedData.que !== null &&
      trimmedData.ans !== null
    ) {
      addPractical(trimmedData);
    }
    reset();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-12 flex-col justify-center items-center my-12 "
      >
        <div className="flex flex-row">
          <label htmlFor="set" className="text-left mb-2 ">
            set :
          </label>
          <input 
            type="text"
            name="set"
            className="outlineinput h-[37px]  "
            {...register("set")}
          />
        </div>
        <div className="flex flex-row">
          <label htmlFor="que" className="text-left mb-2 ">
            que :
          </label>
          <input
            type="text"
            name="que"
            className="outlineinput h-[46px]   "
            {...register("que")}
          />
        </div>

        <div className="flex flex-row">
          <label htmlFor="ans" className="text-left mb-2 ">
            ans :
          </label>
          <textarea
            type="text"
            name="ans"
            className="outlineinput h-[46px]  w-[250px]  "
            {...register("ans")}
          />
        </div>
        <div className="my-3 ">
          <button
            className="bg-[#3f5e8199] w-[295px] py-2 px-6 rounded hover:bg-[#70a2da99] "
            type="submit"
          >
            Add practical
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPractical;
