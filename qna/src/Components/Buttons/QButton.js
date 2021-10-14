import React from "react";

class QButton extends React.Component {
  render() {
    return (
      <div className="QButton">
        <button className="w-40 h-12 flex flex-row items-center border border-gray-600">
         <p className="font-sans font-bold text-xs ml-4 mr-2 text-gray-600">
            ADD A QUESTION
          </p> 
          <svg
            width="15"
            height="15"
            className="transform float-right text-gray-800 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>

          
        </button>
      </div>
    );
  }
}

export default QButton;
