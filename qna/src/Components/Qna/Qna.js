import React from "react";

class Qna extends React.Component {
  render() {
    return (
      <div>
        <p className="font-sans font-ms text-sm text-gray-600">
          QUESTIONS & ANSWERS
        </p>
        <br />
        <div>
          <form className="relative">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-800 "
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              />
            </svg>
            <input
              className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-medium text-black placeholder-gray-600 border  border-gray-600 rounded-none py-2 pl-4 font-bold text-xs h-12	"
              type="text"
              aria-label="Filter projects"
              placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
            />
          </form>
        </div>
        <br />
        <div className="question">
          <div className="w-2/3">
            <p className="font-sans font-bold text-base text-gray-600">
              Q: Who what what which when where why whether how?
            </p>
            <br />
            <div className="answer">
              <p className="font-sans font-bold text-base text-gray-600">A:</p>
              <p className="font-sans font-ms ml-2 text-gray-600 text-xs">
                Icing macaron bear claw jelly beans chocolate cake. Cookie oat
                cake chocolate halvah jelly cake cotton candy soufflé topping.
                Jujubes topping cake gummies lemon drops.
              </p>
            </div>
            <br />

            <div className="details">
              <p className="font-sans font-ms ml-4 text-gray-400 ">
                
                by User1234, January 1, 2019
              </p>
              <p className=" ml-4 mr-4">|</p>
              <p className=" mr-4">
                Helpful?
                <a href="#" className="underline ml-2">
                  Yes
                </a>(2) </p>
              <p className=" mr-4">|</p>
              <p className="">
                <a href="#" className="underline ">
                  Report
                </a>
              </p>
            </div>
          </div>
         
          <div className="side">          
              <p >
            Helpful?
            <a href="#" className="underline ml-2">
              Yes
            </a>(25) </p>
          <p className=" ml-4" >|</p>
          <p >

          <a href="#" className="underline ml-4">
            Add Answer
          </a>
          </p>

          </div>

        </div>
      </div>
    );
  }
}

export default Qna;
