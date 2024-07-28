import { useState } from "react";
import { INITIAL_DATA } from "../constants";
function FlashCard() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId((curId) => (curId === id ? null : id));
  }

  return (
    <ul className="grid grid-cols-2 lg:grid-cols-3 h-screen bg-slate-500 p-5 lg:p-20 gap-1 lg:gap-4">
      {INITIAL_DATA.map((question) => {
        return (
          <span
            onClick={() => handleClick(question.id)}
            className={`flex justify-center items-center h-32 lg:h-52 w-full
            ${
              question.id === selectedId
                ? "bg-red-600 text-white"
                : "bg-slate-200 text-black"
            }  rounded-md shadow-md shadow-black cursor-pointer
            text-base font-semibold`}
            key={question.id}
          >
            {question.id === selectedId ? question.answer : question.question}
          </span>
        );
      })}
    </ul>
  );
}

export default FlashCard;
