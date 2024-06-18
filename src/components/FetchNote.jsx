import React, { useEffect, useState } from "react";
import { useAuth } from "../context/contextapi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { IoIosCreate } from "react-icons/io";

const FetchNote = () => {
  const { reversedData, updateNote, deleteNote } = useAuth();
  const [crud, setCrud] = useState(false);
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [editedData, setEditedData] = useState({
    title: "",
    description: "",
    tag: "",
  });

  // Function to delete Note .......
  const handleDelete = (id) => {
    deleteNote(id);
  };

  // Function to Edit Note
  const handleEditClick = (note) => {
    setEditedData({
      title: note.title,
      description: note.description,
      tag: note.tag,
    });
    setEditingNoteId(note._id);
  };

  const handlechange = async (e) => {
    await setEditedData({
      ...editedData,
      [e.target.name]: e.target.value,
    });
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSaveClick();
    }
  };

  const handleSaveClick = () => {
    updateNote(editedData, editingNoteId);
    setEditingNoteId(null);
  };

  return (
    <div>
      <div className="mt-[50px]">
        <h1 className="text-3xl mb-6"> All Notes</h1>
      </div>
      <div className="border border-t-2 border-r-0 border-l-0 pt-5 px-5 flex flex-wrap gap-4 h-[78vh] mx-6 mb-4 overflow-y-scroll snap-center">
        {reversedData.length === 0 && (
          <div className="mx-8 my-4 p-3 text-2xl">No Notes to share...</div>
        )}

        {reversedData.map((note) => {
          if (note.title && note.description && note.tag) {
            return (
              <div key={note._id} className="snap-center">
                <div className="inline-block border h-[235px] p-4 rounded-md w-[300px] shadow-xl shadow-zinc-600 mb-4 select-none">
                  {editingNoteId === note._id ? (
                    <div>
                      <h1 className="text-xl text-left line-clamp-1 overflow-hidden flex">
                        <span className="text-slate-400 w-[75px] mx-1 select-none">
                          Title:
                        </span>
                        <div className="line-clamp-1 text-clip w-[250px] select-none">
                          <input
                            autoFocus
                            onKeyDown={handleKeyPress}
                            type="text"
                            name="title"
                            value={editedData.title}
                            onChange={handlechange}
                            className="text-xl text-left bg-black w-[200px] rounded-md p-1"
                          />
                        </div>
                      </h1>

                      <div className="mt-4 overflow-hidden break-words">
                        <p className="my-1 text-left h-[75px] text-wrap break-all overflow-hidden flex">
                          <span className="text-slate-400 w-[75px] mx-1">
                            Desc:
                          </span>
                          <div className="line-clamp-3 w-[250px]">
                            <textarea
                              onKeyDown={handleKeyPress}
                              name="description"
                              value={editedData.description}
                              onChange={handlechange}
                              className=" text-left h-[75px] bg-black rounded-md"
                            />
                          </div>
                        </p>
                      </div>

                      <h3 className="text-right text-xs mb-3 mt-3 relative flex left-[190px]">
                        <span className="text-red-500">Tag:</span>
                        <div className="line-clamp-1 text-ellipsis">
                          <input
                            onKeyDown={handleKeyPress}
                            type="text"
                            name="tag"
                            value={editedData.tag}
                            onChange={handlechange}
                            className="text-right text-xs  bg-black text-white md:w-[50px] w-[50px] mx-2"
                          />
                        </div>
                      </h3>

                      <button
                        onClick={handleSaveClick}
                        className="text-sm border px-8 py-2 rounded-lg"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <div>
                      <h1 className="text-xl text-left line-clamp-1 overflow-hidden flex">
                        <span className="text-slate-400 w-[75px] mx-1 select-none">
                          Title:
                        </span>
                        <div className="line-clamp-1 text-clip w-[250px] select-none">
                          {note.title.slice(0, 17)}
                        </div>
                      </h1>
                      <div className="mt-5 overflow-hidden break-words">
                        <p className="my-1 text-left h-[75px] text-wrap break-all overflow-hidden flex">
                          <span className="text-slate-400 w-[75px] mx-1">
                            Desc:
                          </span>
                          <span className="line-clamp-3 w-[250px]">
                            {note.description}
                          </span>
                        </p>
                      </div>
                      <h3 className="text-right text-xs mb-4 mt-4 relative flex left-[190px]">
                        <span className="text-red-500">Tag:</span>
                        <div className="line-clamp-1 text-ellipsis">
                          {note.tag.slice(0, 9)}
                        </div>
                      </h3>
                      <h4 className="text-sm text-left my-2 text-slate-400">
                        {note.date}
                      </h4>
                      <div className="rounded-full w-6 h-5 relative left-[220px] bottom-7 content-center flex justify-center cursor-pointer border-black">
                        <button
                          onClick={() => handleEditClick(note)}
                          className="mx-2 "
                        >
                          {/* <BsThreeDotsVertical /> */}
                          <IoIosCreate color="" size={20} />
                        </button>
                        <button
                          onClick={() => handleDelete(note._id)}
                          className="mx-2"
                        >
                          <ImBin color="red" size={18} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default FetchNote;
