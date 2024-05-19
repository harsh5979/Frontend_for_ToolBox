import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark, docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdOutlineContentCopy } from "react-icons/md";

const javaPracticalCard = ({ pdata, data }) => {
  const [iscopy, setiscopy] = useState(null);

  const handlecopy = (id) => {
    setiscopy(id);
  };
  return (
    <div>
      {pdata.map((e, i) => {
        return (
          <div
            key={i}
            id={`item-${i + 1}`}
            className="overflow-auto my-8 m-auto justify-center  "
          >
            <div>
              <h2 className="text-left md:w-[800px] flex-wrap   md:my-2 md:mb-8 md:mx-2">
                {e.que}
              </h2>
            </div>

            {e.ans && e.ans!=="" && (
              <div className="h-[390px]  md:w-[75%] w-[85vw]  justify-center items-center content-center  rounded-b-lg    border md:rounded-xl text-white bg-slate-700 overflow-auto md:mx-2 my-3 ">
                <div className="bg-black p-3 sticky top-0 flex justify-between">
                  <h2 className="text-left  mx-7 ">Example code</h2>
                  <div className="mx-9  ">
                    <CopyToClipboard text={e.ans} onCopy={() => handlecopy(i)}>
                      <button
                        type="button"
                        // onClick={() => {
                        //   handlecopy();
                        // }}
                      >
                        <div className="flex justify-center  ">
                          <div className="mx-2">
                            <MdOutlineContentCopy />
                          </div>

                          <h2 className="w-8">
                            {iscopy === i ? "Copied!!" : "Copy"}
                          </h2>
                        </div>
                      </button>
                    </CopyToClipboard>
                  </div>
                </div>

                <div className="text-left  ">
                  <SyntaxHighlighter
                    language="java"
                    style={dark}
                    
                  >
                    {`${e.ans} `}
                  </SyntaxHighlighter>
                </div>
              </div>
            )}

            {e.dse && (
              <div className="top-0  bg-black sticky rounded-md w-[900px] my-4 mx-3 ">
                <div className="flex">
                  <h1 className="">des:</h1>
                  {e.dse}
                </div>
              </div>
            )}

            {e.note && (
              <div className="top-0  bg-black sticky rounded-md border my-4 mx-3 md:w-[600px]">
                <h2 className="text-left mx-6 p-2">Note : {e.note_p} </h2>
                <div className="bg-white text-black">{e.note}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default javaPracticalCard;
