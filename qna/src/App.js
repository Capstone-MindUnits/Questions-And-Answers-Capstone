import React from "react";
import Qna from "./Components/Qna/Qna.js";
import Search from "./Components/Search/Search.js";
import AButton from "./Components/Buttons/AButton.js";
import QButton from "./Components/Buttons/QButton.js";
import axios from 'axios';
import Token from '../src/config/token.js'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      qna: [],
      count: 0
    };
    this.getQ = this.getQ.bind(this);
  }
  
getQ(){
  axios.get( 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/?product_id=40393',{headers:{
    authorization: Token
    }})
    .then(data => this.setState ({
     qna: data.data
   }))
   .catch((err) => console.log(err))
};

  componentDidMount() {
   this.getQ()
  }

  render() {
      return (
    <div className="app pr-16 pl-16">
      <div className="grid grid-cols-1 gap-4  w-3/5  mx-auto">
        <Search />
        <Qna data = {this.state.qna} answers = {this.state.answers}/>
      </div>
      <div
        className="grid gap-4  w-3/5 mt-4 mx-auto"
        style={{ display: "flex" }}
      >
        <AButton />
        <QButton />
      </div>
    </div>
  );
  }

}

export default App;
