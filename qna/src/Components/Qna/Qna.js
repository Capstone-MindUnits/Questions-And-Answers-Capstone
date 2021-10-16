import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import moment from "moment";

function Qna(props) {
  console.log("props", props);
  console.log("propsiiiii", props.data);
  console.log("pro", props.data.results);
  console.log("plzzzzz", props.answers);
  // console.log('propppp', props.data.results[0])
  // console.log('prrrrr', props.data.results[0].question_body)
  // moment().format('LL'); moment(testDate).format('MM/DD/YYYY');
  return (
    <div>
      <div className="question">
        <div className="w-2/3">
          <p className="font-sans font-bold text-base text-gray-600">
            Q: Who what which when where why whether how?
          </p>
          <div className="answer mt-2">
            <p className="font-sans font-bold text-base text-gray-600">A:</p>
            <p className="font-sans font-ms ml-2 mt-1 text-gray-600 text-xs">
              Icing macaron bear claw jelly beans chocolate cake. Cookie oat
              cake chocolate halvah jelly cake cotton candy soufflé topping.
              Jujubes topping cake gummies lemon drops.
            </p>
          </div>

          <div className="details  mt-2">
            <p className="font-sans font-ms ml-6 text-gray-400 ">
              by User1234, January 1, 2019
            </p>
            <p className=" ml-4 mr-4 text-gray-600">|</p>
            <p className=" mr-4 text-gray-600">
              Helpful?
              <a href="#" className="underline ml-2 mr-1 ">
                Yes
              </a>
              (2){" "}
            </p>
            <p className=" mr-4 text-gray-600">|</p>
            <p>
              <a href="#" className="underline text-gray-600 ">
                Report
              </a>
            </p>
          </div>
        </div>

        <div className="side text-gray-600">
          <p>
            Helpful?
            <a href="#" className="underline ml-2 mr-1">
              Yes
            </a>
            (25){" "}
          </p>
          <p className=" ml-4">|</p>

          <Popup
            trigger={
              <p>
                <a href="#" className="underline ml-4">
                  Add Answer
                </a>
              </p>
            }
            modal
          >
            <div class="py-12 ml-12 ">
              <h2 class="text-2xl font-bold text-gray-700">
                Submit Your Answer
              </h2>
              <p class="mt-2 text-lg text-gray-600">
                'Product Name':'Question Body'
              </p>
              <div class="mt-8 max-w-md">
                <div class="grid grid-cols-1 gap-6">
                  <label class="block">
                    <span class="text-gray-700">Answer *</span>
                    <textarea
                      class="mt-1 block w-full"
                      rows="3"
                      placeholder="Your Answer..."
                      spellcheck="false"
                    ></textarea>
                  </label>
                  <label class="block">
                    <span class="text-gray-700">Nickame *</span>
                    <input
                      type="text"
                      class="mt-1 block w-full"
                      placeholder="Your Nickname..."
                    />
                  </label>
                  <label class="block">
                    <span class="text-gray-700">Email *</span>
                    <input
                      type="email"
                      class="mt-1 block w-full"
                      placeholder="Your email..."
                    />
                  </label>
                  <button className="w-48 h-12 flex flex-row items-center border border-gray-600">
                    <p className="font-sans font-bold  text-base ml-4 mr-2 text-gray-600">
                      Upload Your Photos
                    </p>
                  </button>
                  <button className="w-24 h-12 flex flex-row items-center border border-gray-600">
                    <p className="font-sans font-bold  text-base ml-4 mr-2 text-gray-600">
                      SUBMIT
                    </p>
                  </button>
                </div>
              </div>
            </div>{" "}
          </Popup>
        </div>
      </div>

      {props.data.results &&
        props.data.results.slice(0,2).map((e, key) => {
          return (
            <div className="question  mt-3" key={key}>
              <div className="w-2/3">
                <p className="font-sans font-bold text-base text-gray-600">
                  {/* Q: Whomst whatever whence wherefore? */}
                  Q: {e.question_body}
                </p>
                <div className="answer mt-2">
                  <p className="font-sans font-bold text-base text-gray-600">
                    A:
                  </p>
                  <p className="font-sans font-ms ml-2 mt-1 text-gray-600 text-xs">
                    Tootsie roll pudding jelly-o jujubes jelly-o wafer biscuit
                    danish ice cream. Cotton candy sweet roll candy.
                  </p>
                </div>

                <div className="details mt-2">
                  <p className="font-sans font-ms ml-6 text-gray-400 ">
                    by {e.asker_name}, {moment(e.answers.date).format("LL")}
                    {/* by User1337, May 1 2019 */}
                  </p>
                  <p className=" ml-4 mr-4 text-gray-600">|</p>
                  <p className=" mr-4 text-gray-600">
                    Helpful?
                    <a href="#" className="underline ml-2 mr-1 ">
                      Yes
                    </a>
                    (0){" "}
                  </p>
                  <p className=" mr-4 text-gray-600">|</p>
                  <p>
                    <a href="#" className="underline text-gray-600 ">
                      Report
                    </a>
                  </p>
                </div>
                <div>
                  <p className="font-sans font-ms ml-6 mt-2 text-gray-600 text-xs">
                    Yes, as you can see in these photos.
                  </p>
                  <div className="photos ">
                    <Popup
                      trigger={
                        <div className="box-border mt-3 ml-6 h-12 w-20 p-4 border-2 border-gray-400	bg-gray-100 "></div>
                      }
                      modal
                    >
                      <div className="box-border mt-3 w-full h-96 border-2 border-gray-400	bg-gray-100 "></div>
                    </Popup>

                    <Popup
                      trigger={
                        <div className="box-border mt-3 ml-3 h-12 w-20 p-4 border-2 border-gray-400	bg-gray-100 "></div>
                      }
                      modal
                    >
                      <div className="box-border mt-3 w-full h-96 p-4 border-2 border-gray-400	bg-gray-100 "></div>
                    </Popup>

                    <Popup
                      trigger={
                        <div className="box-border mt-3 ml-3 h-12 w-20 p-4 border-2 border-gray-400	bg-gray-100 "></div>
                      }
                      modal
                    >
                      <div className="box-border mt-3 w-full h-96 p-4 border-2 border-gray-400	bg-gray-100 "></div>
                    </Popup>
                  </div>
                  <div className="details mt-2">
                    <p className="font-sans font-ms ml-6 text-gray-400 ">
                      {/* by {e.asker_name} - <b> Seller,</b> May 1, 2019 */}
                      by User1337 - <b> Seller,</b> May 1 2019
                    </p>
                    <p className=" ml-4 mr-4 text-gray-600">|</p>
                    <p className=" mr-4 text-gray-600">
                      Helpful?
                      <a href="#" className="underline ml-2 mr-1 ">
                        Yes
                      </a>
                      (0)
                    </p>
                    <p className=" mr-4 text-gray-600">|</p>
                    <p>
                      <a href="#" className="underline text-gray-600 ">
                        Report
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="side text-gray-600">
                <p>
                  Helpful?
                  <a href="#" className="underline ml-2 mr-1">
                    Yes
                  </a>
                  (2){" "}
                </p>
                <p className=" ml-4">|</p>

                <Popup
                  trigger={
                    <p>
                      <a href="#" className="underline ml-4">
                        Add Answer
                      </a>
                    </p>
                  }
                  modal
                >
                  <div class="py-12 ml-12 ">
                    <h2 class="text-2xl font-bold text-gray-700">
                      Submit Your Answer
                    </h2>
                    <p class="mt-2 text-lg text-gray-600">
                      'Product Name':'Question Body'
                    </p>
                    <div class="mt-8 max-w-md">
                      <div class="grid grid-cols-1 gap-6">
                        <label class="block">
                          <span class="text-gray-700">Answer *</span>
                          <textarea
                            class="mt-1 block w-full"
                            rows="3"
                            placeholder="Your Answer..."
                            spellcheck="false"
                          ></textarea>
                        </label>
                        <label class="block">
                          <span class="text-gray-700">Nickame *</span>
                          <input
                            type="text"
                            class="mt-1 block w-full"
                            placeholder="Your Nickname..."
                          />
                        </label>
                        <label class="block">
                          <span class="text-gray-700">Email *</span>
                          <input
                            type="email"
                            class="mt-1 block w-full"
                            placeholder="Your email..."
                          />
                        </label>
                        <button className="w-48 h-12 flex flex-row items-center border border-gray-600">
                          <p className="font-sans font-bold  text-base ml-4 mr-2 text-gray-600">
                            Upload Your Photos
                          </p>
                        </button>
                        <button className="w-24 h-12 flex flex-row items-center border border-gray-600">
                          <p className="font-sans font-bold  text-base ml-4 mr-2 text-gray-600">
                            SUBMIT
                          </p>
                        </button>
                      </div>
                    </div>
                  </div>{" "}
                </Popup>
              </div>
            </div>
          );
        })}

      <div>
        <p className="load font-sans font-bold ml-6 mt-4 text-gray-600 ">
          LOAD MORE ANSWERS
        </p>
      </div>
    </div>
  );
}

export default Qna;
