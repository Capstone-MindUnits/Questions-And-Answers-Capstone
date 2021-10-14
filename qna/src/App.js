import React from 'react';
import Qna from './Components/Qna/Qna.js'
import Search from './Components/Search/Search.js'


function App() {
  return (
    <div className="app">  
      <div className="grid grid-rows-2 row-span-2 h-48 grid-flow-col w-3/5  mx-auto">
         <Search />
         <Qna/>
      </div>  
    </div>
  );
}

export default App;
